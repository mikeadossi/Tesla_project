import React from 'react';
import './HeaderMobileMenu.css';
import { Link }  from 'react-router-dom'; 

const HeaderMobileMenu  = ({ 
  closeMobileMenu,
  currentUser,
  handleLogOut,
}) => { 


  return (
    <div className="headerMobileMenu">
        <div
          className="vehicleConfig_close_container"
          onClick={() => closeMobileMenu()} 
        >
          <img
              className="vehicleConfig_close"
              src="../../../../images/Nav/close_2.png"
              alt="close" 
          ></img>
        </div> 
        { currentUser && currentUser.user_email ? (
          <div>
            <Link to="/Settings" onClick={() => closeMobileMenu()} className="headerMobileMenu_links app_textdecorationNone">
              <div className="headerMobileMenu_about headerMobileMenu_login_btn">SETTINGS</div>
            </Link>
          </div>
        ) : (
          ""
        )}
        <Link to="/" onClick={() => closeMobileMenu()} className="headerMobileMenu_links app_textdecorationNone">
          <div className="headerMobileMenu_about headerMobileMenu_login_btn">ABOUT</div>
        </Link> 
        <Link to="/vehicles" onClick={() => closeMobileMenu()} className="headerMobileMenu_links app_textdecorationNone">
          <div className="headerMobileMenu_about headerMobileMenu_login_btn">VEHICLE</div>
        </Link>
        <Link to="/solar" onClick={() => closeMobileMenu()} className="headerMobileMenu_links app_textdecorationNone">
          <div className="headerMobileMenu_about headerMobileMenu_login_btn">SOLAR</div>
        </Link>
        { currentUser && currentUser.user_email ? (
          <div>
            <Link to="/userLogin" onClick={() => closeMobileMenu()} className="headerMobileMenu_links app_textdecorationNone">
              <div className="headerMobileMenu_log_in headerMobileMenu_login_btn" onClick={handleLogOut}>LOG OUT</div> 
            </Link> 
          </div>
        ) : (
          <div>
            <Link to="/userSignup" onClick={() => closeMobileMenu()} className="headerMobileMenu_links app_textdecorationNone">
              <div className="headerMobileMenu_sign_up headerMobileMenu_login_btn">SIGN UP</div>
            </Link>
            <Link to="/userLogin" onClick={() => closeMobileMenu()} className="headerMobileMenu_links app_textdecorationNone">
              <div className="headerMobileMenu_log_in headerMobileMenu_login_btn">LOG IN</div>
            </Link> 
          </div>
        )}
    </div>
  ); 
}

export default HeaderMobileMenu;