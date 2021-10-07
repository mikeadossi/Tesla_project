import React from 'react';
import './HeaderLeft.css';
import { Link }  from 'react-router-dom';


const HeaderLeft = ({ currentUser }) => {

  let currentUserEmail;

  if(currentUser){ currentUserEmail = currentUser["user_email"] }

  return (
    <div className="headerLeft app_marginTop">
        <i className="fas fa-bars headerRight_hamburger" aria-hidden="true"></i> 
        <Link to="/" className="headerLeft_link">
          <div className="headerLeft_brandname header_logo">
            SIDEKICK 
            <span className="headerLeft_brandname_beta">
              BETA {currentUserEmail}
            </span>
          </div>
        </Link> 
    </div>
  );
}

export default HeaderLeft;