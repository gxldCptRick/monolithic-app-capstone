package edu.neumont.authenticationservice;

import edu.neumont.authenticationservice.routes.StudentLoginRouter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import spark.RouteGroup;

import static spark.Spark.*;

@SpringBootApplication
public class AuthenticationServiceApplication {

	public static void main(String[] args) {
		var context = SpringApplication.run(AuthenticationServiceApplication.class, args);
		port(getPort());
		path("/api", () ->{
			var router = new StudentLoginRouter();
			router.initializeRoutes(context.getBeanFactory());
			path("/users", router);
		});
	}

	private static int getPort() {
		String port = System.getenv("server_auth_port");
		return  port != null? Integer.parseInt(port):  8000;
	}

}
