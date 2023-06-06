import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import { Form ,Button} from 'react-bootstrap';

export function EditView({ editData, handleEditSubmit, handleCancel }) {
    const [type, setType] = useState(editData?.type || '');
    const [ride, setRide] = useState(editData?.ride || '');
    const [fordate, setFordate] = useState(editData?.fordate || '');
  
    const handleSubmit = () => {
      const editedData = { ...editData, type, ride, fordate };
      handleEditSubmit(editedData);
    };
  
    return (
      <div className="edit-view">
        <Form>
          <Form.Group controlId="type">
            <Form.Label>Type:</Form.Label>
            <Form.Control
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </Form.Group>
  
          <Form.Group controlId="ride">
            <Form.Label>Ride:</Form.Label>
            <Form.Control
              type="text"
              value={ride}
              onChange={(e) => setRide(e.target.value)}
            />
          </Form.Group>
  
          <Form.Group controlId="fordate">
            <Form.Label>Date:</Form.Label>
            <Form.Control
              type="date"
              value={fordate}
              onChange={(e) => setFordate(e.target.value)}
            />
          </Form.Group>
  
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        </Form>
      </div>
    );
  }