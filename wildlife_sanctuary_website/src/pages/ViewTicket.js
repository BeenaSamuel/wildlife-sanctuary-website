import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewTicket(props) {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      loadDetails();
    }, []);
  
    const loadDetails = async () => {
      try {
        const result = await axios.get(
          `http://localhost:8082/api/tickets?touristId=${props.touristid}`
        );
        setData(result.data.tickets);
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    return (
      <div className="ticketdetails">
        <center>
          <div className="con">
            <table className="table table-bordered s">
              <thead>
                <tr>
                  <th>Ticket no</th>
                  <th>Type</th>
                  <th>Ride</th>
                </tr>
              </thead>
              <tbody>
                {data.map((ticket) => (
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
  