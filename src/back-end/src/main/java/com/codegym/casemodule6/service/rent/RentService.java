package com.codegym.casemodule6.service.rent;

import com.codegym.casemodule6.model.entity.Rent;
import com.codegym.casemodule6.repository.IRentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RentService implements IRentService{
    @Autowired
    private IRentRepository rentRepository;

    @Override
    public Iterable<Rent> findAll() {
        return rentRepository.findAll();
    }

    @Override
    public Optional<Rent> findById(Long id) {
        return rentRepository.findById(id);
    }

    @Override
    public Rent save(Rent rent) {
        return rentRepository.save(rent);
    }

    @Override
    public void remove(Long id) {
        rentRepository.deleteById(id);
    }

    @Override
    public Iterable<Rent> findByUserId(Long id) {
        return rentRepository.findByUserId(id);
    }

    @Override
    public Iterable<Rent> findByUserRentId(Long id) {
        return rentRepository.findByUserRentId(id);
    }

    @Override
    public Iterable<Rent> top6UserCCDV() {
        return rentRepository.top6UserCCDV();
    }
}
