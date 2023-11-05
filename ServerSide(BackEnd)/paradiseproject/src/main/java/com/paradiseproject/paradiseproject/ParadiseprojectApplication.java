package com.paradiseproject.paradiseproject;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("com.paradiseproject.paradiseproject.model")
public class ParadiseprojectApplication {
    public static void main(String[] args) {
        SpringApplication.run(ParadiseprojectApplication.class, args);
    }
}
