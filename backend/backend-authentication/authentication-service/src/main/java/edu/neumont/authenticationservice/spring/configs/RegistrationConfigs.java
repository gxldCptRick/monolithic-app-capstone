package edu.neumont.authenticationservice.spring.configs;

import edu.neumont.authenticationservice.models.Student;
import edu.neumont.authenticationservice.models.entities.Login;
import edu.neumont.authenticationservice.models.entities.StudentAddressInfo;
import edu.neumont.authenticationservice.models.entities.StudentInfo;
import edu.neumont.authenticationservice.models.mappers.MapTo;
import edu.neumont.authenticationservice.models.mappers.StudentLoginMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RegistrationConfigs {

    @Bean
    public MapTo<Student, StudentInfo> studentInfoMapper() {
        return student -> {
            var studentInfo = new StudentInfo();
            studentInfo.setFirstName(student.getFirstName());
            studentInfo.setLastName(student.getLastName());
            studentInfo.setUsername(student.getUsername());
            return studentInfo;
        };
    }

    @Bean
    public MapTo<Student, StudentAddressInfo> studentAddressInfoMapper(){
        return student -> {
            var studentAddressInfo = new StudentAddressInfo();
            studentAddressInfo.setAddress(student.getAddress());
            studentAddressInfo.setEmail(student.getEmail());
            studentAddressInfo.setPhoneNumber(student.getPhoneNumber());
            studentAddressInfo.setZipCode(student.getZipCode());
            studentAddressInfo.setUsername(student.getUsername());
            return studentAddressInfo;
        };

    }
}
