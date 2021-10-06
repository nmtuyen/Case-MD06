package com.codegym.casemodule6.controller;

import com.codegym.casemodule6.model.entity.CategoryService;
import com.codegym.casemodule6.service.categoryService.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/categoryServices")
public class CategoryServiceController {
    @Autowired
    private ICategoryService iCategoryService;

    @GetMapping("")
    public ResponseEntity<Iterable<CategoryService>> findAll() {
        Iterable<CategoryService> categoryServices = iCategoryService.findAll();
        return new ResponseEntity<>(categoryServices, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CategoryService> findById(@PathVariable Long id) {
        Optional<CategoryService> categoryServiceOptional = iCategoryService.findById(id);
        return new ResponseEntity<>(categoryServiceOptional.get(), HttpStatus.OK);
    }
    @PostMapping("")
    public ResponseEntity<CategoryService> save(@RequestBody CategoryService categoryService) {
        return new ResponseEntity<>(iCategoryService.save(categoryService), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CategoryService> update (@PathVariable Long id, @RequestBody CategoryService categoryService) {
        Optional<CategoryService> categoryServiceOptional = iCategoryService.findById(id);
        if (!categoryServiceOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        categoryService.setId(id);
        if (categoryService.getName().trim().equals("") || (categoryService.getName() == null)) {
            categoryService.setName(categoryServiceOptional.get().getName());
        }

        if (categoryService.getTypeService() == null){
            categoryService.setTypeService(categoryServiceOptional.get().getTypeService());
        }
        iCategoryService.save(categoryService);
        return new ResponseEntity<>(categoryService, HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<CategoryService> deleteCategoryById(@PathVariable Long id){
        iCategoryService.remove(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
