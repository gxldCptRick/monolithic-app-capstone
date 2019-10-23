package edu.neumont.authenticationservice.validation;

public class ValidationException extends RuntimeException{
    public ValidationException(){
        super("Could not validate");
    }
}
