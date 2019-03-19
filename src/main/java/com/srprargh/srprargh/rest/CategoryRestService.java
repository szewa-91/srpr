package com.srprargh.srprargh.rest;

import com.srprargh.srprargh.model.Category;
import com.srprargh.srprargh.model.Sound;
import com.srprargh.srprargh.repositories.CategoryRepository;
import com.srprargh.srprargh.repositories.SoundRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/api/categories")
public class CategoryRestService {
    private CategoryRepository categoryRepository;
    private SoundRepository soundRepository;

    @Autowired
    public CategoryRestService(CategoryRepository categoryRepository, SoundRepository soundRepository) {
        this.categoryRepository = categoryRepository;
        this.soundRepository = soundRepository;
    }

    @GetMapping
    public ResponseEntity<Collection<Category>> getAllCategories() {
        return ResponseEntity.ok(categoryRepository.findAll());
    }

    @GetMapping("/{id}/sounds")
    public ResponseEntity<Collection<Sound>> getSoundsByCategory(@PathVariable Long id) {
        return categoryRepository.findById(id).map(
                category -> ResponseEntity.ok(soundRepository.findByCategory(category))
        ).orElse(ResponseEntity.notFound().build());
    }
}
