package com.codegym.casemodule6.model.entity;

import com.sun.istack.NotNull;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;

import java.util.Date;
import java.util.Set;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull

    private String userName;
    @NotNull
    private String password;
    @Email
    private String email;
    @NotNull
    private String phoneNumber;
    private String name;
    private Date dateOfBirth;
    private String gender;
    private String city;
    private String nationality;
    private String avatar;
    private String height;
    private String weight;
    private String hobby;
    private String description;
    private String requestToPayer;
    private String linkFb;
    private Date createAt;
    private Date createAtCCDV;

    //0: chưa đang kí CCDV, 1: đã đc duyệt CCDV; 2: Busy không CCDV, 3: đã gửi yêu cầu CCDV chờ admin xác nhận
    private int statusCCDV;

    //0: Đăng kí thành công, 1: Bị admin block
    private int statusUs;

    private double price;
    @ManyToMany(fetch = FetchType.EAGER)
    private Set<Role> roles;

    public User() {
    }

    public User(String userName, String password, String email, String phoneNumber, String name, Date dateOfBirth, String gender, String city, String nationality, String avatar, String height, String weight, String hobby, String description, String requestToPayer, String linkFb, Date createAt, Date createAtCCDV, int statusCCDV, int statusUs, double price, Set<Role> roles) {
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.city = city;
        this.nationality = nationality;
        this.avatar = avatar;
        this.height = height;
        this.weight = weight;
        this.hobby = hobby;
        this.description = description;
        this.requestToPayer = requestToPayer;
        this.linkFb = linkFb;
        this.createAt = createAt;
        this.createAtCCDV = createAtCCDV;
        this.statusCCDV = statusCCDV;
        this.statusUs = statusUs;
        this.price = price;
        this.roles = roles;
    }

    public User(String userName, String password, String email, String phoneNumber) {
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    public Date getCreateAtCCDV() {
        return createAtCCDV;
    }

    public void setCreateAtCCDV(Date createAtCCDV) {
        this.createAtCCDV = createAtCCDV;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getHobby() {
        return hobby;
    }

    public void setHobby(String hobby) {
        this.hobby = hobby;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getRequestToPayer() {
        return requestToPayer;
    }

    public void setRequestToPayer(String requestToPayer) {
        this.requestToPayer = requestToPayer;
    }

    public String getLinkFb() {
        return linkFb;
    }

    public void setLinkFb(String linkFb) {
        this.linkFb = linkFb;
    }

    public Date getCreateAt() {
        return createAt;
    }

    public void setCreateAt(Date createAt) {
        this.createAt = createAt;
    }

    public int getStatusCCDV() {
        return statusCCDV;
    }

    public void setStatusCCDV(int statusCCDV) {
        this.statusCCDV = statusCCDV;
    }

    public int getStatusUs() {
        return statusUs;
    }

    public void setStatusUs(int statusUs) {
        this.statusUs = statusUs;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
