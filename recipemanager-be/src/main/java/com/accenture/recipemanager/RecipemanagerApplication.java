package com.accenture.recipemanager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication()
@EnableJpaRepositories("com.accenture")
public class RecipemanagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(RecipemanagerApplication.class, args);
	}

}
