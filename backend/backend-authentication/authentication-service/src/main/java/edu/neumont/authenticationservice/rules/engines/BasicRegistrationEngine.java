package edu.neumont.authenticationservice.rules.engines;

import edu.neumont.authenticationservice.models.ResultStatus;
import edu.neumont.authenticationservice.models.Student;
import edu.neumont.authenticationservice.models.entities.Login;
import edu.neumont.authenticationservice.models.entities.StudentAddressInfo;
import edu.neumont.authenticationservice.models.entities.StudentInfo;
import edu.neumont.authenticationservice.models.entities.repositories.LoginRepository;
import edu.neumont.authenticationservice.models.entities.repositories.StudentAddressInfoRepository;
import edu.neumont.authenticationservice.models.entities.repositories.StudentInfoRepository;
import edu.neumont.authenticationservice.models.factories.LoginFactory;
import edu.neumont.authenticationservice.models.mappers.MapTo;
import edu.neumont.authenticationservice.validation.ValidationException;
import org.springframework.beans.factory.annotation.Autowired;

public class BasicRegistrationEngine implements RegistrationEngine {

    @FunctionalInterface
    private interface ValidationRunnable {
        void tryRun();
    }

    @Autowired
    private LoginRepository loginRepository;
    @Autowired
    private StudentInfoRepository studentInfoRepository;
    @Autowired
    private StudentAddressInfoRepository studentAddressInfoRepository;
    @Autowired
    private MapTo<Student, StudentInfo> studentInfoMapper;
    @Autowired
    private MapTo<Student, StudentAddressInfo> studentAddressInfoMapper;
    @Autowired
    private MapTo<Student, Login> studentLoginMappper;

    @Override
    public ResultStatus<Student> addStudent(Student student) {
        var goodResult = ResultStatus.createSuccesfulStatus(student);
        var currentResult = runWithCatchBlock(() -> addToLoginBoard(student), goodResult);
        if(currentResult == goodResult){
            currentResult = runWithCatchBlock(() -> addToStudentInfoBoard(student), goodResult);
            if(currentResult == goodResult){
                currentResult = runWithCatchBlock(() -> addToStudentAddressBoard(student), goodResult);
                return currentResult;
            }else{
                return currentResult;
            }
        }else{
            return currentResult;
        }
    }

    private void addToStudentAddressBoard(Student student) {
        var studentAddress = studentAddressInfoMapper.map(student);
        studentAddressInfoRepository.saveAndFlush(studentAddress);
    }

    private void addToStudentInfoBoard(Student student) {
        var studentInfo = studentInfoMapper.map(student);
        studentInfoRepository.saveAndFlush(studentInfo);
    }

    private void addToLoginBoard(Student student) {
        var login = studentLoginMappper.map(student);
        loginRepository.saveAndFlush(login);
    }

    private ResultStatus<Student> runWithCatchBlock(ValidationRunnable validationRunnable, ResultStatus<Student> defaultResult){
        try{
            validationRunnable.tryRun();
        }catch(ValidationException e){
            return ResultStatus
                    .createErrorStatus(String
                            .format("Student was not valid because: %s was %s", e.getInvalidField(), e.getReason()));
        }
        return defaultResult;
    }
}
