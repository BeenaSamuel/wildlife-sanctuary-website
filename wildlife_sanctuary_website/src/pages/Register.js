import React, { Component } from 'react';
import { Container, Button, Form, Segment, Grid, Dropdown } from 'semantic-ui-react';
import axios from "axios";


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      place: '',
      password: '',
      confirmpassword: '',
      amount: '',
      contact: '',
      prefferedlang: '',
      passwordState: 'normal',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, password, amount, contact, prefferedlang, confirmpassword } = this.state;

    if (name !== '' && contact !== '' && amount !== '') {
      if (password !== confirmpassword) {
        alert("Confirm password doesn't match");
      } else if (amount !== '5000') {
        alert("Rs.5000 must be paid");
      } else {
        axios
          .post("http://localhost:8081/api/tourists", { name, password, amount, contact, prefferedlang })
          .then(() => {
            alert("Registration success");
          })
          .catch((ex) => {
            console.log(ex);
          });
      }
    } else {
      alert('Please fill in all details');
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

  handleLanguageChange = (e, { value }) => {
    this.setState({ prefferedlang: value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleConfirmpasswordChange = (e) => {
    const { password } = this.state;
    const confirmpassword = e.target.value;
    const passwordState = password === confirmpassword ? 'match' : 'mismatch';

    this.setState({ confirmpassword, passwordState });
  };

  handleAmountChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  render() {
    const { name, amount, password, confirmpassword, contact, prefferedlang, passwordState } = this.state;
    const languageOptions = [
      { key: 'english', value: 'english', text: 'English' },
      { key: 'tamil', value: 'tamil', text: 'tamil' },
      { key: 'french', value: 'french', text: 'French' },
      { key: 'Hindi', value: 'Hindi', text: 'Hindi' },
    ];
    return (
      <Container className="banner-container justify-content-center align-items-start w-50 mx-auto ">
        <div className="register-form">
         <br></br>
          
          <Segment inverted>
            <Form  inverted onSubmit={this.handleSubmit}>
            <h2 className='mx-auto'>Register</h2>
              <Grid columns={2} stackable>
                <Grid.Row className='mx-auto'>
                  <Grid.Column width={16}>
                    <Form.Field>
                      <label>Name:</label>
                      <input type="text" value={name} onChange={this.handleNameChange} />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row className='mx-auto'>
                  <Grid.Column width={8}>
                    <Form.Field>
                      <label>Password:</label>
                      <input type="password" value={password} onChange={this.handlePasswordChange} />
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Form.Field>
                      <label>Confirm password:</label>
                      <input
                        type="password"
                        value={confirmpassword}
                        onChange={this.handleConfirmpasswordChange}
                        className={
                          passwordState === 'match'
                            ? 'password-match'
                            : passwordState === 'mismatch'
                            ? 'password-mismatch'
                            : 'password-normal'
                        }
                      />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row >
                <Grid.Row className='mx-auto'>
                  <Grid.Column width={8}>
                    <Form.Field>
                      <label>Contact:</label>
                      <input type="number" value={contact} onChange={this.handleContactChange} />
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Form.Field>
                      <label>Amount:</label>
                      <input type="number" value={amount} onChange={this.handleAmountChange} />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row className='mx-auto'>
                  <Grid.Column width={16}>
                    <Form.Field>
                      <label>Preferred Languages:</label>
                      <Dropdown
                        placeholder="Select Languages"
                        fluid
                        selection
                        options={languageOptions}
                        value={prefferedlang}
                        onChange={this.handleLanguageChange}
                      />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <br></br>
              <br></br>
              <Button primary type="submit" className='mx-auto'>
                Register
              </Button>
            </Form>
          </Segment>
        </div>
      </Container>
    );
  }
}

export default Register;
