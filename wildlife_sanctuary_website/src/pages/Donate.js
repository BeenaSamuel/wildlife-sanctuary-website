import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
class Donate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      donationId: '',
      donorName: '',
      donationSource: 'organization',
      donationAmount: '',
    };
  }
  handleDonationIdChange = (event) => {
    this.setState({ donationId: event.target.value });
  };

  handleDonorNameChange = (event) => {
    this.setState({ donorName: event.target.value });
  };

  handleDonationSourceChange = (event) => {
    this.setState({ donationSource: event.target.value });
  };

  handleDonationAmountChange = (event) => {
    this.setState({ donationAmount: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Donation Details:');
    console.log('Donation ID:', this.state.donationId);
    console.log('Donor Name:', this.state.donorName);
    console.log('Donation Source:', this.state.donationSource);
    console.log('Donation Amount:', this.state.donationAmount);
    // Perform any necessary actions with the donation details
  };

  render() {
    return (
      <section>
      <center><div className="App">
        <br></br>
        <h1>Donate</h1>
        <form onSubmit={this.handleSubmit}>
          <br></br>
          <br></br>
          <br />
          <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Donor Name</Form.Label>
        <Form.Control  type="text"
              value={this.state.donorName}
              onChange={this.handleDonorNameChange} />
      </Form.Group>
          <br></br>
          <br></br>
          <br /><label>Donation Type</label>
          <Form.Select aria-label="Default select example">
      <option>Donation Type</option>
      <option value="Organization">Organization</option>
      <option value="Individual">Individual</option>
      
    </Form.Select>
          <br></br>
          <br></br>
          <br />
          <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label> Donation Amount (INR):</Form.Label>
        <Form.Control  type="text"
              value={this.state.donationAmount}
              onChange={this.handleDonationAmountChange} />
      </Form.Group>
          <br></br>
          <br></br>
          <br />
          <center><Button variant="secondary" type="submit">Donate</Button></center>
         
        </form>
      </div>
     </center>
     </section>
    );
  }
}




export default Donate;
