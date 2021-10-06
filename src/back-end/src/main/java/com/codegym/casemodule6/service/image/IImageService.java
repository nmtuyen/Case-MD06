package com.codegym.casemodule6.service.image;

import com.codegym.casemodule6.model.entity.Image;
import com.codegym.casemodule6.service.IGeneralService;

public interface IImageService extends IGeneralService<Image> {
    Iterable<Image> findAllByUserId(Long id);
}
