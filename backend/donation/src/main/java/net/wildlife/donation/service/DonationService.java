package net.wildlife.donation.service;

import java.util.List;

import net.wildlife.donation.entity.Donation;

public interface DonationService {
    Donation saveDonation(Donation donation);

    Donation getDonationById(Long donationId);
    
    public List<Donation> getAllDonations();
}