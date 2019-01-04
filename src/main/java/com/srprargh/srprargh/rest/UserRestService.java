package com.srprargh.srprargh.rest;

import com.srprargh.srprargh.model.User;
import com.srprargh.srprargh.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.ws.Response;
import java.util.Collection;

@RestController
@RequestMapping("/users")
public class UserRestService {
    private UserRepository userRepository;

    @Autowired
    public UserRestService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/")
    public ResponseEntity<Collection<User>> getAllUsers() {
        return ResponseEntity.ok(userRepository.findAll());
    }
}
