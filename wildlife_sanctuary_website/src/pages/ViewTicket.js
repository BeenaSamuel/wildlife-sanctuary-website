import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button'; 
import axios from 'axios';
import React, { useEffect, useState } from "react";
import '../Styles/Home.css';
import { Segment } from 'semantic-ui-react';
import { EditView } from './EditTicket';


function ViewTicket(props) {
  
  const [ticketData, setTicketData] = useState([]);
  const [touristData, setTouristData] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [globalFilterValue, setGlobalFilterValue] = useState(''); // Add globalFilterValue state
  const [editData, setEditData] = useState(null);

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
          (item.id && typeof item.id === 'string' && item.id.toLowerCase().includes(value.toLowerCase())) ||
          item.type.toLowerCase().includes(value.toLowerCase()) ||
          item.fordate.toLowerCase().includes(value.toLowerCase()) ||
          item.ride.toLowerCase().includes(value.toLowerCase())
      );
  
      setTicketData(filteredResult);
    } else {
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
  const handleEdit = (rowData) => {
    setEditData(rowData); // Set the editData state with the rowData
  };

  const handleEditSubmit = async (editedData) => {
    try {
      await axios.put(`http://localhost:8082/api/tickets/${editedData.id}`, editedData);
      setEditData(null); // Clear the editData state
      loadDetails();
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  const header = renderHeader();

  if (editData) {
    // Render EditView if editData exists
    return (
      <EditView
        editData={editData}
        handleEditSubmit={handleEditSubmit}
        handleCancel={() => setEditData(null)}
      />
    );
  }
  return (
   
    <div className="ticketview">
      <Segment inverted>       
      <div  className="p-card p-p-3">
      <br></br>
        <div className="p-mb-2">
          <h2 className='my-2 tabletitles'>Tourist Details</h2>
        </div>
        <div className="p-mb-2">
          <span className='tableheaders'> ID:</span>
          <div className="p-inputgroup w-25 mx-auto">
            <InputText
              value={touristData.id}
              readOnly
              tabIndex="-1"
              className="text-center "
            />
          </div>
        </div>
        <div className="p-mb-2">
          <span className='tableheaders'>Name:</span>
          <div className="p-inputgroup w-25 mx-auto">
            <InputText
              value={touristData.name}
              readOnly
              tabIndex="-1"
              className="text-center tablebody"
            />
          </div>
        </div>
        <div className="p-mb-2">
          <span className='tableheaders'>Amount:</span>
          <div className="p-inputgroup w-25 mx-auto">
            <InputText
              value={touristData.amount}
              readOnly
              tabIndex="-1"
              className="text-center tablebody"
            />
          </div>
        </div>
        <div className="p-mb-2">
          <span className='tableheaders'>Contact:</span>
          <div className="p-inputgroup w-25 mx-auto">
            <InputText
              value={touristData.contact}
              readOnly
              tabIndex="-1"
              className="text-center tablebody"
            />
          </div>
        </div>
        <div className="p-mb-2">
          <span className='tableheaders'>Language:</span>
          <div className="p-inputgroup w-25 mx-auto">
            <InputText
              value={touristData.prefferedlang}
              readOnly
              tabIndex="-1"
              className="text-center tablebody"
            />
          </div>
          <br></br>
        </div>
      </div>
      </Segment>
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
      <Tooltip target=".action-button" content="Edit" position="top" />
      <Button
                  icon="pi pi-pencil"
                  className="p-button-rounded p-button-info action-button"
                  onClick={() => handleEdit(rowData)}
                />
      <Tooltip target=".delete-button" content="Delete" position="top" />
      <Button
        icon="pi pi-trash"
        className="p-button-rounded p-button-danger action-button delete-button"
        onClick={() => handleDelete(rowData.id)}
      />
    </div>
  )}
  style={{ textAlign: 'center', width: '10em' }}
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
