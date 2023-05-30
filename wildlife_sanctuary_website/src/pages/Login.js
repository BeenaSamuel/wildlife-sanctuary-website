import React, { Component } from 'react';
import { Link} from "react-router-dom"
import Tourism from './Tourism';
import '../Login.css'; 
import axios from 'axios';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { useHistory } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
      redirectToOtherPage: false,
      touristId : '',
      success:''
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
    // const { history } = useNavigate();
    

    
    axios
      .get(`http://localhost:8081/api/tourists?name=${username}&password=${password}`)
      .then((response) => {
        const data = response.data;
        
        if (data.length) {
          console.log('User exists!');
          this.props.onSignIn(); // Call the onSignIn prop function

          const touristId = data[0].id; 
          this.setState({ touristId, redirectToOtherPage: true });
          localStorage.setItem('touristId', touristId);
          
          // history.push('/Tourism');
          // this.setState({ success: 'Sign in success' });
          // this.setState({ error: '' });
   
          
        } else {
          console.log('User does not exist!');
          this.setState({ error: 'Invalid username or password' });
        }
        
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        
        
      });
  };

  handleSignOut = () => {
    // Set the isSignedIn state to false in the parent component
    this.props.onSignOut();
  };
  updateTouristId = (id) => {
    this.setState({ touristId: id });
  };

  render() {
    // If the user is signed in, render a sign-out button
   
    if (this.state.redirectToOtherPage) {
      return <Tourism  touristId = {this.state.touristId} updateTouristId={this.updateTouristId}/>;
    } else {
      
  
    // Otherwise, render the sign-in form
    return (
      <div className="App ">
        <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/tiger3.jpg' /> Log-in to your account
      </Header>
      <Form size='large' onSubmit={this.handleSubmit}>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Name' value={this.state.username}
              onChange={this.handleUsernameChange}/>
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />

          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
        {this.state.error && <div className="mt-3 text-danger">{this.state.error}</div>}
          {this.state.success && <div className="mt-3 text-success">{this.state.success}</div>}
      </Form>
      <Message>
        New to us? <Link to='/Register'>Sign Up</Link>
      </Message>
    </Grid.Column>
  </Grid>

      
      </div>
    );
    }
  }
}

export default Login;
