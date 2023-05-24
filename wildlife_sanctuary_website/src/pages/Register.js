import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      place: '',
      contact: '',
      languages: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted');
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handlePlaceChange = (e) => {
    this.setState({ place: e.target.value });
  };

  handleContactChange = (e) => {
    this.setState({ contact: e.target.value });
  };

  handleLanguageChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    this.setState({ languages: selectedOptions });
  };

  render() {
    const { name, place, contact, languages } = this.state;

    return (
      <Container className="d-flex justify-content-center align-items-start" style={{ minHeight: '100vh' }}>
        <div className="register-form">
          <h2>Register</h2>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" value={name} onChange={this.handleNameChange} />
            </Form.Group>

            <Form.Group controlId="place">
              <Form.Label>Places to Visit:</Form.Label>
              <Form.Control as="select" value={place} onChange={this.handlePlaceChange}>
                <option value="">Select a place</option>
                <option value="place1">Place 1</option>
                <option value="place2">Place 2</option>
                <option value="place3">Place 3</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="contact">
              <Form.Label>Contact:</Form.Label>
              <Form.Control type="text" value={contact} onChange={this.handleContactChange} />
            </Form.Group>

            <Form.Group controlId="languages">
              <Form.Label>Preferred Languages:</Form.Label>
              <Form.Control as="select" multiple value={languages} onChange={this.handleLanguageChange}>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </div>
      </Container>
    );
  }
}

export default Register;
