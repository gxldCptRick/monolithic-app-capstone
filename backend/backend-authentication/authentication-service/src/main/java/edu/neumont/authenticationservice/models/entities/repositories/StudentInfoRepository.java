package edu.neumont.authenticationservice.models.entities.repositories;

import edu.neumont.authenticationservice.models.entities.StudentInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentInfoRepository extends JpaRepository<StudentInfo, String> {
}
