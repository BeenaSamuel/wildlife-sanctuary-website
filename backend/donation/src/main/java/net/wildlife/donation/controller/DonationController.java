package net.wildlife.donation.controller;



import net.wildlife.donation.entity.Donation;
import net.wildlife.donation.service.DonationService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/donations")
@CrossOrigin(origins = "http://localhost:3000")

public class DonationController {

	@Autowired
	private DonationService donationService;
	

    public DonationController(DonationService donationService) {
		
		this.donationService = donationService;
	}

	@PostMapping
    public ResponseEntity<Donation> saveDonation(@RequestBody Donation donation){
        Donation savedDonation = donationService.saveDonation(donation);
        return new ResponseEntity<>(savedDonation, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Donation> getDonationById(@PathVariable("id") Long donationId){
        Donation donation = donationService.getDonationById(donationId);
        return ResponseEntity.ok(donation);
    }
    
    @GetMapping
    public ResponseEntity<List<Donation>> getAllDonations(){
    	List<Donation> donation = donationService.getAllDonations();
        return ResponseEntity.ok(donation);
    }
}
