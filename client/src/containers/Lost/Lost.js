import React from "react";
import "./Lost.css";


const Lost = () => {
    return (
        <div className="lost_container app_pageHeight"> 
            <div className="lost_elements">
                <div className="home_hero_img_container">
                    <img className="lost_img" src="../../../../images/app_art/lost.png" />
                </div> 
                <div className="404_text">
                    <div className="lost_404">404 Error</div>
                    <div className="lost_text">Nothing to see here</div>
                </div>
            </div> 
        </div>
    )
}

export default Lost;