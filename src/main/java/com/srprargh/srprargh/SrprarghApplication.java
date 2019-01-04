package com.srprargh.srprargh;

import com.srprargh.srprargh.model.User;
import com.srprargh.srprargh.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.util.Collection;

@SpringBootApplication
public class SrprarghApplication {

	private final UserRepository userRepository;

	@Autowired
	public SrprarghApplication(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(SrprarghApplication.class, args);
	}

	@PostConstruct
	public void initApplication() {

		User marcin = new User("Marcin");

		userRepository.save(marcin);
		System.out.println("Siema");
		Collection<User> all = userRepository.findAll();
		System.out.println(all.size());
	}

}

