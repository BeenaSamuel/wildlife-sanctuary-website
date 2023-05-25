package net.wildlife.tourist.service;

import java.util.List;

import net.wildlife.tourist.entity.Tourist;

public interface TouristService {
    Tourist saveTourist(Tourist tourist);

    Tourist getTouristById(Long touristId);
    public List<Tourist> getAllTourists();
}