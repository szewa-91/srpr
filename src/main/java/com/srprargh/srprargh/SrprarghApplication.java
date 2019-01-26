package com.srprargh.srprargh;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;

@SpringBootApplication
public class SrprarghApplication {

	public static void main(String[] args) {
		SpringApplication.run(SrprarghApplication.class, args);
	}

	@PostConstruct
	public void initApplication() {

	}

}

