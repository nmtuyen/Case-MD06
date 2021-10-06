package com.codegym.casemodule6.repository;

import com.codegym.casemodule6.model.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IImageRepository extends JpaRepository<Image,Long> {
    Iterable<Image> findAllByUserId(Long id);
}
