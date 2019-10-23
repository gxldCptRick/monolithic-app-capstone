package edu.neumont.authenticationservice.models.factories;

import edu.neumont.authenticationservice.models.entities.Login;

public interface LoginFactory {
    Login createLogin(String username, String password);
    Login createLogin(String username, String password, byte[] salt);
}
