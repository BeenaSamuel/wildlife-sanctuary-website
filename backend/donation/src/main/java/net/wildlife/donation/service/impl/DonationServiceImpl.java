package net.wildlife.donation.service.impl;



import lombok.extern.slf4j.Slf4j;
import net.wildlife.donation.entity.Donation;
import net.wildlife.donation.repository.DonationRepository;
import net.wildlife.donation.service.DonationService;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service

@Slf4j
public class DonationServiceImpl implements DonationService {

	@Resource
	private DonationRepository donationRepository;

    
    public DonationServiceImpl(DonationRepository donationRepository) {
		
		this.donationRepository = donationRepository;
	}

    
	@Transactional
	@Override
    public Donation saveDonation(Donation donation) {
        return donationRepository.save(donation);
    }

	@Transactional
	@Override
	public Donation getDonationById(Long donationId) {
	    Optional<Donation> donationOptional = donationRepository.findById(donationId);
	    if (donationOptional.isPresent()) {
	        return donationOptional.get();
	    }
	    throw new NoSuchElementException("Donation not found with ID: " + donationId);
	}

    
    @Override
	public List<Donation> getAllDonations() {
	
		return  donationRepository.findAll();
	}
}