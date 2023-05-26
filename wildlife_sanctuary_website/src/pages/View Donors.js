import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./View Donors.css";

function ViewDonors() {
  const [data, setData] = useState([]);

<<<<<<< Updated upstream
   
  const loadDetails =async()=>
  {
     const result =await  axios
     .get("http://localhost:8085/api/donations");
     setData(result.data);
  }
  return(
  <div className="donardetails">
  <center>
    <div className="con">
      <table className="table table-bordered s">
        <thead>
          <tr>
            
           {/* <th>Id</th> */}
            <th>Name</th>
            <th>Type</th> 
            <th>Amount</th>
          
          </tr>
        </thead>
        <tbody>
          {data.map((details) => (
            <tr >
              

              
              {/* <td>{details.id}</td> */}
              <td>{details.donorname}</td>
              <td>{details.donationtype}</td>
              <td>{details.donationamount}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
</div>
    
  </center>
</div>
 
=======
  useEffect(() => {
    loadDetails();
  }, []);

  const loadDetails = async () => {
    const result = await axios.get("http://localhost:8085/api/donations");
    setData(result.data);
  };

  return (
    <div className="donardetails">
      <center>
        <div className="con">
          <DataTable
            value={data}
            className="p-datatable-custom"
            rows={10}
            emptyMessage="No donors found"
          >
            <Column field="donorname" header="Name" className="p-column-custom" />
            <Column field="donationtype" header="Type" className="p-column-custom" />
            <Column field="donationamount" header="Amount" className="p-column-custom" />
          </DataTable>
        </div>
      </center>
    </div>
>>>>>>> Stashed changes
  );
}

export default ViewDonors;
