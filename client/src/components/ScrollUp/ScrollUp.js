import React, { Component } from 'react';
import './ScrollUp.css';

const ScrollUp = ({vehicleData}) => { 

    const renderedVehiclesArr = vehicleData.length
    ? vehicleData
    : [];

    return (
        <div className="scrollUp_container">
            <div className="scrollUp_top">Top</div>
            <div className="scrollUp_vehicle_container">
                {renderedVehiclesArr.map((option) => {
                    return(<div className="scrollUp_button">{option.split(' ')[1]}</div>)
                })} 
            </div> 
        </div>
    ); 
}

export default ScrollUp;