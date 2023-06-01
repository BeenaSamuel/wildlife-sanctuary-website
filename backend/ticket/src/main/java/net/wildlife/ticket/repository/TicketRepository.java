package net.wildlife.ticket.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;


import net.wildlife.ticket.entity.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

	
	 List<Ticket> findAllByTouristId(Long touristId);

}