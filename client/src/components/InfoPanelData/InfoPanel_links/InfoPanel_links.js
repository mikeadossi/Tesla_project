import React, { Component } from 'react';
import './InfoPanel_links.css';

class InfoPanel_links extends Component {
  render() {
    return (
      <div className="InfoPanel_links_container">
        <div className="content_vehicle">
          <div className="infoPanel_links_div"><a className="infoPanel_links app_textdecorationNone" href="https://www.tesla.com/inventory/new/m3?arrangeby=relevance&zip=90210&range=200" target="_blank">New Inventory (w/ zipcode)</a></div>
          <div className="infoPanel_links_div"><a className="infoPanel_links app_textdecorationNone" href="https://www.tesla.com/findus?search=90210%2C%20USA&bounds=34.151956579194035%2C-118.30060511874998%2C34.05402148312065%2C-118.52033168124998&zoom=13&filters=store%2Cservice%2Csupercharger%2Cdestination%20charger" target="_blank">Tesla Find Us (w/ zipcode)</a></div>
          <div className="infoPanel_links_div"><a className="infoPanel_links app_textdecorationNone" href="https://www.plugshare.com" target="_blank">Plug Share</a></div>
          <div className="infoPanel_links_div"><a className="infoPanel_links app_textdecorationNone" href="https://chargehub.com/en/charging-stations-map.html" target="_blank">Chargehub</a></div>
          <div className="infoPanel_links_div"><a className="infoPanel_links app_textdecorationNone" href="https://www.kbb.com/whats-my-car-worth/" target="_blank">Kelley Blue Book</a></div>
          <div className="infoPanel_links_div"><a className="infoPanel_links app_textdecorationNone" href="https://www.tesla.com/support/mobile-service" target="_blank">Tesla Mobile Service</a></div>
          <div className="infoPanel_links_div"><a className="infoPanel_links app_textdecorationNone" href="https://www.tesla.com/insurance" target="_blank">Tesla Insurance</a></div>
          <div className="infoPanel_links_div"><a className="infoPanel_links app_textdecorationNone" href="https://www.tesla.com/sites/default/files/model_3_owners_manual_north_america_en.pdf" target="_blank">Model 3 Owners Manual</a></div>
          <div className="infoPanel_links_div"><a className="infoPanel_links app_textdecorationNone" href="https://www.tesla.com/sites/default/files/model_s_owners_manual_north_america_en_us.pdf" target="_blank">Model S Owners Manual</a></div>
          <div className="infoPanel_links_div"><a className="infoPanel_links app_textdecorationNone" href="https://www.tesla.com/sites/default/files/model_x_owners_manual_north_america_en.pdf" target="_blank">Model X Owners Manual</a></div>
          <div className="infoPanel_links_div"><a className="infoPanel_links app_textdecorationNone" href="https://www.tesla.com/sites/default/files/model_y_owners_manual_north_america_en.pdf" target="_blank">Model Y Owners Manual</a></div>
        </div>
        <div className="content_solar">
          <div className="infoPanel_links_div"><a className="infoPanel_links app_textdecorationNone" href="https://www.tesla.com/support/energy/solar-panels/learn/solar-price-match-guarantee" target="_blank">Price Match Guarantee</a></div>
          <div className="infoPanel_links_div"><a className="infoPanel_links app_textdecorationNone" href="https://www.tesla.com/support/energy/solar-panels/learn/subscription-solar" target="_blank">Solar Subscription</a></div>
          <div className="infoPanel_links_div"><a className="infoPanel_links app_textdecorationNone" href="https://www.tesla.com/support/energy/powerwall/mobile-app/mobile-app-overview" target="_blank">Mobile App Overview</a></div>
          <div className="infoPanel_links_div"><a className="infoPanel_links app_textdecorationNone" href="https://www.tesla.com/support/energy/solar-panels/learn/tesla-solar" target="_blank">Why Tesla Solar Panels</a></div>
          <div className="infoPanel_links_div"><a className="infoPanel_links app_textdecorationNone" href="https://www.tesla.com/support/energy/solar-roof/learn/overview" target="_blank">Solar Roof Overview</a></div>
          <div className="infoPanel_links_div"><a className="infoPanel_links app_textdecorationNone" href="https://www.tesla.com/support/energy/powerwall/learn/incentives" target="_blank">Energy Incentives</a></div>
        </div>
      </div> 
    );
  }
}

export default InfoPanel_links;