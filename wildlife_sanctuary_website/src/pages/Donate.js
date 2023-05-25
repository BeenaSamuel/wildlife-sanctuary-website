import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from "axios";


class Donate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      donorname: '',
      donationtype: 'organization',
      donationamount: '',
    };
  }

  

  handleDonorNameChange = (event) => {
    this.setState({ donorname: event.target.value });
  };

  handleDonationSourceChange = (event) => {
    this.setState({ donationtype: event.target.value });
  };

  handleDonationAmountChange = (event) => {
    this.setState({ donationamount: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
   const {donationamount,donationtype,donorname} = this.state;
   
    
   axios.post("http://localhost:8085/api/donations",{donationamount,donationtype,donorname} ).then(
    alert("Thanks for donation")
   ).catch(
    (ex)=>console.log(ex)
   )
   
  };

  render() {
    return (
      <Container className="d-flex justify-content-center align-items-start" style={{ minHeight: '100vh' }}>
        <div className="donate-form">
          <h1>Donate</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="donorName">
              <Form.Label><h4>Donor Name:</h4></Form.Label>
              <Form.Control type="text"  onChange={this.handleDonorNameChange} />
            </Form.Group>

            <Form.Group controlId="donationSource">
              <Form.Label><h4>Donation Type:</h4></Form.Label>
              <Form.Control as="select"  onChange={this.handleDonationSourceChange}>
                  <option>Select </option>
                <option value="organization">Organization</option>
                <option value="individual">Individual</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="donationAmount">
              <Form.Label><h4>Donation Amount (INR):</h4></Form.Label>
              <Form.Control type="number"  onChange={this.handleDonationAmountChange} />
              <br/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Donate
            </Button>
          </Form>
        </div>
      </Container>
    );
  }
}

export default Donate;
