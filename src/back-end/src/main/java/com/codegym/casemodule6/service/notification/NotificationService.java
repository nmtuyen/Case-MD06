package com.codegym.casemodule6.service.notification;

import com.codegym.casemodule6.model.entity.Notification;
import com.codegym.casemodule6.repository.INotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class NotificationService implements INotificationService{
    @Autowired
    private INotificationRepository notificationRepository;

    @Override
    public Iterable<Notification> findAll() {
        return notificationRepository.findAll();
    }

    @Override
    public Optional<Notification> findById(Long id) {
        return notificationRepository.findById(id);
    }

    @Override
    public Notification save(Notification notification) {
        return notificationRepository.save(notification);
    }

    @Override
    public void remove(Long id) {
        notificationRepository.deleteById(id);
    }

    @Override
    public Iterable<Notification> findAllByUserId(Long id) {
        return notificationRepository.findAllByUserId(id);
    }

    @Override
    public Iterable<Notification> findAllByStatus0(Long id) {
        return notificationRepository.findAllByStatus0(id);
    }
}
