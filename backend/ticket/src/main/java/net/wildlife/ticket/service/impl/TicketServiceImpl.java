package net.wildlife.ticket.service.impl;

import javax.annotation.Resource;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import net.wildlife.ticket.dto.ResponseDto;
import net.wildlife.ticket.dto.TicketDto;
import net.wildlife.ticket.dto.TouristDto;
import net.wildlife.ticket.entity.Ticket;
import net.wildlife.ticket.repository.TicketRepository;
import net.wildlife.ticket.service.TicketService;

@Service

public class TicketServiceImpl implements TicketService {

	@Resource
	private TicketRepository ticketRepository;
    private RestTemplate restTemplate;
   
    
    public TicketServiceImpl(TicketRepository ticketRepository, RestTemplate restTemplate) {
		
		this.ticketRepository = ticketRepository;
		this.restTemplate = restTemplate;
	}

	
  

    private TicketDto mapToTicket(Ticket ticket){
        TicketDto ticketDto = new TicketDto();
        ticketDto.setId(ticket.getId());
        ticketDto.setType(ticket.getType());
        ticketDto.setRide(ticket.getRide());
 
        return ticketDto;
    }


	@Override
	public Ticket saveTicket(Ticket ticket) {
		
		 return ticketRepository.save(ticket);
	}




	@Override
	public ResponseDto getTicket(Long ticketId) {
		 ResponseDto responseDto = new ResponseDto();
	        Ticket ticket = ticketRepository.findById(ticketId).get();
	        TicketDto ticketDto = mapToTicket(ticket);

	        ResponseEntity<TouristDto> responseEntity = restTemplate
	                .getForEntity("http://localhost:8081/api/tourists/" + ticket.getTouristId(),
	                TouristDto.class);

	        TouristDto touristDto = responseEntity.getBody();

	        System.out.println(responseEntity.getStatusCode());

	        responseDto.setTicket(ticketDto);
	        responseDto.setTourist(touristDto);

	        return responseDto;
	}
}
