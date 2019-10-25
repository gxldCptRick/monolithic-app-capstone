package edu.neumont.authenticationservice.spring.configs;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.logging.Level;
import java.util.logging.Logger;

@Configuration
public class GeneralConfigs {

    @Bean
    public ObjectMapper defaultMapper(){
        return new ObjectMapper();
    }

    @Bean
    public Logger defaultLogger(){
        var logger = Logger.getLogger("main");
        logger.setLevel(Level.INFO);
        return logger;
    }
}
