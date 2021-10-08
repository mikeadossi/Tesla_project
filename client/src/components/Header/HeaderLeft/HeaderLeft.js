import React from 'react';
import './HeaderLeft.css';
import { Link }  from 'react-router-dom';


const HeaderLeft = ({ currentUser }) => {

  let currentUserEmail;

  if(currentUser){ 
    currentUserEmail = currentUser["user_email"];
    currentUserEmail = currentUserEmail.split("@")[0];
    currentUserEmail = currentUserEmail.charAt(0).toUpperCase() + currentUserEmail.slice(1);
    currentUserEmail = "Welcome "+currentUserEmail+"!"
  }

  return (
    <div className="headerLeft app_marginTop">
        <i className="fas fa-bars headerRight_hamburger" aria-hidden="true"></i> 
        <Link to="/" className="headerLeft_link">
          <div className="headerLeft_brandname header_logo">
            SIDEKICK 
            <span className="headerLeft_brandname_beta">
              BETA <span className="headerLeft_usersName">{currentUserEmail}</span>
            </span>
          </div>
        </Link> 
    </div>
  );
}

export default HeaderLeft;