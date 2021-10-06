package com.codegym.casemodule6.controller;

import com.codegym.casemodule6.model.entity.Message;
import com.codegym.casemodule6.service.message.IMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/messages")
public class MessageController {
    @Autowired
    private IMessageService messageService;

    @PostMapping("")
    public ResponseEntity<Message> create(@RequestBody Message message) {
        Long millis = System.currentTimeMillis();
        Date date = new Date(millis);
        message.setTime(date);
        messageService.save(message);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Iterable<Message>> findAllByUserId(@PathVariable Long id) {
        Iterable<Message> messages = messageService.findAllByUser(id);
        return new ResponseEntity<>(messages, HttpStatus.OK);
    }

    @GetMapping("/sender/{id}")
    public ResponseEntity<Iterable<Message>> findBySenderId(@PathVariable Long id) {
        Iterable<Message> messages = messageService.findAllBySenderId(id);
        return new ResponseEntity<>(messages, HttpStatus.OK);
    }

    @GetMapping("/receiver/{id}")
    public ResponseEntity<Iterable<Message>> findByReceiverId(@PathVariable Long id) {
        Iterable<Message> messages = messageService.findAllByReceiverId(id);
        return new ResponseEntity<>(messages, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Message> deleteById(@PathVariable Long id) {
        messageService.remove(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Message> changeStatus(@PathVariable Long id) {
        Optional<Message> message = messageService.findById(id);
        message.get().setStatus(1);
        messageService.save(message.get());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/status/{id}")
    public ResponseEntity<Iterable<Message>> findByReceiverIdAndStatus(@PathVariable Long id) {
        Iterable<Message> messages = messageService.findAllByReceiverIdAndStatus(id);
        return new ResponseEntity<>(messages, HttpStatus.OK);
    }
    @GetMapping("/{id1}/{id2}")
    public ResponseEntity<Iterable<Message>> findAllBySenderAndReceiver(@PathVariable Long id1, @PathVariable Long id2) {
        Iterable<Message> messages = messageService.findAllBySenderAndReceiver(id1, id2);
        return new ResponseEntity<>(messages, HttpStatus.OK);
    }

}
