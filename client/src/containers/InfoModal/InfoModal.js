import React from 'react';
import './InfoModal.css';
import InfoModalData_locations from '../../components/InfoModalData/InfoModalData_locations/InfoModalData_locations';
import InfoModalData_charging from '../../components/InfoModalData/InfoModalData_charging/InfoModalData_charging';

const InfoModal = ({ closeModal }) => { 
  return ( 
    <div className="infoModal_backing">
      <div className="infoModal_container"> 
        <div
          className="vehicleConfig_close_container"
          onClick={() => {closeModal()}} 
        >
          <img
              className="vehicleConfig_close"
              src="../../../../images/Nav/close_2.png"
              alt="close"
          ></img>
        </div>
        <InfoModalData_locations />
      </div>
    </div>
  ); 
}

export default InfoModal;