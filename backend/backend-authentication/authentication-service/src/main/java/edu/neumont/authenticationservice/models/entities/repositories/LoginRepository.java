package edu.neumont.authenticationservice.models.entities.repositories;

import edu.neumont.authenticationservice.models.entities.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface LoginRepository extends JpaRepository<Login, Integer> {
    Optional<Login> findByUsername(String username);
}
