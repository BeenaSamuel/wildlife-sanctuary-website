import React, { Component } from 'react';

import axios from "axios";

import { Container, Button, Form, Segment, Grid, Dropdown } from 'semantic-ui-react';


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
   
    
   axios.post("http://localhost:8085/api/donations",{donorname,donationtype,donationamount} ).then(
    alert("Thanks for donation")
   ).catch(
    (ex)=>console.log(ex)
   )
   
  };

  render() {
    const languageOptions = [
      { key: 'Individual', value: 'Individual', text: 'Individual' },
      { key: 'Organization', value: 'Organization', text: 'Organization' },
     
    ];
    return (
      
     
         <Segment inverted className='donate'>
            <Form  inverted onSubmit={this.handleSubmit} >
            <h2 className='mx-auto'>Donate</h2>
              <Grid columns={3} stackable>
                <Grid.Row className='mx-auto'>
                  <Grid.Column width={8} className='mx-auto'>
                    <Form.Field>
                      <label>Donator Name:</label>
                      <input type="text" value={this.state.donorname} onChange={this.handleDonorNameChange} />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row className='mx-auto'>
             
                  <Grid.Column width={8} className='mx-auto'>
                    <Form.Field>
                      <label>Amount:</label>
                      <input type="number" value={this.state.donationamount} onChange={this.handleDonationAmountChange} />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row className='mx-auto'>
                  <Grid.Column width={8} className='mx-auto'>
                    <Form.Field>
                      <label>Type of donation :</label>
                      <Dropdown
                        placeholder="Select Donation source"
                        fluid
                        selection
                        options={languageOptions}
                        value={this.state.donationtype}
                        onChange={this.handleDonationSourceChange}
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
     
     
    );
  }
}

export default Donate;
