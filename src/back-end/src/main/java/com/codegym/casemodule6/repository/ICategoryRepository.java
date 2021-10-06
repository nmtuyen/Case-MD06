package com.codegym.casemodule6.repository;

import com.codegym.casemodule6.model.entity.CategoryService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICategoryRepository extends JpaRepository<CategoryService, Long> {
}
