import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';
import axios from "axios";


const Tourism = () => {
  const [touristId, setTouristId] = useState('');
  const [type, setType] = useState('');
  const [ride, setRide] = useState('No ride');
  const [rideAmount, setRideAmount] = useState('');
  
  const [ridecheck, setRideCheck] = useState(false);
  const rides = [
    { id: 1, name: 'Ridetype 1', price: 10 },
    { id: 2, name: 'Ridetype 2', price: 15 },
    { id: 3, name: 'Ridetype 3', price: 20 },
  ];
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
   
    
   axios.post("http://localhost:8082/api/tickets",{type,ride,touristId} ).then(
    alert("Tickets have been generated successfully")
   ).catch(
    (ex)=>console.log(ex)
   )

    
  };

  return (
    <Form onSubmit={handleFormSubmit} className='w-50 mx-auto'>
      <h1> Book ticket</h1>
      <Form.Group controlId="touristId">
        <Form.Label>Tourist ID:</Form.Label>
        <Form.Control
          type="text"
          value={touristId}
          onChange={(e) => setTouristId(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="type">
        <Form.Label>Ticket Type:</Form.Label>
        <Form.Control
          as="select"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Select ticket type</option>
          <option value="half">Less than 5 years (Half ticket)</option>
          <option value="full">5 years and above (Full ticket)</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="ridecheck">
        <Form.Label>Ride:</Form.Label>
        <Form.Control
          as="select"
          value={ridecheck}
          onChange={(e) => setRideCheck(e.target.value === 'true')}
        >
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </Form.Control>
      </Form.Group>

      {ridecheck && (
        <>
          <Form.Group controlId="ride">
            <Form.Label>Ride:</Form.Label>
            <Form.Control
              as="select"
              value={ride}
              onChange={(e) => setRide(e.target.value)}
            >
              <option value="">Select a ride</option>
              {rides.map((ride) => (
                <option key={ride.id} value={ride.name}>
                  {ride.name} (Rs{ride.price})
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </>
      )}
      <br></br>
      <br></br>
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Tourism;
