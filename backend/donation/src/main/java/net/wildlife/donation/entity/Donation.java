package net.wildlife.donation.entity;
import javax.persistence.*;
@Entity
@Table(name = "donations")

public class Donation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String donorname;
    private String donationtype;
    private Long donationamount;

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}


	public String getDonorname() {
		return donorname;
	}
	public void setDonorname(String donorname) {
		this.donorname = donorname;
	}
	public String getDonationtype() {
		return donationtype;
	}
	public void setDonationtype(String donationtype) {
		this.donationtype = donationtype;
	}
	public Long getDonationamount() {
		return donationamount;
	}
	public void setDonationamount(Long donationamount) {
		this.donationamount = donationamount;
	}
	public Donation(Long id, String donorname, String donationtype, Long donationamount) {
		
		this.id = id;
		this.donorname = donorname;
		this.donationtype = donationtype;
		this.donationamount = donationamount;
	}
	public Donation() {
		
	}
    
	
}