import React from "react";
import "./NotificationDropdown.css";

const NotificationDropdown = ({
  viewedNotifications,
  currentUser,
}) => {

  const newNotificationsArr = viewedNotifications["notSeenNotifications"];
  const oldNotificationsArr = viewedNotifications["alreadySeenNotifications"];

  const getDay = (daysNum) => {
    if(daysNum === 0){
      return "last viewed today";
    } else if(daysNum === 1){
      return "1 day ago";
    } else if(daysNum > 0 && daysNum < 7){
      return daysNum+" days ago";
    } else if(daysNum > 6 && daysNum < 14){
      return "1 week ago";
    } else if(daysNum > 13 && daysNum < 30){
      var weeks = daysNum/7
      weeks = Math.floor(weeks);
      return weeks+" week ago";
    } else if(daysNum >= 30){
      var months = daysNum/31
      months = Math.floor(months);
      return months+" months ago";
    }
  };

  const returningUser = () => { 
    if(currentUser && currentUser["viewed_welcome_notification"] === "true"){
      return {"background-color":"grey"};
    } else {
      return {"background-color":"lightgreen"};
    };
  }

  const notificationColor = returningUser();


  return (
    <div className="notification_dd_container">
      <div className="notification_dd_header">NOTIFICATIONS</div>
      <div className="notification_scroller"> 
        {newNotificationsArr.map((content,indx) => {
          let day = content["daysSince"];
          return(
            <div key={indx} className="new_notifications">
              <div className="notification">
                <div className="notifcation_seen_container">
                  <div className="notification_seen notification_new"></div>
                </div>
                <div className="">
                  <span className="notification_text">
                    {content.text_content}
                  </span>
                  <span>
                    <a href={content.link.split('')[1]} className="notification_link">
                      {content.link.split('')[0]}
                    </a>
                  </span>
                  <div className="notification_days">{getDay(day)}</div>
                </div>
              </div>
            </div>
          )
        })}
        {oldNotificationsArr.map((content,indx) => {
          let day = content["daysSince"];
          return(
            <div key={indx} className="new_notifications">
              <div className="notification">
                <div className="notifcation_seen_container">
                  <div className="notification_seen notification_old"></div>
                </div>
                <div className="">
                  <span className="notification_text">
                    {content.text_content}
                  </span>
                  <span>
                    <a href={content.link.split('')[1]} className="notification_link">
                      {content.link.split('')[0]}
                    </a>
                  </span>
                  <div className="notification_days">{getDay(day)}</div>
                </div>
              </div>
            </div>
          )
        })}

        <div className="notification">
          <div className="notifcation_seen_container">
            <div className="notification_seen" style={notificationColor}></div>
          </div>
          <div className="">
            <span className="notification_text">
              Note: you can enable and disable notification alerts by visiting
              settings.
            </span>
            <span>
              <a href="" className="notification_link"></a>
            </span>
            <div className="notification_days">1 day ago</div>
          </div>
        </div>

        <div className="notification">
          <div className="notifcation_seen_container">
            <div className="notification_seen" style={notificationColor}></div>
          </div>
          <div className="">
            <span className="notification_text">
              Welcome to SIDEKICK! You'll be alerted to all website updates here
              as well as major public changes at Tesla such as price
              fluctuations with products, special deals, or new happenings.
            </span>
            <span>
              <a href="" className="notification_link"></a>
            </span>
            <div className="notification_days">1 day ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationDropdown;
