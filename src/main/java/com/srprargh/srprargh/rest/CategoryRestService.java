package com.srprargh.srprargh.rest;

import com.srprargh.srprargh.model.Category;
import com.srprargh.srprargh.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/categories")
public class CategoryRestService {
    private CategoryRepository categoryRepository;

    @Autowired
    public CategoryRestService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @GetMapping("/")
    public ResponseEntity<Collection<Category>> getAllCategories() {
        return ResponseEntity.ok(categoryRepository.findAll());
    }
}
