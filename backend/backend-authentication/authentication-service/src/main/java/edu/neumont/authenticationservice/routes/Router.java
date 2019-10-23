package edu.neumont.authenticationservice.routes;

import org.springframework.beans.factory.BeanFactory;
import spark.RouteGroup;

public interface  Router extends RouteGroup {
    void initializeRoutes(BeanFactory beanFactory);
}
