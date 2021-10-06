package com.codegym.casemodule6.controller;

import com.codegym.casemodule6.model.entity.Image;
import com.codegym.casemodule6.model.entity.User;
import com.codegym.casemodule6.service.image.IImageService;
import com.codegym.casemodule6.service.userService.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/images")
public class ImageController {
    @Autowired
    private IUserService iUserService;
    @Autowired
    private IImageService imageService;

    @GetMapping()
    public ResponseEntity<Iterable<Image>> getAll() {
        return new ResponseEntity<>(imageService.findAll(), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<Image> createImage(@RequestBody Image image) {
        return new ResponseEntity<>(imageService.save(image), HttpStatus.OK);
    }

    @PutMapping("/{idImg}")
    public ResponseEntity<Image> updateImage(@PathVariable Long idImg, @RequestBody Image image) {
        Optional<Image> image1 = imageService.findById(idImg);
        image.setId(idImg);
        image.setUser(image1.get().getUser());
        if (image.getImage().trim().equals("")) {
            image.setImage(image1.get().getImage());
        }
        return new ResponseEntity<>(imageService.save(image), HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Image> deleteImage(@PathVariable Long id){
        Optional<Image> image1 = imageService.findById(id);
        if (!image1.isPresent()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        imageService.remove(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/{idUs}")
    public ResponseEntity<Iterable<Image>> getImageByUser(@PathVariable Long idUs){
        return new ResponseEntity<>(imageService.findAllByUserId(idUs),HttpStatus.OK);
    }
    @GetMapping("/img/{idImg}")
    public ResponseEntity<Image> getImgById(@PathVariable Long idImg){
        Optional<Image> image = imageService.findById(idImg);
        return new ResponseEntity<>(image.get(),HttpStatus.OK);
    }
}
