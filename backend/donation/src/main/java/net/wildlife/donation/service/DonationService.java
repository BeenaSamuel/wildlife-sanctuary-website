package net.wildlife.donation.service;

import net.wildlife.donation.entity.Donation;

public interface DonationService {
    Donation saveDonation(Donation tourist);

    Donation getDonationById(Long touristId);
}