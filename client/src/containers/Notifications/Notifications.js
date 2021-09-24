import React, { useEffect } from "react";
import "./Notifications.css";
import { useHistory } from "react-router-dom";

const Notifications = ({ currentUser, setCurrentUser }) => {
  const history = useHistory();

  useEffect(() => {
    if (!currentUser) {
      history.push("/lost");
    }
  }, [currentUser]);

  useEffect(() => {
    return () => {
      setCurrentUser({
        ...currentUser,
        notifications_last_viewed_on: new Date(),
      });
      console.log('last viewed notifications:--- ',currentUser["notifications_last_viewed_on"])
    };
  }, []);


  return (
    <div className="notifications_container app_pageHeight">
      <h1 className="notifications_title">NOTIFICATIONS</h1>
      <div className="notifications_content_container">
        <div className="notifications_content_new">
          <div className="notitifcation_date_new">3/30/21</div>
          <div className="notifications_text">
            Note: you can enable and disable notification alerts by visiting
            settings - click the top right hamburger menu.
          </div>
        </div>
        <div className="notifications_content_new">
          <div className="notitifcation_date_new">3/30/21</div>
          <div className="notifications_text">
            Welcome! This Notification page will alert you of updates regarding
            different Tesla products, relevant company news and site updates!
          </div>
        </div>
      </div>
      <div className="past_notifications">
        <div className="notifications_content">
          <div className="notitifcation_date">8/25/20</div>
          <div className="notifications_text">
            New version of Tesla Mobile App leaked to public -
            <a
              href="https://electrek.co/2021/08/25/tesla-releases-new-mobile-app-ui-refresh-tons-features/"
              target="_blank"
              className="app_textdecorationNone app_options_btn app_padding_left"
            >
              electrek
            </a>
          </div>
        </div>
        <div className="notifications_content">
          <div className="notitifcation_date">8/30/20</div>
          <div className="notifications_text">
            New software update to improve Model S suspension, Autopark -
            <a
              href="https://electrek.co/2021/08/30/tesla-pushes-new-software-update-to-improve-model-s-suspension-autopark/"
              target="_blank"
              className="app_textdecorationNone app_options_btn app_padding_left"
            >
              electrek
            </a>
          </div>
        </div>
        <div className="notifications_content">
          <div className="notitifcation_date">1/13/21</div>
          <div className="notifications_text">
            Model Y Achieves 5-Star Overall Safety Rating from NHTSA -
            <a
              href="https://www.tesla.com/blog/model-y-achieves-5-star-overall-safety-rating-nhtsa"
              target="_blank"
              className="app_textdecorationNone app_options_btn app_padding_left"
            >
              Tesla Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
