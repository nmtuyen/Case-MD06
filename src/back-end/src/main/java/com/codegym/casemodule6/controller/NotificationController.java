package com.codegym.casemodule6.controller;

import com.codegym.casemodule6.model.entity.Notification;
import com.codegym.casemodule6.service.notification.INotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/notifications")
public class NotificationController {
    @Autowired
    private INotificationService notificationService;

    @GetMapping("")
    public ResponseEntity<Iterable<Notification>> findAll() {
        return new ResponseEntity<>(notificationService.findAll(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Notification> create(@RequestBody Notification notification) {
        Long millis = System.currentTimeMillis();
        Date date = new Date(millis);
        notification.setTime(date);
        notification.setStatus(0);
        notificationService.save(notification);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Notification> findById(@PathVariable Long id) {
        Optional<Notification> notification = notificationService.findById(id);
        return new ResponseEntity<>(notification.get(), HttpStatus.OK);
    }

    // Tìm thông báo theo user
    @GetMapping("/user/{id}")
    public ResponseEntity<Iterable<Notification>> findByUserId(@PathVariable Long id) {
        Iterable<Notification> notifications = notificationService.findAllByUserId(id);
        return new ResponseEntity<>(notifications, HttpStatus.OK);
    }

    // Tìm thông thông chưa được đọc theo user
    @GetMapping("/status0/{id}")
    public ResponseEntity<Iterable<Notification>> findByStatus0(@PathVariable Long id) {
        Iterable<Notification> notifications = notificationService.findAllByStatus0(id);
        return new ResponseEntity<>(notifications, HttpStatus.OK);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Notification> updateStatus(@PathVariable Long id){
        Optional<Notification> notification = notificationService.findById(id);
        notification.get().setId(id);
        notification.get().setStatus(1);
        notificationService.save(notification.get());
        return new ResponseEntity<>(notification.get(),HttpStatus.OK);
    }
}
