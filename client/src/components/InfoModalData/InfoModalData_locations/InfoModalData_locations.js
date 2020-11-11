import React, { Component } from 'react';
import './InfoModalData_locations.css';

class InfoModalData_locations extends Component {
  render() {
    return ( 
      <div className="infoModalData_locations_container">

        <h1>LOCATIONS NEARBY</h1>
        <div className="app_modalData_content">
          <div className="infoModalData_showrooms_container">
            <div className=""><a className="app_textdecorationNone" href="https://www.tesla.com/findus?search=90210%2C%20USA&bounds=34.151956579194035%2C-118.30060511874998%2C34.05402148312065%2C-118.52033168124998&zoom=13&filters=store%2Cservice%2Csupercharger%2Cdestination%20charger" target="_blank" rel="noopener noreferrer">Tesla Find Us</a></div>
            <div className="">SHOWROOMS</div>
            <div className="infoModalData_showroom_container">
              <div className="infoPanel_showroom1">
                <h4 className="infoPanel_showroom1_name">Santa Monica Place</h4>
                <p className="infoPanel_showroom1_address">
                    395 Santa Monica Place #120
                    Santa Monica, CA 90401
                </p>
                <span>Store: </span>
                <span className="infoPanel_showroom1_phone">(310) 395-8333</span>
                <p className="infoPanel_showroom1_openTimes">
                    Monday - Thursday 10:00am - 8:00pm
                    Friday - Saturday 10:00am - 9:00pm
                    Sunday 11:00am - 8:00pm
                </p>
              </div>
              <div className="infoPanel_showroom2">
                <h4 className="infoPanel_showroom2_name">Los Angeles - Century City</h4>
                <p className="infoPanel_showroom2_address">
                    10250 Santa Monica Blvd
                    Ste. 1340
                    Los Angeles, CA 90067
                </p>
                <span>Store: </span>
                <span className="infoPanel_showroom2_phone">(310) 553-5767</span>
                <p className="infoPanel_showroom2_openTimes">
                    Monday - Saturday 10:00am - 9:00pm
                    Sunday 11:00am - 7:0pm
                </p>
              </div>
            </div>
          </div>

          <div className="infoModalData_serviceCenters_container">
            <div className="">SERVICE CENTERS</div>
            <div className="infoModalData_showroom_container">
              <div className="infoPanel_showroom1">
                <h4 className="infoPanel_showroom1_name">Santa Monica Place</h4>
                <p className="infoPanel_showroom1_address">
                    395 Santa Monica Place #120
                    Santa Monica, CA 90401
                </p>
                <span>Store: </span>
                <span className="infoPanel_showroom1_phone">(310) 395-8333</span>
                <p className="infoPanel_showroom1_openTimes">
                    Monday - Thursday 10:00am - 8:00pm
                    Friday - Saturday 10:00am - 9:00pm
                    Sunday 11:00am - 8:00pm
                </p>
              </div>
              <div className="infoPanel_showroom2">
                <h4 className="infoPanel_showroom2_name">Los Angeles - Century City</h4>
                <p className="infoPanel_showroom2_address">
                    10250 Santa Monica Blvd
                    Ste. 1340
                    Los Angeles, CA 90067
                </p>
                <span>Store: </span>
                <span className="infoPanel_showroom2_phone">(310) 553-5767</span>
                <p className="infoPanel_showroom2_openTimes">
                    Monday - Saturday 10:00am - 9:00pm
                    Sunday 11:00am - 7:0pm
                </p>
              </div> 
            </div>
          </div>

          <div className="infoModalData_chargingLocations_container">
            <div className="">CHARGING LOCATIONS</div>
            <div className="infoModalData_showroom_container">
              <div className="infoPanel_showroom1">
                <h4 className="infoPanel_showroom1_name">Santa Monica Place</h4>
                <p className="infoPanel_showroom1_address">
                    395 Santa Monica Place #120
                    Santa Monica, CA 90401
                </p>
                <span>Store: </span>
                <span className="infoPanel_showroom1_phone">(310) 395-8333</span>
                <p className="infoPanel_showroom1_openTimes">
                    Monday - Thursday 10:00am - 8:00pm
                    Friday - Saturday 10:00am - 9:00pm
                    Sunday 11:00am - 8:00pm
                </p>
              </div>
              <div className="infoPanel_showroom2">
                <h4 className="infoPanel_showroom2_name">Los Angeles - Century City</h4>
                <p className="infoPanel_showroom2_address">
                    10250 Santa Monica Blvd
                    Ste. 1340
                    Los Angeles, CA 90067
                </p>
                <span>Store: </span>
                <span className="infoPanel_showroom2_phone">(310) 553-5767</span>
                <p className="infoPanel_showroom2_openTimes">
                    Monday - Saturday 10:00am - 9:00pm
                    Sunday 11:00am - 7:0pm
                </p>
              </div> 
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default InfoModalData_locations;