import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import ChipsDemo from '../components/Multiselect';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      place: '',
      password: '',
      confirmpassword : '',
      contact: '',
      languages: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    {
      if(this.state.name != "" && this.state.contact != '' && this.state.languages != '' && this.state.place != '')
      {
      if (this.state.password != this.state.confirmpassword)
       {
        alert('confirm password don\'t match ');
       }
       else{
        alert('Success ');
        //axios
       }
    }
    else{
      alert('Please fill all details ');
    }
 
  }
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

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };
  handleConfirmpasswordChange = (e) => {
    this.setState({ confirmpassword: e.target.value });
   
  };
  
  render() {
    const { name, place, password , confirmpassword ,contact, languages } = this.state;

    return (
      <Container className=" justify-content-center align-items-start w-50 mx-auto" >
        <div className="register-form">
          <h2>Register</h2>
          <br></br>
            <br></br>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" value={name} onChange={this.handleNameChange} />
            </Form.Group>
            <br></br>
            <br></br>

            <Form.Group controlId="password">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" value={password} onChange={this.handlePasswordChange} />
            </Form.Group>
            <br></br>
            <br></br>

            <Form.Group controlId="confirmpassword">
              <Form.Label>Confirm password:</Form.Label>
              <Form.Control type="password" value={confirmpassword} onChange={this.handleConfirmpasswordChange} />
            </Form.Group>
            <br></br>
            <br></br>
            <Form.Group controlId="place" value = {place}>
            <Form.Label>Places to visit</Form.Label>
            <ChipsDemo  ></ChipsDemo>
           </Form.Group>
           <br></br>
            <br></br>
            <Form.Group controlId="contact">
              <Form.Label>Contact:</Form.Label>
              
              <Form.Control type="number" value={contact} onChange={this.handleContactChange} />
            </Form.Group>
            <br></br>
            <br></br>
            <Form.Group controlId="languages">
              <Form.Label>Preferred Languages:</Form.Label>
              <Form.Control as="select" multiple value={languages} onChange={this.handleLanguageChange}>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
              </Form.Control>
            </Form.Group>
            <br></br>
            <br></br>
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
