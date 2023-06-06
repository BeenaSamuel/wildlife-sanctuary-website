import React, { useState } from 'react';
import { Form ,Button} from 'react-bootstrap';
import {Segment} from "semantic-ui-react";
import '../Styles/Home.css';

export default function EditView({ editData, handleEditSubmit, handleCancel }) {
    const [type, setType] = useState(editData?.type || '');
    const [ride, setRide] = useState('No ride');
    const [fordate, setFordate] = useState(editData?.fordate || '');
    const [ridecheck, setRideCheck] = useState(false);
    const rides = [
      { id: 1, name: 'Ridetype 1', price: 10 },
      { id: 2, name: 'Ridetype 2', price: 15 },
      { id: 3, name: 'Ridetype 3', price: 20 },
    ];
    const handleSubmit = () => {
      const editedData = { ...editData, type, ride, fordate };
      handleEditSubmit(editedData);
    };
  
    return (
      <div className="edit-view  text-center  w-25 ticketedit">
        <Segment inverted>
          <h1>Edit ticket details</h1>
                <Form inverted>
                <Form.Group controlId="type">
        <Form.Label>Ticket Type:</Form.Label>
        <Form.Control
          as="select"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Select ticket type</option>
          <option value="half">Less than 5 years (Half ticket Rs.10)</option>
          <option value="full">5 years and above (Full ticket Rs.20)</option>
         
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
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
          <br></br>
          <br></br>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        </Form>
        </Segment>

      </div>
    );
  }