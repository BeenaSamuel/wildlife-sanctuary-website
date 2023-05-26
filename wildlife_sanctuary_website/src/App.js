import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Whywe from "./pages/Whywe";
import Donate from "./pages/Donate";
import Instructions from "./pages/Instructions";
import Feedback from "./pages/Feedback";
import Tourism from "./pages/Tourism";
import Gallery from "./pages/Gallery";
import ViewDonors from "./pages/View Donors";
import { Route, Routes } from "react-router-dom"
import React, { useState } from 'react';

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
    <>
       <Navbar isSignedIn={isSignedIn} />
     
      <div className="container">
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Donate" element={<div style={{ display: 'flex', justifyContent: 'center' }}><Donate /></div>} />
          <Route path="/Instructions" element={<Instructions />} />
          <Route path="/Whywe" element={<Whywe />} />
          <Route path="/Tourism" element={<Tourism />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/View Donors" element={<ViewDonors />} />
          <Route path="/Login" element={<Login onSignIn={handleSignIn} />} />
          
        </Routes>
        
        
        {isSignedIn ? (
          <button onClick={() => setIsSignedIn(false)}>Sign Out</button>
        ) : (
          null
        )}
      
      </div>
      

      
    </>
  )
}

export default App
