import React, { Component } from 'react';
import './ScrollUp.css';

const ScrollUp = () => { 
    return (
        <div className="scrollUp_container">
            <div className="scrollUp_top">Top</div>
            <div className="scrollUp_vehicle_container">
                <div className="scrollUp_button">3</div>
                <div className="scrollUp_button">X</div>
                <div className="scrollUp_button">Y</div>
                <div className="scrollUp_button">S</div>
                <div className="scrollUp_button">C</div>
                <div className="scrollUp_button">R</div>
            </div> 
        </div>
    ); 
}

export default ScrollUp;