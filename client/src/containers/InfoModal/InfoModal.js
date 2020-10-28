import React, { Component } from 'react';
import './InfoModal.css';
import InfoModalData_locations from '../../components/InfoModalData/InfoModalData_locations/InfoModalData_locations';

class InfoModal extends Component {
  render() {
    return ( 
      <div className="infoModal_container">
          <div className="infoModal_title">"LOCATIONS NEARBY"</div>
          <InfoModalData_locations />
      </div>
    );
  }
}

export default InfoModal;