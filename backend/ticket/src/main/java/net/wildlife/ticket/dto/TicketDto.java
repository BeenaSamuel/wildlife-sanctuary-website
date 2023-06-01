package net.wildlife.ticket.dto;

import java.sql.Date;

public class TicketDto {
	 private Long id;
	    private String type;
	    private String ride;
	    private Date fordate;
	    public TicketDto(Long id, String type, String ride, Date fordate, Long touristId) {
			super();
			this.id = id;
			this.type = type;
			this.ride = ride;
			this.fordate = fordate;
			this.touristId = touristId;
		}
		private Long touristId;
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getType() {
			return type;
		}
		public void setType(String type) {
			this.type = type;
		}
		
		public Long getTouristId() {
			return touristId;
		}
		public void setTouristId(Long touristId) {
			this.touristId = touristId;
		}
		
		public String getRide() {
			return ride;
		}
		public void setRide(String ride) {
			this.ride = ride;
		}
		public TicketDto() {
			
		}
		public Date getFordate() {
			return fordate;
		}
		public void setFordate(Date fordate) {
			this.fordate = fordate;
		}
		
	   
	   
}