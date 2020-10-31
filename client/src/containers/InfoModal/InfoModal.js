import React, { Component } from 'react';
import './InfoModal.css';
import InfoModalData_locations from '../../components/InfoModalData/InfoModalData_locations/InfoModalData_locations';
import InfoModalData_charging from '../../components/InfoModalData/InfoModalData_charging/InfoModalData_charging';

class InfoModal extends Component {
  render() {
    return ( 
      <div className="infoModal_container">
          <InfoModalData_charging />
      </div>
    );
  }
}

export default InfoModal;