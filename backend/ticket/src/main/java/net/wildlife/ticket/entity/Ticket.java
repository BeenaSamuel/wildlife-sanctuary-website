package net.wildlife.ticket.entity;

import javax.persistence.*;

@Entity
@Table(name = "tickets")

public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String type;
    private String ride;
   
    private String touristId;

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

	public String getTouristId() {
		return touristId;
	}

	public void setTouristId(String touristId) {
		this.touristId = touristId;
	}

	

	public Ticket(Long id, String type, String ride, String touristId) {
		super();
		this.id = id;
		this.type = type;
		this.ride = ride;
		this.touristId = touristId;
	}

	public String getRide() {
		return ride;
	}

	public void setRide(String ride) {
		this.ride = ride;
	}

	public Ticket() {
		
	}
	
    
}
