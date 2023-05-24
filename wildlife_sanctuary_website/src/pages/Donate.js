import React, { useState } from 'react';

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
      <center><div className="App">
        <br></br>
        <h1>Donate</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Donation ID:
            <input
              type="text"
              value={this.state.donationId}
              onChange={this.handleDonationIdChange}
            />
          </label>
          <br></br>
          <br></br>
          <br />
          <label>
            Donor Name:
            <input
              type="text"
              value={this.state.donorName}
              onChange={this.handleDonorNameChange}
            />
          </label>
          <br></br>
          <br></br>
          <br />
          <label>
            Donation Source:
            <select
              value={this.state.donationSource}
              onChange={this.handleDonationSourceChange}
            >
              <option value="organization">Organization</option>
              <option value="individual">Individual</option>
            </select>
          </label>
          <br></br>
          <br></br>
          <br />
          <label>
            Donation Amount (INR):
            <input
              type="text"
              value={this.state.donationAmount}
              onChange={this.handleDonationAmountChange}
            />
          </label>
          <br></br>
          <br></br>
          <br />
          <center><button type="submit">Donate</button></center>
        </form>
      </div>
     </center>
    );
  }
}

export default Donate;