import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home_container app_pageHeight"> 
      <h1 className="home_title">SIDEKICK</h1> 

      <div className="home_hero_super">
        <div className="home_hero_container app_displayFlex">
          <div className="home_hero_text_container">
            <div className="home_hero_text">
              <div className="home_hero_heading">The <span className="home_underline">All-In-One</span> Tool for making your next Tesla Buying Decision.</div>
              <div className="home_small_print">Sidekick is a fan site and not affiliated with Tesla</div>
            </div>
          </div>
          <div className="home_hero_img_container">
            <img className="home_img" src="../../../../images/app_art/hero_image.jpg" />
          </div>
        </div>
      </div>

      <div className="home_feature_super">
        <div className="home_hero_container app_displayFlex">
          <div className="home_hero_img_container">
            <img className="home_feature_img" src="../../../../images/app_art/swiss_army.png"/>
          </div>
          <div className="home_hero_text_container">
            <div className="home_hero_text">Streamlined user experience provides easy access to everything you need to know to make a buying decision</div>
          </div>
        </div>
      </div>


      <div className="home_feature_super">
        <div className="home_hero_container app_displayFlex">
          <div className="home_hero_img_container home_hero_img_container2">
            <img className="home_feature_img" src="../../../../images/app_art/sun_panel.png"/>
          </div>
          <div className="home_hero_text_container">
            <div className="home_hero_text">Finding the ideal Tesla solar panel size has never been easier, really!</div>
          </div>
        </div>
      </div>


      <div className="home_feature_super">
        <div className="home_hero_container app_displayFlex">
          <div className="home_hero_img_container home_hero_img_container3">
          <img className="home_feature_img" src="../../../../images/app_art/news.png"/>
          </div>
          <div className="home_hero_text_container">
            <div className="home_hero_text">Keep up with major Tesla production and pricing news by becoming a member today</div>
          </div>
        </div>
      </div>
      
      <div className="home_subtext_container">
        <div className="home_section">
          <h2 className="home_subheading">Get Exploring!</h2>
          <p className="home_subtext">Start using the app now by selecting between Vehicle or Solar just above.</p> 
        </div> 
        <div className="home_section home_reasons_container">
          <h2 className="home_subheading">Questions or comments?</h2>
          <p className="home_subtext"> Email: 
            <span className="home_email">
              tesla_sidekick@yahoo.com
            </span>
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default Home;