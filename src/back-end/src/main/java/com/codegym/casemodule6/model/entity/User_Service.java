package com.codegym.casemodule6.model.entity;

import javax.persistence.*;

@Entity
public class User_Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private User user;
    @ManyToOne
    private CategoryService service;
    private double price;

    public User_Service() {
    }

    public User_Service(User user, CategoryService service, double price) {
        this.user = user;
        this.service = service;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public CategoryService getService() {
        return service;
    }

    public void setService(CategoryService service) {
        this.service = service;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
