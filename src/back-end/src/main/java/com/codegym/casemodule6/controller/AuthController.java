package com.codegym.casemodule6.controller;

import com.codegym.casemodule6.dto.request.SignInForm;
import com.codegym.casemodule6.dto.request.SignUpForm;
import com.codegym.casemodule6.dto.response.JwtResponse;
import com.codegym.casemodule6.dto.response.MessageResponse;
import com.codegym.casemodule6.model.entity.Role;
import com.codegym.casemodule6.model.entity.User;
import com.codegym.casemodule6.security.jwt.JwtService;
import com.codegym.casemodule6.security.userprincal.UserPrinciple;
import com.codegym.casemodule6.service.role.IRoleService;
import com.codegym.casemodule6.service.userService.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@RequestMapping("")
@RestController
@CrossOrigin("*")
public class AuthController {
    @Autowired
    IUserService userService;
    @Autowired
    IRoleService roleService;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtService jwtService;
    @Autowired
    JavaMailSender javaMailSender;

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody SignUpForm signUpForm) {
        if (userService.existsByUserName(signUpForm.getUserName()))
            return new ResponseEntity<>(new MessageResponse("This username is existed"), HttpStatus.OK);
        if (userService.existsByEmail(signUpForm.getEmail()))
            return new ResponseEntity<>(new MessageResponse("This email is existed"), HttpStatus.OK);
        User user = new User(signUpForm.getUserName(), signUpForm.getPassword() , signUpForm.getEmail(), signUpForm.getPhoneNumber());
//        Set<String> signUpFormRoles = signUpForm.getRoles();
//        Set<Role> roles = new HashSet<>();
//        signUpFormRoles.forEach(role ->{
//            switch (role){
//                case "ROLE_ADMIN":
//                    Role adminRole = roleService.findByName("ROLE_ADMIN").orElseThrow(()-> new RuntimeException("Role not found"));
//                    roles.add(adminRole);
//                    break;
//                case "ROLE_RENT":
//                    Role othersRole = roleService.findByName("ROLE_RENT").orElseThrow( ()-> new RuntimeException("Role not found"));
//                    roles.add(othersRole);
//                    break;
//
//                default:
//                    Role userRole = roleService.findByName("ROLE_USER").orElseThrow( ()-> new RuntimeException("Role not found"));
//                    roles.add(userRole);
//            }
//        });
//
//        user.setRoles(roles);
        Optional<Role> role = roleService.findByName("ROLE_USER");
        Set<Role> roles = new HashSet<>();
        roles.add(role.get());
        user.setRoles(roles);
        long millis = System.currentTimeMillis();
        java.sql.Date date = new java.sql.Date(millis);
        user.setCreateAt(date);
        user.setStatusUs(0);
        user.setStatusCCDV(0);
        user.setAvatar("https://st.quantrimang.com/photos/image/072015/22/avatar.jpg");
        userService.save(user);

        return new ResponseEntity<>(new MessageResponse("Register successfully"), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody SignInForm signInForm) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(signInForm.getUserName(), signInForm.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtService.generateTokenLogin(authentication);
        UserPrinciple userPrinciple = (UserPrinciple) authentication.getPrincipal();
        User currentUser = userService.findByUserName(signInForm.getUserName()).get();
        return ResponseEntity.ok(new JwtResponse(currentUser.getId(), jwt, userPrinciple.getUsername(), currentUser.getName(), userPrinciple.getAuthorities()));
    }

//    @PostMapping("/sendEmailUpdate/{email}")
//    public ResponseEntity<SimpleMailMessage> sendSimpleMail(@PathVariable String email){
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setTo(email);
//        message.setSubject("Verify token:");
//        message.setText("Hello, your verify token is");
//        javaMailSender.send(message);
//        return new ResponseEntity<>(message, HttpStatus.OK);
//    }
}