// src/components/Home/Home.js

// import CSS
import './Home.css';
import { Divider } from 'semantic-ui-react';
import React from 'react';
const HomepageLayout = (props) => {
    const homeStyles = {
        width: '100%',
        height: '100%',
        padding : '0'
      };
    return (
        <div style={homeStyles}>
            <div className="banner-container">
                <div className="text-center">
                    <h1 className=" text-6xl text-orange-600 font-bold">Preserving Nature's Harmony </h1>
                    <h4 className="text-4xl mt-8 text-white">Harnessing Conservation Efforts to Safeguard Biodiversity and Foster a Sustainable Future</h4>
                </div>
            </div>
           
            <footer className="footer">
          <div className="footer-content">
            <div className="footer-about mx-auto">
            <br></br>
              
              <h3>About Us</h3>
              <p>
                Website for conserve wildlife by improving tourism and create a awareness about the animal,
                people can donate for the animals also
              </p>
            </div>
            <div className="footer-copyright">
              <p>© 2023 Your Company. All rights reserved.</p>
              <br></br>
              <br></br>
            </div>
          </div>
        </footer>
        </div>
    );
};

export default HomepageLayout;