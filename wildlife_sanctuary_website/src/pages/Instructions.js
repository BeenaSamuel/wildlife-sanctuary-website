import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
const Instructions = () => {
  const dos = [ 'Respect the animals and their space.', 'Follow all rules and regulations set by the sanctuary.', 'Be quiet and minimize noise to avoid disturbing the animals.', 'Stay on designated paths and areas.', 'Dispose of trash properly.', 'Report any concerns or problems to staff members.' ];

  const donts = [ 'Do not feed the animals.', 'Do not touch or attempt to interact with the animals.', 'Do not smoke or use any tobacco products.', 'Do not litter or leave trash behind.', 'Do not bring pets or other animals into the sanctuary.', 'Do not disrupt the peace and tranquility of the sanctuary.' ];

  return (
    <div >
        <br></br>
        <br></br><br></br>
    <div style={{ display: 'flex', padding: '20px', backgroundColor: 'white' }}>
      <div style={{ flex: 1 }}>
        <h2 style={{ color: 'green' }}>Do's:</h2>
        <hr style={{ borderTop: '3px solid #bbb', width: '100%' }} />
        <ul style={{ listStyleType: 'none', fontSize: '20px' }}>
          {dos.map((item, index) => (
            <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
              <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '10px', color: 'green' }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: 1 }}>
        <h2 style={{ color: 'red' }}>Don'ts:</h2>
        <hr style={{ borderTop: '3px solid #bbb', width: '100%' }} />
        <ul style={{ listStyleType: 'none', fontSize: '20px' }}>
          {donts.map((item, index) => (
            <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
              <FontAwesomeIcon icon={faTimesCircle} style={{ marginRight: '10px', color: 'red' }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Instructions;
