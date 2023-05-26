import axios from "axios";

import React, { useEffect, useState } from "react";



function ViewDonors() {
    const [data,setData]=useState([]);
    
    useEffect(() => {
        loadDetails();
      }, []);

   
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
 
  );
};

export default ViewDonors;