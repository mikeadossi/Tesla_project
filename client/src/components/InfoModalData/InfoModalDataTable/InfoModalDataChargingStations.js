import React, { Component } from 'react';
import './InfoModalData_table.css';

class InfoModalData_charging_stations extends Component {
  render() {
    return ( 
      <div className="infoModalData_charging_stations_container">
        <div className="app_displayFlex">
            <div className="infoModalData_charging_select">
                <div className="infoModalData_select_title">Select Socket</div>
                <div className="infoModalData_socket_container">
                    <div className="app_seeMore_btn infoModalData_socket_btn">
                        <div>Port J1772</div>
                        <div className="infoModalData_socket_img"></div>
                        <div>Level: 2</div>
                        <div>Connect: with adapter</div>
                    </div>
                    <div className="app_seeMore_btn infoModalData_socket_btn">
                        <div>CHAdeMO</div>
                        <div className="infoModalData_socket_img"></div>
                        <div>Level: 3</div>
                        <div>Connect: with adapter</div>
                    </div>
                    <div className="app_seeMore_btn infoModalData_socket_btn">
                        <div>SAE Combo CCS</div>
                        <div className="infoModalData_socket_img"></div>
                        <div>Level: 3</div>
                        <div>Connect: No</div>
                    </div>
                    <div className="app_seeMore_btn infoModalData_socket_btn">
                        <div>Tesla HPWC</div>
                        <div className="infoModalData_socket_img"></div>
                        <div>Level: 2</div>
                        <div>Connect: Yes</div>
                    </div>
                    <div className="app_seeMore_btn infoModalData_socket_btn">
                        <div>Supercharger</div>
                        <div className="infoModalData_socket_img"></div>
                        <div>Level: 3</div>
                        <div>Connect: Yes</div>
                    </div> 
                </div>
            </div>
            <div className="infoModalData_charging_state">
                <div className="infoModalData_select_title">State of Charge</div>
                <div className="infoModalData_meter_select app_displayFlex">
                    <div className="infoModalData_meter_lr infoModalData_meter_left">
                        <div>Current: <span>20%</span></div>
                        <div><span>57</span> mi</div>
                    </div>
                    <div className="infoModalData_meter_lr infoModalData_meter_right">
                        <div>Desired: <span>80%</span></div>
                        <div><span>228</span> mi</div>
                    </div>
                  </div>
                <div className="infoModalData_charging_meter"></div>
                <div className="infoModalData_charging_results_div">
                    <div className="infoModalData_charging_result">
                        <span>Charging Speed:</span>
                        <span> <span>5.8</span> mph</span>
                    </div> 
                    <div className="infoModalData_charging_result">
                        <span>Charging time:</span>
                        <span> <span>29</span>hr <span>18</span>min</span>
                    </div>  
                    <div className="infoModalData_charging_result">
                        <span>Battery Intake:</span>
                        <span> <span>1.9</span>kW</span>
                    </div> 
                    <div className="infoModalData_charging_result">
                        <span>Price per kWh:</span>
                        <span> $<input className="infoModalData_pricePerKwh_input" placeholder="0.13"/></span>
                        <button className="infoModalData_pricePerKwh_btn infoModalData_pricePerKwh_edit">Edit</button>
                        <button className="infoModalData_pricePerKwh_btn infoModalData_pricePerKwh_save">Save</button>
                    </div> 
                    <div className="infoModalData_charging_result">
                        <span>Charging costs:</span>
                        <span> $<span>6.8</span></span>
                    </div> 
                </div>
            </div>
        </div>
        <div className="app_source_footer">
          <div><a href="https://evcompare.io/charging-calculator/" target="_blank" rel="noopener noreferrer">Credit- EVCompare</a></div>
          <div><a href="https://chargehub.com/en/electric-car-charging-guide.html" target="_blank" rel="noopener noreferrer">Credit- ChargeHub</a></div>
        </div>
      </div>
    );
  }
}

export default InfoModalData_charging_stations;