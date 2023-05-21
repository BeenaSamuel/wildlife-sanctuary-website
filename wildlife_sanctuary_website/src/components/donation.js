import React, { useState } from 'react';

const DonationPage = () => {
  const [donationId, setDonationId] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donationSource, setDonationSource] = useState('organization');
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonationIdChange = (event) => {
    setDonationId(event.target.value);
  };

  const handleDonorNameChange = (event) => {
    setDonorName(event.target.value);
  };

  const handleDonationSourceChange = (event) => {
    setDonationSource(event.target.value);
  };

  const handleDonationAmountChange = (event) => {
    setDonationAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Donation Details:');
    console.log('Donation ID:', donationId);
    console.log('Donor Name:', donorName);
    console.log('Donation Source:', donationSource);
    console.log('Donation Amount:', donationAmount);
    // Perform any necessary actions with the donation details
  };

  return (
   <center> <div>
        <br></br>
        <br></br>
      <h1>Donate to Wildlife Sanctuary</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Donation ID:
          <input
            type="text"
            value={donationId}
            onChange={handleDonationIdChange}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Donor Name:
          <input
            type="text"
            value={donorName}
            onChange={handleDonorNameChange}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Donation Source:
          <select
            value={donationSource}
            onChange={handleDonationSourceChange}
          >
            <option value="organization">Organization</option>
            <option value="individual">Individual</option>
          </select>
        </label>
        <br></br>
        <br></br>
        <label>
          Donation Amount (INR):
          <input
            type="text"
            value={donationAmount}
            onChange={handleDonationAmountChange}
          />
          <br></br>
          <br></br>
        </label>
       <center><button type="submit">Donate</button></center> 
      </form>
    </div>
    </center>
  );
};

export default DonationPage;
