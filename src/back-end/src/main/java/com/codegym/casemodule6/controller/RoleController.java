package com.codegym.casemodule6.controller;

import com.codegym.casemodule6.dto.response.MessageResponse;
import com.codegym.casemodule6.model.entity.Role;
import com.codegym.casemodule6.service.role.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/roles")
public class RoleController {
    @Autowired
    private IRoleService roleService;

    @GetMapping("/list")
    public ResponseEntity<Iterable<Role>> findAll() {
        Iterable<Role> roles = roleService.findAll();
        return new ResponseEntity<>(roles, HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody Role role){
        if(role.getName() == null || role.getName().trim().isEmpty()) return new ResponseEntity<>(new MessageResponse("Role has no name"), HttpStatus.NO_CONTENT);
        roleService.save(role);
        return new ResponseEntity<>(new MessageResponse("Role created"),HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Role> update(@PathVariable Long id,@RequestBody Role role){
        Optional<Role> roleOptional=roleService.findById(id);
        if(!roleOptional.isPresent()) return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        role.setId(roleOptional.get().getId());
        roleService.save(role);
        return new ResponseEntity<>(role,HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Role> delete(@PathVariable Long id){
        Optional<Role> roleOptional=roleService.findById(id);
        if(!roleOptional.isPresent()) return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        roleService.remove(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
