import React from 'react';
import './HeaderCookiePermission.css'; 
import Cookies from 'universal-cookie';

const HeaderCookiePermission = ({ showCookieAsk, setShowCookieAsk }) => {
  const cookies = new Cookies();

  const installCookie = (bool) => { 
    if(bool){
      cookies.set('hideResetWarning', "false", { path: '/' });
      cookies.set('hideApplyAllWarning', "false", { path: '/' });
      cookies.set('doNotSetCookie', "false", { path: '/' });
      
      setShowCookieAsk("false");
    } else {
      cookies.set('doNotSetCookie', "true", { path: '/' });
      setShowCookieAsk("false");
    };
  };


  return (
    <div>
      {showCookieAsk === "true" ? (
        <div className="headerCookiePermission_container app_inlineFlex">
            <div>
              <span className="headerCookiePermission_text">This site uses cookies to help deliver a better experience.</span> 
              <button 
                className="headerCookiePermission_btn app_submit_btn app_noSelect app_removeBlue"
                onClick={() => installCookie(true)}
              >
                Accept
              </button>
              <button 
                className="headerCookiePermission_btn app_anti_submit_btn app_noSelect app_removeBlue"
                onClick={() => installCookie(false)}
              >
                Close
              </button>
            </div>
        </div>
      ) : ""}
    </div>
  );

};

export default HeaderCookiePermission;