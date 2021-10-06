package com.codegym.casemodule6.service.image;

import com.codegym.casemodule6.model.entity.Image;
import com.codegym.casemodule6.repository.IImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ImageService implements IImageService {
    @Autowired
    private IImageRepository iImageRepository;

    @Override
    public Iterable<Image> findAll() {
        return iImageRepository.findAll();
    }

    @Override
    public Optional<Image> findById(Long id) {
        return iImageRepository.findById(id);
    }

    @Override
    public Image save(Image image) {
        return iImageRepository.save(image);
    }

    @Override
    public void remove(Long id) {
        iImageRepository.deleteById(id);
    }

    @Override
    public Iterable<Image> findAllByUserId(Long id) {
        return iImageRepository.findAllByUserId(id);
    }
}
