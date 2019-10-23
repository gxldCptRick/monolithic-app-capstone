package edu.neumont.authenticationservice.routes;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import edu.neumont.authenticationservice.models.Login;
import edu.neumont.authenticationservice.models.ResponseObject;
import edu.neumont.authenticationservice.validation.AuthenticationException;
import edu.neumont.authenticationservice.validation.AuthorizationException;
import edu.neumont.authenticationservice.validation.LoginValidator;
import org.springframework.beans.factory.BeanFactory;
import spark.Request;
import spark.Response;

import java.io.IOException;

import static spark.Spark.*;

public class StudentLoginRouter implements Router {
    private BeanFactory beanFactory;

    @Override
    public void initializeRoutes(BeanFactory beanFactory) {
        this.beanFactory = beanFactory;
    }


    private Object handleStudentLoginRoute(Request req, Response res) throws IOException {
        var mapper = beanFactory.getBean(ObjectMapper.class);
        var login = mapper.readValue(req.body(), Login.class);
        var loginValidator = beanFactory.getBean(LoginValidator.class);
        var responseObject = new ResponseObject();
        if(loginValidator.validateLogin(login.getUsername(), login.getPassword())){
            responseObject.setStatusCode(200);
            responseObject.setBody("Was Successfully Authenticated");
        }else{
            throw new AuthenticationException();
        }
        return responseObject;
    }


    private Object handleStudentRegistrationRoute(Request req, Response res) throws IOException {
        var mapper = beanFactory.getBean(ObjectMapper.class);
        var response = new ResponseObject();
        var loginValidator = beanFactory.getBean(LoginValidator.class);
        var login = mapper.readValue(req.body(), Login.class);
        response.setStatusCode(201);
        res.status(201);
        if(loginValidator.validateUserExists(login.getUsername())){
            throw new AuthenticationException();
        }
        return response;
    }

    @Override
    public void addRoutes() {
        var mapper = beanFactory.getBean(ObjectMapper.class);
        post("/login", "application/json", this::handleStudentLoginRoute, mapper::writeValueAsString);
        post("/", "application/json",this::handleStudentRegistrationRoute, mapper::writeValueAsString);
        exception(AuthenticationException.class, (e, req, res) -> {
            res.status(400);
            var responseObj = new ResponseObject();
            res.body(writeAsJson(responseObj));
        });
        exception(AuthorizationException.class, (e, req, res) -> {
            res.status(401);
            var responseObj = new ResponseObject();
            res.body(writeAsJson(responseObj));
        });
    }

    private String writeAsJson(Object value){
        var mapper = beanFactory.getBean(ObjectMapper.class);
        try {
            return mapper.writeValueAsString(value);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
}
