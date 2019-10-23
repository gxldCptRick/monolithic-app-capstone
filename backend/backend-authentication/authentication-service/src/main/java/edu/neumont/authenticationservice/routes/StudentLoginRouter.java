package edu.neumont.authenticationservice.routes;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import edu.neumont.authenticationservice.models.Login;
import edu.neumont.authenticationservice.models.ResponseObject;
import edu.neumont.authenticationservice.models.ResultStatus;
import edu.neumont.authenticationservice.models.Student;
import edu.neumont.authenticationservice.rules.engines.RegistrationEngine;
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
        var engine = beanFactory.getBean(RegistrationEngine.class);
        var student = mapper.readValue(req.body(), Student.class);

        var result = engine.addStudent(student);

        if(result.wasSuccessful()){
            response.setStatusCode(201);
            response.setBody("Saved Successfully");
        }else{
            response.setStatusCode(400);
            response.setErrorMessage(result.getErrorMessages().stream().findFirst().orElse("An unknown error occurred."));
        }
        res.status(response.getStatusCode());

        return response;
    }

    @Override
    public void addRoutes() {
        var mapper = beanFactory.getBean(ObjectMapper.class);
        post("/login", "application/json", this::handleStudentLoginRoute, mapper::writeValueAsString);
        post("/", "application/json",this::handleStudentRegistrationRoute, mapper::writeValueAsString);
        before("/:username", (req, res) -> {
           var auth = req.headers("authorization");
           if(!auth.startsWith("Bearer")){
               halt(401, writeAsJson(ResultStatus.createErrorStatus("Authorization type must be Bearer")));
           }
           if(){

           }
        });
        get("/:username", "application/json", this::handleGetStudentInfoRoute, mapper::writeValueAsString);
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

    private Object handleGetStudentInfoRoute(Request request, Response response) {
        return null;
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
