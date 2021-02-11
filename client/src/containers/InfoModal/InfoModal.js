import React, { Component } from 'react';
import './InfoModal.css';
import InfoModalData_locations from '../../components/InfoModalData/InfoModalData_locations/InfoModalData_locations';
import InfoModalData_charging from '../../components/InfoModalData/InfoModalData_charging/InfoModalData_charging';

class InfoModal extends Component {
  render() {
    return ( 
      <div className="infoModal_backing">
        <div className="infoModal_container">
          <div className="infoModal_close">Close</div>
          <InfoModalData_locations />
        </div>
      </div>
    );
  }
}

export default InfoModal;