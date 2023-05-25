import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';

const TicketForm = () => {
  const [touristId, setTouristId] = useState('');
  const [ticketType, setTicketType] = useState('');
  const [ride, setRide] = useState(false);
  const [rideAmount, setRideAmount] = useState('');
  const [rideId, setRideId] = useState('');

  const rides = [
    { id: 1, name: 'Ride 1', price: 10 },
    { id: 2, name: 'Ride 2', price: 15 },
    { id: 3, name: 'Ride 3', price: 20 },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (ride) {
      // Go to the next page/form
      console.log('Redirect to next page');
    } else {
      // Submit the form
      console.log('Submit the form');
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group controlId="touristId">
        <Form.Label>Tourist ID:</Form.Label>
        <Form.Control
          type="text"
          value={touristId}
          onChange={(e) => setTouristId(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="ticketType">
        <Form.Label>Ticket Type:</Form.Label>
        <Form.Control
          as="select"
          value={ticketType}
          onChange={(e) => setTicketType(e.target.value)}
        >
          <option value="">Select ticket type</option>
          <option value="half">Less than 5 years (Half ticket)</option>
          <option value="full">5 years and above (Full ticket)</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="ride">
        <Form.Label>Ride:</Form.Label>
        <Form.Control
          as="select"
          value={ride}
          onChange={(e) => setRide(e.target.value === 'true')}
        >
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </Form.Control>
      </Form.Group>

      {ride && (
        <>
          <Form.Group controlId="rideId">
            <Form.Label>Ride:</Form.Label>
            <Form.Control
              as="select"
              value={rideId}
              onChange={(e) => setRideId(e.target.value)}
            >
              <option value="">Select a ride</option>
              {rides.map((ride) => (
                <option key={ride.id} value={ride.id}>
                  {ride.name} (Rs{ride.price})
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </>
      )}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default TicketForm;
