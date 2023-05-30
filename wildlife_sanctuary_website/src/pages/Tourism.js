import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';
import axios from "axios";
import ViewTicket from './ViewTicket';
import './Home.css';
import {Link} from "react-router-dom";
import { Segment } from 'semantic-ui-react';




const Tourism = (props) => {
  const [touristId, setTouristId] = useState(localStorage.getItem('touristId') || '');


  const [type, setType] = useState('');
  const [ride, setRide] = useState('No ride');
  const [ticketnos, setTicketnos] = useState('No ride');
 
  const [ticketview , setTicketview] = useState(false);
  const [ridecheck, setRideCheck] = useState(false);
  const [fordate, setFordate] = useState(false);
  const rides = [
    { id: 1, name: 'Ridetype 1', price: 10 },
    { id: 2, name: 'Ridetype 2', price: 15 },
    { id: 3, name: 'Ridetype 3', price: 20 },
  ];
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const tickno = parseInt(ticketnos);
    
    try {
      for (let i = 0; i < tickno; i++) {
        await axios.post("http://localhost:8082/api/tickets", { type, ride,fordate, touristId });
      }
      
      setTicketview(true);
      
    } catch (error) {
      console.log('Error in posting');
    }
  };
  
  if (ticketview){
    return <ViewTicket touristid = {touristId} />
  }

  else{
  return (
    <Segment inverted>
    <Form onSubmit={handleFormSubmit} className='w-50 mx-auto donor'>
      <h1> Book ticket</h1>
      <Form.Group controlId="touristId">
        <Form.Label >Tourist ID:</Form.Label>
        <Form.Control
  type="text"
  placeholder={props.touristId}
  value={touristId}
  onChange={(e) => setTouristId(e.target.value)}
  disabled // Add the disabled attribute
/>

      </Form.Group>
      <br></br>
      <Form.Group controlId="ticketnos">
        <Form.Label>Number of tickets:</Form.Label>
        <Form.Control
          type="number"
          value={ticketnos}
          onChange={(e) => setTicketnos(e.target.value)}
        />
      </Form.Group>
      <br></br>
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
      <br></br>
      <Form.Group controlId="fordate">
        <Form.Label>Date:</Form.Label>
        <Form.Control
          type="date"
          value={fordate}
          onChange={(e) => setFordate(e.target.value)}
        />
      </Form.Group>
      <br></br>
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
      <br></br>
      {ridecheck && (
        <>
          <Form.Group controlId="ride">
            <Form.Label>Ride:</Form.Label>
            <Form.Control
              as="select"
              value={ride}
              onChange={(e) => setRide(e.target.value)}
            >
              <option value="ride">Select a ride</option>
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
      <Button variant="success" type="submit" className='success'>
        Submit/View details
      </Button>
      
    </Form>
    </Segment>
  );
};
}

export default Tourism;
