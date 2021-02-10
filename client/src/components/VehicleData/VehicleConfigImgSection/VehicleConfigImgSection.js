import React from "react";  

const VehicleConfigImgSection = ({ 
  renderedTesla,
  renderedTeslaImg,
  renderedTeslaImgFolder 
}) => {

  return (
    <div className="vehicleConfig_vehicleImg_container">
        <div>
        <div className="vehicleConfig_image_container">
            <img
            className="vehicleConfig_img"
            src={
                `../../../../images/` +
                renderedTeslaImgFolder +
                `/` +
                renderedTeslaImg +
                `.png`
            }
            alt="model 3 image"
            ></img>
        </div>

        <div className="app_Config_specs_container vehicleConfig_specs_container">
            <div className="app_Config_spec vehicleConfig_range">
            {renderedTesla.miles_range} miles range
            </div>
            <div className="app_Config_spec vehicleConfig_topSpeed">
            {renderedTesla.mph} mph
            </div>
            <div className="app_Config_spec vehicleConfig_mph">
            {renderedTesla.zero_to_sixty_seconds}sec 0-60
            </div>
        </div>
        </div>
    </div>
  );
};

export default VehicleConfigImgSection;