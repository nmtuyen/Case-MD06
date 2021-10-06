package com.codegym.casemodule6.controller;

import com.codegym.casemodule6.model.entity.Rent_Detail;
import com.codegym.casemodule6.service.rent_detail.IRent_detailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin("*")
@RequestMapping("/rent_detail")
public class Rent_detailController {
    @Autowired
    private IRent_detailService iRent_detailService;

    @GetMapping("")
    public ResponseEntity<Iterable<Rent_Detail>> getAll() {
        Iterable<Rent_Detail> rent_details = iRent_detailService.findAll();
        return new ResponseEntity<>(rent_details, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Rent_Detail> createRent(@RequestBody Rent_Detail rent_detail) {
        return new ResponseEntity<Rent_Detail>(iRent_detailService.save(rent_detail), HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<Iterable<Rent_Detail>> findByRentId(@PathVariable Long id){
        Iterable<Rent_Detail> rent_detail = iRent_detailService.findByRentId(id);
       return  new ResponseEntity<>(rent_detail,HttpStatus.OK);
    }
}
