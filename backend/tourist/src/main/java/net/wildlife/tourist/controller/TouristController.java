package net.wildlife.tourist.controller;



import net.wildlife.tourist.entity.Tourist;
import net.wildlife.tourist.service.TouristService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/tourists")

public class TouristController {

	@Autowired
	private TouristService touristService;
	

    public TouristController(TouristService touristService) {
		
		this.touristService = touristService;
	}

	@PostMapping
    public ResponseEntity<Tourist> saveTourist(@RequestBody Tourist tourist){
        Tourist savedTourist = touristService.saveTourist(tourist);
        return new ResponseEntity<>(savedTourist, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Tourist> getTouristById(@PathVariable("id") Long touristId){
        Tourist tourist = touristService.getTouristById(touristId);
        return ResponseEntity.ok(tourist);
    }
}
