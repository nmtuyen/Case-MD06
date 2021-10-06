package com.codegym.casemodule6.controller;

import com.codegym.casemodule6.model.entity.User;
import com.codegym.casemodule6.service.userService.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@CrossOrigin("*")
@RestController
@RequestMapping("/usersSDDV")
public class UserSDDVController {
    @Autowired
    public IUserService userService;
    @GetMapping
    public ResponseEntity<Iterable<User>> getAllCCDV(){
        return new ResponseEntity<>(userService.findAllByStatusCCDV(), HttpStatus.OK);
    }

    @GetMapping("/messages/{id}")
    public ResponseEntity<Iterable<User>> getUserByMessage(@PathVariable Long id){
        return new ResponseEntity<>(userService.findUserByMessage(id), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> findCCDVById(@PathVariable Long id) {
        Optional<User> userOptional = userService.findCCDVById(id);
        return new ResponseEntity<>(userOptional.get(), HttpStatus.OK);
    }
    @GetMapping("/get12new")
    public ResponseEntity<Iterable<User>> get12New() {
        return new ResponseEntity<>(userService.find12NewCCDV(), HttpStatus.OK);
    }
    @GetMapping("/user/{id}")
    public ResponseEntity<User> findById(@PathVariable Long id) {
        Optional<User> userOptional = userService.findById(id);
        return new ResponseEntity<>(userOptional.get(), HttpStatus.OK);
    }

    @GetMapping("/search-name")
    public ResponseEntity<Iterable<User>> findByName(@RequestParam String name) {
        return new ResponseEntity<>(userService.findAllByNameContaining("%" + name + "%"), HttpStatus.OK);
    }

    @GetMapping("/search-age")
    public ResponseEntity<Iterable<User>> findByAge(@RequestParam int age1, int age2) {
        return new ResponseEntity<>(userService.findAllByAge(age1, age2), HttpStatus.OK);
    }

    @GetMapping("/search-city")
    public ResponseEntity<Iterable<User>> findByCity(@RequestParam String city) {
        return new ResponseEntity<>(userService.findAllByCityContaining(city), HttpStatus.OK);
    }

    @GetMapping("/search-gender")
    public ResponseEntity<Iterable<User>> findByGender(@RequestParam String gender) {
        return new ResponseEntity<>(userService.findAllByGenderContaining(gender), HttpStatus.OK);
    }

}
