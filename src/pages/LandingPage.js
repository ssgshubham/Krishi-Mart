import React from "react";
import {useHistory} from 'react-router-dom';

const LandingPage = (props) => {

  let history = useHistory();
  function clickMe() {  
    history.push("./Cart");
  }
  function clickMe1() {  
    history.push("./Checkout");
  }
  function clickMe2() {  
    history.push("./Cart");
  }

  return (
    <div className="row heroSection">
      <div className="col-sm-6">
        <h3 id="highlight" className="heroTitle">
          Farmer's Tool
        </h3>
        <div id="info">
          <p className="heroText">
            Helping Farmers to grow and yield more frutile crops!
          </p>
          <button className="customBtnSecondary" onClick={clickMe}>
            Recommendor and Detector
          </button>
          <br />
          <br />
          <button className="customBtnSecondary" onClick={clickMe1}>
            Policies and Schemes
          </button>
          <br />
          <br />
          <button className="customBtnSecondary" onClick={clickMe2}>
            About Us and FAQs
          </button>
        </div>
      </div>
      <div className="col-sm-6">
        <img
          className="heroImg"
          src="./images/farmerlandingpage.svg"
          alt="Farmer with a hen in his hand, smiling."
        />
      </div>
    </div>
  );
};

export default LandingPage;
