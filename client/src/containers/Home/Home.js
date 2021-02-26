import React, { Component } from 'react';
import './Home.css'; 

class Home extends Component {
  render() {
    return (
      <div className="home_container app_pageHeight"> 
        <h1 className="home_title">SIDEKICK</h1> 
        <div className="home_section">
          <h2>What it is</h2>
          <p>Saidokikku is an efficiency tool that gives users instant access to relevant Tesla product and sales information.</p>
          <p>It is a single page app that puts all your most needed (new car) sales tooling and data within easy reach.</p>
          <p>Other than regional data, all content collected on Sidekick can be found on freely accessible and public facing websites, or are open knowledge.</p>
          <p>Saidokikku does not allow for user entry of customer personal identifiable information, and sales related session data is never stored on a server.</p>
          <p>Sidekick is updated daily, and all information you see is easy to quickly validate, often including a link to the source webpage.</p>
          <p>Suggestions on ways to improve the app are welcome!</p>
        </div> 
        <div className="home_section home_reasons_container">
          <h2>10+ reasons to use!</h2>
          <div className="home_reasons_container">
            <div className="home_reasons app_displayFlex">
              <div className="home_reasons_number">1</div>
              <p>Instant access to relevant location details using any zipcode or areacode, including timezone, county, region and more!</p>
            </div>
            <div className="home_reasons app_displayFlex">
              <div className="home_reasons_number">2</div>
              <p>Instant access to financing, leasing and cash payment information for almost all Tesla products.</p>
            </div>
            <div className="home_reasons app_displayFlex">
              <div className="home_reasons_number">3</div>
              <p>Ease of use and intuitive structure should make for improved productivity.</p>
            </div>
            <div className="home_reasons app_displayFlex">
              <div className="home_reasons_number">4</div>
              <p>Instant access to all vehicle pricing data.</p>
            </div>
            <div className="home_reasons app_displayFlex">
              <div className="home_reasons_number">5</div>
              <p>Instant access to relevant inventory and find us content.</p>
            </div>
            <div className="home_reasons app_displayFlex">
              <div className="home_reasons_number">6</div>
              <p>Instant access to state solar and vehicle incentives.</p>
            </div>
            <div className="home_reasons app_displayFlex">
              <div className="home_reasons_number">7</div>
              <p>Instant access to closest showroom service center and charging location data.</p>
            </div>
            <div className="home_reasons app_displayFlex">
              <div className="home_reasons_number">8</div>
              <p>Powerful charging tool to answer all charging questions.</p>
            </div>
            <div className="home_reasons app_displayFlex">
              <div className="home_reasons_number">9</div>
              <p>Required roof type info and installation details are just a click away.</p>
            </div>
            <div className="home_reasons app_displayFlex">
              <div className="home_reasons_number">10</div>
              <p>Solar Panel pricing for custom systems over 16.32 kW.</p>
            </div>
            <div className="home_reasons app_displayFlex">
              <div className="home_reasons_number">11</div>
              <p>Instantly ascertain perfect Solar system size w/ addition of fututre appliances, vehicles or other energy consuming item.</p>
            </div>
            <div className="home_reasons app_displayFlex">
              <div className="home_reasons_number">12</div>
              <p>Instant access to detailed breakdown of state taxes and fees.</p>
            </div>
            <div className="home_reasons app_displayFlex">
              <div className="home_reasons_number">13</div>
              <p>More coming soon.</p>
            </div>
          </div>

        </div>
        
      </div>
    );
  }
}

export default Home;