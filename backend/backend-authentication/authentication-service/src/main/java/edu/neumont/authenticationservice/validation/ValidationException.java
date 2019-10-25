package edu.neumont.authenticationservice.validation;

public class ValidationException extends RuntimeException{
    private String invalidField;
    private String reason;

    public ValidationException(){
        super("Could not validate");
    }

    public String getInvalidField() {
        return invalidField;
    }

    public void setInvalidField(String invalidField) {
        this.invalidField = invalidField;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }
}
