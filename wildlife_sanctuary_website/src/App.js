import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Whywe from "./pages/Whywe";
import Donate from "./pages/Donate";
import Instructions from "./pages/Instructions";
import EditView from "./pages/EditView";
import Tourism from "./pages/Tourism";
import Gallery from "./pages/Gallery";
import ViewDonors from "./pages/View Donors";
import HomepageLayout from "./pages/Homepage";
import { Route, Routes } from "react-router-dom"
import "./App.css"



import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';


import 'bootstrap/dist/css/bootstrap.min.css';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";  




function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

 
  return (
    <div className = "mx-auto" >
       <Navbar isSignedIn={isSignedIn} />
     
      <div className="mx-auto banner-container">
        <Routes>
        
          <Route path="/" element={<HomepageLayout />} />
          
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Instructions" element={<Instructions />} />
          <Route path="/Whywe" element={<Whywe />} />
          <Route path="/Tourism" element={<Tourism />} />
          <Route path="/Homepage" element={<HomepageLayout />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/View Donors" element={<ViewDonors />} />
          <Route path="/EditView" element={<EditView />} />
      

          
          <Route path="/Login" element={<Login onSignIn={handleSignIn} />} />
          
        </Routes>
        
        
        {isSignedIn ? (
          
          <div style= {{display:" flex" ,justifyContent : "center" }} className="m-3">
          <br></br>
          
          <Button  variant="success" type="submit" onClick={() => setIsSignedIn(false)} >
            Sign out
          </Button>
          </div>
        ) : (
          null
        )}
      
      </div>
      
    
      
    </div>
  )
}

export default App
