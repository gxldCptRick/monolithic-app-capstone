package edu.neumont.authenticationservice.validation;

import com.fasterxml.jackson.databind.ObjectMapper;
import edu.neumont.authenticationservice.models.entities.repositories.LoginRepository;
import edu.neumont.authenticationservice.models.factories.LoginFactory;
import edu.neumont.authenticationservice.models.factories.MessageDigestSecureRandomLoginFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Map;

@Component
public class LoginValidator {
    @Autowired
    private LoginRepository loginRepository;
    @Autowired
    private ObjectMapper mapper;

    private String tokenPath;

    public LoginValidator(LoginRepository loginRepository){
        setLoginRepository(loginRepository);
        tokenPath = System.getenv("BF_AUTHENTICATION_HOST") != null? System.getenv("BF_AUTHENTICATION_HOST"): "localhost:8080";
    }

    public boolean validateLogin(String username, String password){
        var login = loginRepository
                .findByUsername(username)
                .orElseThrow(ValidationException::new);
        var factory = getLoginFactory(login.getCypher());
        return login.equals(factory.createLogin(username, password, login.getSalt()));
    }

    private LoginFactory getLoginFactory(String cypher) {
        return new MessageDigestSecureRandomLoginFactory(cypher);
    }

    public void setLoginRepository(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }

    public boolean validateUserExists(String username) {
        return loginRepository
                .findByUsername(username)
                .isPresent();
    }

    public boolean isValidToken(String auth) {
        try {
            var request = HttpClient.newHttpClient().send(HttpRequest.newBuilder().build(), HttpResponse.BodyHandlers.ofString()).body();
            var object = mapper.readValue(request, Map.class);
            return (int)object.get("status") == 200;
        } catch (IOException | InterruptedException e) {
            return false;
        }
    }

    public ObjectMapper getMapper() {
        return mapper;
    }

    public void setMapper(ObjectMapper mapper) {
        this.mapper = mapper;
    }
}
