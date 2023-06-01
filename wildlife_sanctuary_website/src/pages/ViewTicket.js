import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input , Segment, Table, Divider, Message } from 'semantic-ui-react'
import './Home.css'

function ViewTicket(props) {
  const [ticketData, setTicketData] = useState([]);
  const [touristData, setTouristData] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

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

      const calculatedPrice = calculateTotalPrice(ticketData);
      setTotalPrice(calculatedPrice);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const calculateTotalPrice = (tickets) => {
    let totalPrice = 0;

    for (const ticket of tickets) {
      if (ticket.type === "full") {
        totalPrice += 20;
      } else if (ticket.type === "half") {
        totalPrice += 10;
      }

      if (ticket.ride === "Ridetype 1") {
        totalPrice += 10;
      } else if (ticket.ride === "Ridetype 2") {
        totalPrice += 15;
      } else if (ticket.ride === "Ridetype 3") {
        totalPrice += 20;
      }
      
    }

    return totalPrice;
  };

  return (
    <Segment className="ticketview">
      <Segment padded="very">
        <Segment.Group inverted color="black">
          <Segment inverted>
            <h2>Tourist Details</h2>
          </Segment>
          <Segment inverted>
            <label className="mx-3">ID: </label>
            <div class="ui input">
              <input className='text-center' type="text" value={touristData.id} disabled="" tabindex="-1" />
            </div>
          </Segment>
          <Segment inverted>
            <label className="mx-3">Name: </label>
            <div class="ui input">
              <input className='text-center' type="text" value={touristData.name} disabled="" tabindex="-1" />
            </div>
          </Segment>
          <Segment inverted>
            <label className="mx-3">Amount: </label>
            <div class="ui input">
              <input className='text-center' type="text" value={touristData.amount} disabled="" tabindex="-1" />
            </div>
          </Segment>
          <Segment inverted>
            <label className="mx-3">Contact: </label>
            <div class="ui input">
              <input className='text-center' type="text" value={touristData.contact} disabled="" tabindex="-1" />
            </div>
          </Segment>
          <Segment inverted>
            <label className="mx-3">Language: </label>
            <div class="ui input">
              <input className='text-center' type="text" value={touristData.prefferedlang} disabled="" tabindex="-1" />
            </div>
          </Segment>
        </Segment.Group>
      </Segment>

      <Table inverted celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Type</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Ride</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {ticketData.map((ticket) => (
            <Table.Row key={ticket.id}>
              <Table.Cell>{ticket.id}</Table.Cell>
              <Table.Cell>{ticket.type}</Table.Cell>
              <Table.Cell>{ticket.fordate}</Table.Cell>
              <Table.Cell>{ticket.ride}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Segment>
        <Message positive>
          <Message.Header>Total Price </Message.Header>
          <p>
             <b>Rs.{totalPrice}</b>
          </p>
        </Message>
      </Segment>
    </Segment>
  );
}

export default ViewTicket;
