import React, { Component } from 'react';
import './HeaderCookiePermission.css'; 

class HeaderCookiePermission extends Component {
  render() {
    return (
      <div className="headerCookiePermission_container app_inlineFlex">
          <div>
            <span className="headerCookiePermission_text">This site uses cookies to help deliver a better experience.</span> 
            <button className="headerCookiePermission_btn app_submit_btn app_noSelect app_removeBlue">OK</button>
          </div>
      </div>
    );
  }
}

export default HeaderCookiePermission;