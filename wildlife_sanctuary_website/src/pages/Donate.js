import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

class Donate extends Component {
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
      <Container className="d-flex justify-content-center align-items-start" style={{ minHeight: '100vh' }}>
        <div className="donate-form">
          <h1>Donate</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="donorName">
              <Form.Label>Donor Name:</Form.Label>
              <Form.Control type="text" value={this.state.donorName} onChange={this.handleDonorNameChange} />
            </Form.Group>

            <Form.Group controlId="donationSource">
              <Form.Label>Donation Type:</Form.Label>
              <Form.Control as="select" value={this.state.donationSource} onChange={this.handleDonationSourceChange}>
                <option value="organization">Organization</option>
                <option value="individual">Individual</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="donationAmount">
              <Form.Label>Donation Amount (INR):</Form.Label>
              <Form.Control type="text" value={this.state.donationAmount} onChange={this.handleDonationAmountChange} />
            </Form.Group>

            <Button variant="secondary" type="submit">
              Donate
            </Button>
          </Form>
        </div>
      </Container>
    );
  }
}

export default Donate;
