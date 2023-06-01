import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button'; // Import the Button component
import axios from 'axios';
import React, { useEffect, useState } from "react";
import './Home.css';

function ViewTicket(props) {
  const [ticketData, setTicketData] = useState([]);
  const [touristData, setTouristData] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [globalFilterValue, setGlobalFilterValue] = useState(''); // Add globalFilterValue state

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

  const onGlobalFilterChange = (e) => {
    const { value } = e.target;
    setGlobalFilterValue(value);

    if (value) {
      const filteredResult = ticketData.filter(
        (item) =>
          item.id.toLowerCase().includes(value.toLowerCase()) ||
          item.type.toLowerCase().includes(value.toLowerCase()) ||
          item.fordate.toLowerCase().includes(value.toLowerCase()) ||
          item.ride.toLowerCase().includes(value.toLowerCase())
      );

      setTicketData(filteredResult);
    } else {
      // Reset the ticket data to original state when the filter value is empty
      loadDetails();
    }
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end home">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    );
  };

  const handleDelete = async (ticketId) => {
    try {
      // Perform the delete request using the ticketId
      await axios.delete(`http://localhost:8082/api/tickets/${ticketId}`);
  
      // Reload the ticket details after successful deletion
      loadDetails();
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  const header = renderHeader();

  return (
    <div className="ticketview">
      <div className="p-card p-p-3">
        <div className="p-mb-2">
          <h2>Tourist Details</h2>
        </div>
        <div className="p-mb-2">
          <span>ID:</span>
          <div className="p-inputgroup">
            <InputText
              value={touristData.id}
              disabled
              tabIndex="-1"
              className="text-center"
            />
          </div>
        </div>
        <div className="p-mb-2">
          <span>Name:</span>
          <div className="p-inputgroup">
            <InputText
              value={touristData.name}
              disabled
              tabIndex="-1"
              className="text-center"
            />
          </div>
        </div>
        <div className="p-mb-2">
          <span>Amount:</span>
          <div className="p-inputgroup">
            <InputText
              value={touristData.amount}
              disabled
              tabIndex="-1"
              className="text-center"
            />
          </div>
        </div>
        <div className="p-mb-2">
          <span>Contact:</span>
          <div className="p-inputgroup">
            <InputText
              value={touristData.contact}
              disabled
              tabIndex="-1"
              className="text-center"
            />
          </div>
        </div>
        <div className="p-mb-2">
          <span>Language:</span>
          <div className="p-inputgroup">
            <InputText
              value={touristData.prefferedlang}
              disabled
              tabIndex="-1"
              className="text-center"
            />
          </div>
        </div>
      </div>

      <DataTable
        value={ticketData}
        paginator
        rows={10}
        dataKey="id"
        header={header}
        emptyMessage="No tickets found."
        className="custom-datatable"
      >
        <Column field="id" header="ID" sortable filter />
        <Column field="type" header="Type" sortable filter />
        <Column field="fordate" header="Date" sortable filter />
        <Column field="ride" header="Ride" sortable filter />

        <Column
          header="Actions"
          body={(rowData) => (
            <div className="p-d-flex p-justify-center">
              <Tooltip target=".action-button" content="Delete" position="top" />
              <Button
                icon="pi pi-trash"
                className="p-button-rounded p-button-danger action-button"
                onClick={() => handleDelete(rowData.id)}
              />
            </div>
          )}
          style={{ textAlign: 'center', width: '8em' }}
        />
      </DataTable>

      <div className="p-card p-p-3">
        <div className="p-mb-2">
          <span>Total Price:</span>
          <div className="p-inputgroup">
            <InputText
              value={`Rs. ${totalPrice}`}
              disabled
              className="text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewTicket;
