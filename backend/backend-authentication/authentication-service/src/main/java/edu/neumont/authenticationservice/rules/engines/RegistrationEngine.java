package edu.neumont.authenticationservice.rules.engines;

import edu.neumont.authenticationservice.models.ResultStatus;
import edu.neumont.authenticationservice.models.Student;

public interface RegistrationEngine {
    ResultStatus<Student> addStudent(Student student);
}
