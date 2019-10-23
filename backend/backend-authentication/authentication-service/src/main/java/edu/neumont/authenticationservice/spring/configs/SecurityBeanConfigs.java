package edu.neumont.authenticationservice.spring.configs;

import edu.neumont.authenticationservice.models.factories.LoginFactory;
import edu.neumont.authenticationservice.models.factories.MessageDigestSecureRandomLoginFactory;
import edu.neumont.authenticationservice.validation.LoginValidator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SecurityBeanConfigs {
    @Bean
    public LoginFactory defaultFactory(){
        return new MessageDigestSecureRandomLoginFactory("MD5");
    }
}
