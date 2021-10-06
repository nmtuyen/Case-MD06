package com.codegym.casemodule6.service.categoryService;

import com.codegym.casemodule6.repository.ICategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CategoryService extends com.codegym.casemodule6.model.entity.CategoryService implements ICategoryService {
    @Autowired
    private ICategoryRepository categoryRepository;

    @Override
    public Iterable<com.codegym.casemodule6.model.entity.CategoryService> findAll() {
        return categoryRepository.findAll();
    }

    @Override
    public Optional<com.codegym.casemodule6.model.entity.CategoryService> findById(Long id) {
        return categoryRepository.findById(id);
    }

    @Override
    public com.codegym.casemodule6.model.entity.CategoryService save(com.codegym.casemodule6.model.entity.CategoryService categoryService) {
        return categoryRepository.save(categoryService);
    }

    @Override
    public void remove(Long id) {
        categoryRepository.deleteById(id);
    }
}
