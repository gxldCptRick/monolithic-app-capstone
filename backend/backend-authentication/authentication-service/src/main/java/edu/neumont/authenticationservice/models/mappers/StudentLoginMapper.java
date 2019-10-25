package edu.neumont.authenticationservice.models.mappers;

import edu.neumont.authenticationservice.models.Student;
import edu.neumont.authenticationservice.models.entities.Login;
import edu.neumont.authenticationservice.models.factories.LoginFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class StudentLoginMapper implements MapTo<Student, Login> {

    @Autowired
    private LoginFactory defaultFactory;

    @Override
    public Login map(Student student) {
        return defaultFactory.createLogin(student.getUsername(), student.getPassword());
    }
}
