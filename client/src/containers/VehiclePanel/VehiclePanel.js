import React, { Component, useState } from "react";
import { createStore } from 'redux'; 
import "./VehiclePanel.css";
import VehicleMenu from "../../components/VehicleData/VehicleMenu/VehicleMenu";
import VehicleConfig from "../../components/VehicleData/VehicleConfig/VehicleConfig";

const VehiclePanel = () => {
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
    

  const getVehicleData = async (model) => {
    const getdata = await fetch(`http://localhost:3002/model?model=${model}`);
    let data = await getdata.json(); 
    return data;
  };


  return (
    <div className="app_Panel_container">
      <VehicleMenu
        vehicleData={vehicleData}
        vehicleChoice={vehicleChoice}
        getVehicleData={getVehicleData}
        setVehicleContent={setVehicleContent}
      />

      {vehicleData.map((ele) => (
        <VehicleConfig removeModel={removeModel} vehicleContent={vehicleContent} selectedVehicle={ele} />
      ))}
    </div>
  );
};

export default VehiclePanel;
