import React, { Component, useState } from "react"; 
import "./VehiclePanel.css";
import VehicleMenu from "../../components/VehicleData/VehicleMenu/VehicleMenu";
import VehicleConfig from "../../components/VehicleData/VehicleConfig/VehicleConfig";

const VehiclePanel = () => {
  const [vehicleData, setVehicleData] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [vehicleContent, setVehicleContent] = useState({});

  const vehicleChoice = (model) => {
    setVisibility(true);
    const thisData = [{ name: model }, ...vehicleData];
    setVehicleData(thisData);
    // setVehicleData([{ name: model }, ...vehicleData]);
  };

  const removeModel = (model) => {
    const stateData = vehicleData;
    console.log('model: ',model)
    console.log('stateData 1 ---> ',stateData)
    for(let i = 0; i < stateData.length; i++){
      console.log('i: ',i);
      console.log('i.name: ',stateData[i].name);
      if(stateData[i].name === model){
        stateData.splice(0,1);
      }
    }

    setVehicleData(stateData);
    console.log('stateData 2 ---> ',stateData)
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
