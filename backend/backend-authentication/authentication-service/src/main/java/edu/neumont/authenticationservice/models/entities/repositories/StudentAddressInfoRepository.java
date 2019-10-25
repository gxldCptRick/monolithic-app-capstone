package edu.neumont.authenticationservice.models.entities.repositories;

import edu.neumont.authenticationservice.models.entities.StudentAddressInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentAddressInfoRepository  extends JpaRepository<StudentAddressInfo, String> {
}
