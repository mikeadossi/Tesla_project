import React, { Component, useState } from "react";
import { createStore } from 'redux'; 
import "./VehiclePanel.css";
import VehicleMenu from "../../components/VehicleData/VehicleMenu/VehicleMenu";
import VehicleConfig from "../../components/VehicleData/VehicleConfig/VehicleConfig";
import {connect} from "react-redux";
import {getAllVehicles} from "../../config/actions/vehicleActions";

const VehiclePanel = (props) => {
  let [vehicleData, setVehicleData] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [vehicleContent, setVehicleContent] = useState({});

  const vehicleChoice = (model) => {
    setVisibility(true); 
    setVehicleData([{ name: model }, ...vehicleData]);
  };


  const removeModel = (model) => {
    const stateData = vehicleData; 
    for(let i = 0; i < stateData.length; i++){ 
      if(stateData[i].name === model && i > -1){
        stateData.splice(i,1);
      }
    }

    setVehicleData([...stateData]); 
  }
    

  //const getVehicleData = async (model) => {
  //  const getdata = await fetch(`http://localhost:3002/model?model=${model}`);
   // let data = await getdata.json(); 
   // return data;
  //};


  const getVehicleData = async (model) => {
    props.getAllVehicles(model)
    console.log('props --->')
    console.log(props)
    return props.vehicle
  }


  return (
    <div className="app_Panel_container">
      <VehicleMenu
        vehicleData={vehicleData}
        vehicleChoice={vehicleChoice}
        getVehicleData={getVehicleData}
        setVehicleContent={setVehicleContent} 
        setVehicleData={setVehicleData}
      />

      {vehicleData.map((ele) => (
        <VehicleConfig removeModel={removeModel} vehicleContent={vehicleContent} selectedVehicle={ele} />
      ))}
    </div>
  );
};

function mapStateToProps(state){
  return {
    error: state.vehiclesReducer.error,
    vehicle: state.vehiclesReducer.vehicle
  }
}

export default connect(mapStateToProps, {getAllVehicles})(VehiclePanel);
