import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../Login.css'; 
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    axios
      .get(`http://localhost:8081/api/tourists?name=${username}&password=${password}`)
      .then((response) => {
        const data = response.data;
        if (data.length) {
          console.log('User exists!');
          this.setState({ error: 'Sign in success' });
          this.props.onSignIn(); // Call the onSignIn prop function
        } else {
          console.log('User does not exist!');
          this.setState({ error: 'Invalid username or password' });
        }
        
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        this.setState({ error: 'Error signing in. Please try again later.' });
      });
  };

  handleSignOut = () => {
    // Set the isSignedIn state to false in the parent component
    this.props.onSignOut();
  };

  render() {
    // If the user is signed in, render a sign-out button
    if (this.props.isSignedIn) {
      return (
        <div className="App">
          <h1>Sign Out</h1>
          <Button variant="primary" onClick={this.handleSignOut}>
            Sign Out
          </Button>
        </div>
      );
    }

    // Otherwise, render the sign-in form
    return (
      <div className="App">
        
       <div className='Login mx-auto'>
        <Form onSubmit={this.handleSubmit}>
        <h1>Sign In</h1>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            
            <Form.Control
              className="w-50 mx-auto"
              type="text"
              placeholder="Enter username"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
           
            <Form.Control
              className="w-50 mx-auto"
              type="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </Form.Group>


          <Button variant="primary" type="submit">
            Sign In
          </Button>

        

          {this.state.error && <div className="mt-3 text-danger">{this.state.error}</div>}
        </Form>
        </div>
      </div>
    );
  }
}

export default Login;
