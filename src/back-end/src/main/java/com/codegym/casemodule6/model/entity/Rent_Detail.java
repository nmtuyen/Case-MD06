package com.codegym.casemodule6.model.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Rent_Detail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private Rent rent;
    @ManyToOne
    private CategoryService service;
    // chưa cần thiết
    private double time;


    public Rent_Detail() {
    }

    public Rent_Detail(Rent rent, CategoryService service, double time) {
        this.rent = rent;
        this.service = service;
        this.time = time;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Rent getRent() {
        return rent;
    }

    public void setRent(Rent rent) {
        this.rent = rent;
    }

    public CategoryService getService() {
        return service;
    }

    public void setService(CategoryService service) {
        this.service = service;
    }

    public double getTime() {
        return time;
    }

    public void setTime(double time) {
        this.time = time;
    }
}
