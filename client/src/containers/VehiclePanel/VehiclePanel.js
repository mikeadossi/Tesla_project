import React, { Component, useState } from "react";
import "./VehiclePanel.css";
import VehicleMenu from "../../components/VehicleData/VehicleMenu/VehicleMenu";
import VehicleConfig from "../../components/VehicleData/VehicleConfig/VehicleConfig";

const VehiclePanel = () => {
  const [vehicleData, setVehicleData] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [vehicleContent, setVehicleContent] = useState({});

  // console.log('vehicleContent.standard["miles_range"] - ',vehicleContent.standard.['miles_range']);
  // console.log('vehicleContent.standard["miles_range"].json() - ',vehicleContent['standard']["miles_range"].json());
  // console.log('vehicleContent - ',vehicleContent);

  const vehicleChoice = (model) => {
    setVisibility(true);
    setVehicleData([{ name: model }, ...vehicleData]);
  };

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
        <VehicleConfig vehicleContent={vehicleContent} selectedVehicle={ele} />
      ))}
    </div>
  );
};

export default VehiclePanel;
