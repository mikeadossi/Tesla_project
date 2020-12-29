import React, { Component } from 'react';
import './Footer.css'; 
import { Link }  from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer_container">
          <span className="footer_text footer_email">xxxx@email.com - </span>
          <span className="footer_text footer_contact">Contact</span>
          <span>
            <Link to="/" className="footer_text app_textdecorationNone">About</Link>
            <Link to="/vehicles" className="footer_text app_textdecorationNone">Vehicle</Link>
            <Link to="/solar" className="footer_text app_textdecorationNone">Solar</Link>
          </span> 
          <span className="footer_text footer_project">© 2020 Sidekick</span>
        </div> 
      </div>
    );
  }
}

export default Footer;