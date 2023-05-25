package net.wildlife.ticket.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.wildlife.ticket.entity.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

}