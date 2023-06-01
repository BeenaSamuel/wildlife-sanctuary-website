package net.wildlife.ticket.service.impl;

import java.util.ArrayList;
import java.util.List;

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

	
  

//    private TicketDto mapToTicket(Ticket ticket){
//        TicketDto ticketDto = new TicketDto();
//        ticketDto.setId(ticket.getId());
//        ticketDto.setType(ticket.getType());
//        ticketDto.setRide(ticket.getRide());
// 
//        return ticketDto;
//    }
    
    private List<TicketDto> mapTicketsFromTourist(Long touristId) {
        List<Ticket> tickets = ticketRepository.findAllByTouristId(touristId);
        List<TicketDto> ticketDtos = new ArrayList<>();

        for (Ticket ticket : tickets) {
            TicketDto ticketDto = new TicketDto();
            ticketDto.setId(ticket.getId());
            ticketDto.setType(ticket.getType());
            ticketDto.setRide(ticket.getRide());
            ticketDto.setFordate(ticket.getFordate());
            ticketDtos.add(ticketDto);
        }

        return ticketDtos;
    }

	@Override
	public Ticket saveTicket(Ticket ticket) {
		
		 return ticketRepository.save(ticket);
	}





//	@Override
//	public ResponseDto getTicket(Long ticketId) {
//		 ResponseDto responseDto = new ResponseDto();
//	        Ticket ticket = ticketRepository.findById(ticketId).get();
//	        TicketDto ticketDto = mapToTicket(ticket);
//
//	        ResponseEntity<TouristDto> responseEntity = restTemplate
//	                .getForEntity("http://localhost:8081/api/tourists/" + ticket.getTouristId(),
//	                TouristDto.class);
//
//	        TouristDto touristDto = responseEntity.getBody();
//
//	        
//
//	        responseDto.setTickets(ticketDto);
//	        responseDto.setTourist(touristDto);
//
//	        return responseDto;
//	}




	@Override
	public ResponseDto getTicketsForTourist(Long touristId) {
	    ResponseDto responseDto = new ResponseDto();

	    List<TicketDto> ticketDtos = mapTicketsFromTourist(touristId);

	    ResponseEntity<TouristDto> responseEntity = restTemplate.getForEntity(
	            "http://localhost:8081/api/tourists/" + touristId,
	            TouristDto.class
	    );

	    TouristDto touristDto = responseEntity.getBody();

	    responseDto.setTickets(ticketDtos);
	    responseDto.setTourist(touristDto);

	    return responseDto;
	}




	@Override
	public void deleteTicket(Long ticketId) {
		// TODO Auto-generated method stub
		ticketRepository.deleteById(ticketId);
		
	}




	@Override
	public Ticket updateTicket(Ticket ticket) {
		// TODO Auto-generated method stub
		return ticketRepository.save(ticket);
	}
}
