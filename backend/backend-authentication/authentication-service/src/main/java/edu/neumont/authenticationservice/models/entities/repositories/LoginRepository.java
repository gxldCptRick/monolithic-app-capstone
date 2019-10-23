package edu.neumont.authenticationservice.models.entities.repositories;

import edu.neumont.authenticationservice.models.entities.Login;
import org.springframework.data.repository.Repository;

import java.util.Optional;

public interface LoginRepository extends Repository<Login, Integer> {
    Optional<Login> findByUsername(String username);
}
