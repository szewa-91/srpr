package com.srprargh.srprargh.repositories;

import com.srprargh.srprargh.model.Category;
import com.srprargh.srprargh.model.Sound;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface SoundRepository extends JpaRepository<Sound, Long> {
    Collection<Sound> findByCategory(Category category);
}
