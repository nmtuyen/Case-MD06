package com.codegym.casemodule6.controller;

import com.codegym.casemodule6.model.entity.Rent;
import com.codegym.casemodule6.model.entity.User;
import com.codegym.casemodule6.service.rent.IRentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/rents")
public class RentController {
    @Autowired
    private IRentService rentService;

    @GetMapping("")
    public ResponseEntity<Iterable<Rent>> findAll() {
        return new ResponseEntity<>(rentService.findAll(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Rent> create(@RequestBody Rent rent) {
        rent.setStatus(1);
        rentService.save(rent);

        return new ResponseEntity<>(rent, HttpStatus.OK);

    }

    @GetMapping("/{id}")
    public ResponseEntity<Rent> findById(@PathVariable Long id) {
        Optional<Rent> rent = rentService.findById(id);
        return new ResponseEntity<>(rent.get(), HttpStatus.OK);
    }

    @PutMapping("/status/{id}")
    public ResponseEntity<Rent> changeStatus(@PathVariable Long id, @RequestParam int status) {
        Optional<Rent> rent = rentService.findById(id);
        rent.get().setId(id);
        rent.get().setStatus(status);
        rentService.save(rent.get());
        return new ResponseEntity<>(rent.get(), HttpStatus.OK);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<Iterable<Rent>> findByUserId(@PathVariable Long id) {
        Iterable<Rent> rents = rentService.findByUserId(id);
        return new ResponseEntity<>(rents, HttpStatus.OK);
    }

    @GetMapping("/user-rent/{id}")
    public ResponseEntity<Iterable<Rent>> findByUserRentId(@PathVariable Long id) {
        Iterable<Rent> rents = rentService.findByUserRentId(id);
        return new ResponseEntity<>(rents, HttpStatus.OK);
    }


    @DeleteMapping("/user-sddv/{id}")
    public ResponseEntity<Rent> deleteRent(@PathVariable Long id) {
        rentService.remove(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/top6")
    public ResponseEntity<Iterable<Rent>> top6UserCCDV() {
        return new ResponseEntity<>(rentService.top6UserCCDV(), HttpStatus.OK);
    }
}


