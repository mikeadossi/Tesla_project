import React from "react";
import "./NotificationDropdown.css";

const NotificationDropdown = () => {
  return (
    <div className="notification_dd_container">
      <div className="notification_dd_header">NOTIFICATIONS</div>
      <div className="notification_scroller">
        <div className="notification">
          <div className="notifcation_seen_container"><div className="notification_seen notification_new"></div></div>
          <div className="">
            <span className="notification_text">
                Welcome! This Notification page will alert you of updates regarding
                different Tesla products, relevant company news and site updates!
            </span>
            <span><a href="/" className="notification_link">weblink</a></span>
            <div className="notification_days">1 day ago</div>
          </div>
        </div>
        <div className="notification">
          <div className="notifcation_seen_container"><div className="notification_seen notification_new"></div></div>
          <div className="">
            <span className="notification_text">
                Welcome! This Notification page will alert you of updates regarding
                different Tesla products, relevant company news and site updates!
            </span>
            <span><a href="/" className="notification_link">weblink</a></span>
            <div className="notification_days">1 day ago</div>
          </div>
        </div>
        <div className="notification">
          <div className="notifcation_seen_container"><div className="notification_seen notification_old"></div></div>
          <div className="">
            <span className="notification_text">
                Welcome! This Notification page will alert you of updates regarding
                different Tesla products, relevant company news and site updates!
            </span>
            <span><a href="/" className="notification_link">weblink</a></span>
            <div className="notification_days">1 day ago</div>
          </div>
        </div>
        <div className="notification">
          <div className="notifcation_seen_container"><div className="notification_seen notification_old"></div></div>
          <div className="">
            <span className="notification_text">
                Welcome! This Notification page will alert you of updates regarding
                different Tesla products, relevant company news and site updates!
            </span>
            <span><a href="/" className="notification_link">weblink</a></span>
            <div className="notification_days">1 day ago</div>
          </div>
        </div>
        <div className="notification">
          <div className="notifcation_seen_container"><div className="notification_seen notification_old"></div></div>
          <div className="">
            <span className="notification_text">
                Welcome! This Notification page will alert you of updates regarding
                different Tesla products, relevant company news and site updates!
            </span>
            <span><a href="/" className="notification_link">weblink</a></span>
            <div className="notification_days">1 day ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationDropdown;
