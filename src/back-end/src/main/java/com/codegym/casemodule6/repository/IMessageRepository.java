package com.codegym.casemodule6.repository;

import com.codegym.casemodule6.model.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IMessageRepository extends JpaRepository<Message, Long> {

    @Query("select mes from Message mes where mes.sender.id =:id")
    Iterable<Message> findAllBySenderId(Long id);

    @Query("select mes from Message mes where mes.receiver.id =:id order by mes.time desc")
    Iterable<Message> findAllByReceiverId(Long id);
    @Query("select mes from Message mes where mes.receiver.id =:id and mes.status = 0 order by mes.time desc")
    Iterable<Message> findAllByReceiverIdAndStatus(Long id);

    @Query("select mes from Message mes where mes.receiver.id =:id or mes.sender=:id order by mes.time asc")
    Iterable<Message> findAllByUser(Long id);

    @Query("select mes from Message mes where (mes.receiver.id =:id1 and mes.sender.id =:id2) or (mes.receiver.id =:id2 and mes.sender.id =:id1) order by mes.time asc")
    Iterable<Message> findAllBySenderAndReceiver(Long id1, Long id2);
}
