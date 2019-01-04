package com.srprargh.srprargh.repositories;

import com.srprargh.srprargh.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
