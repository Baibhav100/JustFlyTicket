import React from 'react'
import './Aeroplane.css';

const Aeroplane = () => {
  return (
    <div className="airplane-container">
      <div className="airplane">
        <div className="body">
            <img src={require("../images/flight.png")} alt="" />
        </div>
        <div className="wing wing-left"></div>
        <div className="wing wing-right"></div>
        <div className="tail"></div>
      </div>
    </div>
  )
}

export default Aeroplane
