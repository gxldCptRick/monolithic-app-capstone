package edu.neumont.authenticationservice.models;

import java.util.HashMap;
import java.util.Map;

public class ResponseObject {
    private int statusCode;
    private String errorMessage;
    private Object body;
    public ResponseObject(){
    }



    public int getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public Object getBody() {
        return body;
    }

    public void setBody(Object body) {
        this.body = body;
    }
}
