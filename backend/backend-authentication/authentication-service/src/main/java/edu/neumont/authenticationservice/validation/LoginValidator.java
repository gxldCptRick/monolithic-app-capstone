package edu.neumont.authenticationservice.validation;

import edu.neumont.authenticationservice.models.entities.repositories.LoginRepository;
import edu.neumont.authenticationservice.models.factories.LoginFactory;
import edu.neumont.authenticationservice.models.factories.MessageDigestSecureRandomLoginFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class LoginValidator {
    @Autowired
    private LoginRepository loginRepository;

    public LoginValidator(LoginRepository loginRepository){
        setLoginRepository(loginRepository);
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
}
