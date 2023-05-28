import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewTicket(props) {
    const [ticketData, setTicketData] = useState([]);
const [touristData, setTouristData] = useState({});

  
    useEffect(() => {
      loadDetails();
    }, []);
  
    const loadDetails = async () => {
        try {
          const [ticketResponse, touristResponse] = await Promise.all([
            axios.get(`http://localhost:8082/api/tickets?touristId=${props.touristid}`),
            axios.get(`http://localhost:8081/api/tourists/${props.touristid}`)
          ]);
      
          const ticketData = ticketResponse.data.tickets;
          const touristData = touristResponse.data;
      
          setTicketData(ticketData);
          setTouristData(touristData);
        } catch (error) {
          console.error("Error:", error);
        }
      };
      
  
      return (
        <div className="ticketdetails">
          <center>
            <div className="con">
              <h2>Tourist Details</h2>
              <p>ID: {touristData.id}</p>
              <p>Name: {touristData.name}</p>
              <p>Amount: {touristData.amount}</p>
              <p>Contact: {touristData.contact}</p>
              <p>Preferred Language: {touristData.prefferedlang}</p>
              <hr />
              <h2>Ticket Details</h2>
              <table className="table table-bordered s">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Ride</th>
                  </tr>
                </thead>
                <tbody>
                  {ticketData.map((ticket) => (
                    <tr key={ticket.id}>
                      <td>{ticket.id}</td>
                      <td>{ticket.type}</td>
                      <td>{ticket.ride}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </center>
        </div>
      );
      
  }
  export default ViewTicket;
  