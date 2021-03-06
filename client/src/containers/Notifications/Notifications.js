import React from "react";
import "./Notifications.css";
import { Link } from "react-router-dom";

const Notifications = () => { 
    return <div className="notifications_container app_pageHeight">
        <h1 className="notifications_title">NOTIFICATIONS</h1>
        <div className="notifications_content_container">
            <div className="notifications_content">
                <div className="notitifcation_date">Mar. 30, 2021</div>
                <div className="notifications_text">listen EADDRINUSE: address already in use 0.0.0.0:3002</div>
            </div>
            <div className="notifications_content">
                <div className="notitifcation_date">Mar. 30, 2021</div>
                <div className="notifications_text">listen EADDRINUSE: address already in use 0.0.0.0:3002</div>
            </div>
            <div className="notifications_content">
                <div className="notitifcation_date">Mar. 30, 2021</div>
                <div className="notifications_text">listen EADDRINUSE: address already in use 0.0.0.0:3002</div>
            </div>
        </div>
        <div className="more_notifications">
            <div className="open_notifications">...</div>
        </div>
        <div className="past_notifications">
            <div className="notifications_content">
                <div className="notitifcation_date">Mar. 30, 2021</div>
                <div className="notifications_text">listen EADDRINUSE: address already in use 0.0.0.0:3002</div>
            </div>
            <div className="notifications_content">
                <div className="notitifcation_date">Mar. 30, 2021</div>
                <div className="notifications_text">listen EADDRINUSE: address already in use 0.0.0.0:3002</div>
            </div>
        </div>
    </div>
}

export default Notifications;
