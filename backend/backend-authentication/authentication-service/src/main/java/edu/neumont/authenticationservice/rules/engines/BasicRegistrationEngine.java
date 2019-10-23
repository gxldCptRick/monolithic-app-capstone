package edu.neumont.authenticationservice.rules.engines;

import edu.neumont.authenticationservice.models.Student;
import edu.neumont.authenticationservice.models.entities.repositories.LoginRepository;

public class BasicRegistrationEngine implements RegistrationEngine {

    private LoginRepository loginRepository;

    @Override
    public void addStudent(Student student) {
        
    }
}
