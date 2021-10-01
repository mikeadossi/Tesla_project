import React from "react";
import "./LandingPageCenter.css"; 
import { Link }  from 'react-router-dom';

const LandingPageCenter = () => {
    
    return (
      <div className="landingPageCenter_container"> 
        <div>
             
          <div className="LandingPageCenter_brandname">
            <Link to="/" className="LandingPageCenter_link app_textdecorationNone">
              SIDEKICK
              <span className="headerLeft_brandname_beta"> BETA</span>
            </Link>
          </div> 
            
        </div>
      </div>
    );
  };
  
  
  export default LandingPageCenter;