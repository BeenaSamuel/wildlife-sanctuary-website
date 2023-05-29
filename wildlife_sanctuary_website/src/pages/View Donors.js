import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import './ViewDonors.css'

function ViewDonors() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [globalFilterValue, setGlobalFilterValue] = useState('');

  useEffect(() => {
    loadDetails();
  }, []);

  const loadDetails = async () => {
    const result = await axios.get("http://localhost:8085/api/donations");
    setData(result.data);
    setFilteredData(result.data); // Initialize filtered data with all the fetched data
  };

  const onGlobalFilterChange = (e) => {
    const { value } = e.target;
    setGlobalFilterValue(value);
  
    if (value) {
      const filteredResult = data.filter(
        (item) =>
          item.donorname.toLowerCase().includes(value.toLowerCase()) ||
          item.donationtype.toLowerCase().includes(value.toLowerCase()) ||
          String(item.donationamount)
            .toLowerCase()
            .includes(value.toLowerCase())
      );
  
      setFilteredData(filteredResult); // Update the filtered data state
    } else {
      setFilteredData(data); // Update the filtered data state with all the data when the filter value is empty
    }
  };
  
  const renderHeader = () => {
    return (
      <div className="flex justify-content-end home " >
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

  const header = renderHeader();

  return (
    
    <div inverted className="card donor ">
      <DataTable
        value={filteredData} // Display the filtered data in the DataTable
        paginator
        rows={10}
        dataKey="id"
        globalFilter={globalFilterValue}
        header={header}
        emptyMessage="No donors found."
        className="custom-datatable" 
        inverted
      >
        <Column field="donorname" header="Name" filter />
        <Column field="donationtype" header="Type" filter  />
        <Column field="donationamount" header="Amount" filter  />
      </DataTable>
    </div>
    
  );
}

export default ViewDonors;
