package net.wildlife.tourist.service;

import net.wildlife.tourist.entity.Tourist;

public interface TouristService {
    Tourist saveTourist(Tourist tourist);

    Tourist getTouristById(Long touristId);
}