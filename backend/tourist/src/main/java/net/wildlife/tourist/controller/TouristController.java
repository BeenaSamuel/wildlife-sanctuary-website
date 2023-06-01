package net.wildlife.tourist.controller;



import net.wildlife.tourist.entity.Tourist;
import net.wildlife.tourist.entity.Tourist;
import net.wildlife.tourist.service.TouristService;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/tourists")
@CrossOrigin(origins = "http://localhost:3000")
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
    
//    @GetMapping
//    public ResponseEntity<List<Tourist>> getAllTourists(){
//    	List<Tourist> tourist = touristService.getAllTourists();
//        return ResponseEntity.ok(tourist);
//    }
    
    //Login
    @GetMapping
    public ResponseEntity<List<Tourist>> getTouristByNameAndPassword(@RequestParam("name") String name, @RequestParam("password") String password) {
        Tourist tourist = touristService.getTouristByNameAndPassword(name, password);
        if (tourist != null) {
            List<Tourist> singleUserList = Collections.singletonList(tourist);
            return ResponseEntity.ok(singleUserList);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
