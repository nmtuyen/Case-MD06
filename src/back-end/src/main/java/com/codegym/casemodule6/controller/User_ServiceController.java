package com.codegym.casemodule6.controller;

import com.codegym.casemodule6.model.entity.User_Service;
import com.codegym.casemodule6.service.user_service.IUser_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/user-services")
public class User_ServiceController {
    @Autowired
    private IUser_Service iUser_service;

    @GetMapping("")
    public ResponseEntity<Iterable<User_Service>> findAll() {
        return new ResponseEntity<>(iUser_service.findAll(), HttpStatus.OK);
    }
    @PostMapping("")
    public ResponseEntity<Optional<User_Service>> create(@RequestBody User_Service user_service) {
        user_service.setPrice(0);
        iUser_service.save(user_service);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Iterable<User_Service>> findByUserId(@PathVariable Long id) {
        Iterable<User_Service> user_services = iUser_service.findAllByUserId(id);
        return new ResponseEntity<>(user_services, HttpStatus.OK);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Optional<User_Service>> update(@PathVariable Long id, @RequestBody User_Service user_service) {
        Optional<User_Service> user_service1 = iUser_service.findById(id);
        user_service.setId(id);
        user_service.setService(user_service1.get().getService());
        user_service.setUser(user_service1.get().getUser());
        iUser_service.save(user_service);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/findOne/{id}")
    public ResponseEntity<User_Service> findOne(@PathVariable Long id) {
        Optional<User_Service> user_services = iUser_service.findById(id);
        return new ResponseEntity<>(user_services.get(), HttpStatus.OK);
    }
}
