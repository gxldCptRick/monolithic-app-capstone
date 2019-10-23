package edu.neumont.authenticationservice.models;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

public class ResultStatus<T> {
    private boolean wasSuccessful;
    private T result;
    private List<String> errorMessages;

    protected ResultStatus(){
        errorMessages = new ArrayList<>();
    }

    public static <T2> ResultStatus<T2> createSuccesfulStatus(T2 result){
        var status = new ResultStatus<T2>();
        status.setWasSuccessful(true);
        status.setResult(result);
        return status;
    }

    public static <T2> ResultStatus<T2> createErrorStatus(String... failureMessages){
        return createErrorStatus(Arrays.asList(failureMessages));
    }

    public static <T2> ResultStatus<T2> createErrorStatus(Collection<String> failureMessages){
        var status = new ResultStatus<T2>();
        status.errorMessages.addAll(failureMessages);
        return status;
    }

    public Collection<String> getErrorMessages(){
        return new ArrayList<>(this.errorMessages);
    }
    public boolean wasSuccessful() {
        return wasSuccessful;
    }

    private void setWasSuccessful(boolean wasSuccessful) {
        this.wasSuccessful = wasSuccessful;
    }

    public T getResult() {
        return result;
    }

    private void setResult(T result) {
        this.result = result;
    }
}
