package net.wildlife.ticket.dto;

import java.util.List;

public class ResponseDto {
    private TouristDto tourist;
   
    private List<TicketDto> tickets;
	public TouristDto getTourist() {
		return tourist;
	}
	public void setTourist(TouristDto tourist) {
		this.tourist = tourist;
	}
	
	public List<TicketDto> getTickets() {
		return tickets;
	}
	public void setTickets(List<TicketDto> tickets) {
		this.tickets = tickets;
	}
	public ResponseDto() {
		
	}
	public ResponseDto(TouristDto tourist, List<TicketDto> tickets) {
		super();
		this.tourist = tourist;
		this.tickets = tickets;
	}
	
    
}