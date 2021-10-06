package com.codegym.casemodule6.service.rent_detail;


import com.codegym.casemodule6.model.entity.Rent_Detail;
import com.codegym.casemodule6.repository.IRentDetailRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Rent_detailService implements IRent_detailService {
    @Autowired

    private IRentDetailRepository iRentDetailRepository;

    @Override
    public Iterable<Rent_Detail> findAll() {
        return iRentDetailRepository.findAll();
    }

    @Override
    public Optional<Rent_Detail> findById(Long id) {
        return iRentDetailRepository.findById(id);
    }

    @Override
    public Rent_Detail save(Rent_Detail rent_detail) {
        return iRentDetailRepository.save(rent_detail);
    }

    @Override
    public void remove(Long id) {
        iRentDetailRepository.deleteById(id);
    }

    @Override
    public Iterable<Rent_Detail> findByRentId(Long id) {
        return iRentDetailRepository.findByRentId(id);
    }

}
