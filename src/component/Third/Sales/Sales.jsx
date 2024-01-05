import React from 'react';
import './Sales.css';
import 'react-circular-progressbar/dist/styles.css'; // Import the styles
import { CircularProgressbar } from 'react-circular-progressbar';

function Sales() {
  const percentage = 66;

  const customStyles = {
    root: { width: '100%', border: '2px solid #333333', borderRadius: '50%', padding: '10px' }, // Added border, padding, and border-radius
    path: {
      stroke: `rgba(237, 96, 31, ${percentage / 100})`, // Orange color
    },
    trail: { stroke: '#941fed' },
    text: { fill: '#333333', fontSize: '14px' },
  };

  return (
    <div className='Sales'>
      <h3>Sales</h3>
      <CircularProgressbar
        value={percentage}
        text={"Total Sales"}
        styles={customStyles} // Apply the custom styles
      />
    </div>
  );
}

export default Sales;
