import React from "react";
import {useHistory} from 'react-router-dom';

const ProductDetails = () => {


  let history = useHistory();
  function clickMe() {  
    history.push("./Cart");
  }
  function clickMe1() {  
    history.push("../Components/elements/Home/Consumer/PS");
  }
  function clickMe2() {  
    history.push("../Components/elements/Home/Consumer/AF");
  }

  return (
    <section className="mt-4">
      <div className="row heroSection">
      <div className="col-sm-6">
        <h4 id="highlight" className="heroText">
        Recommendor and Detector
        </h4>
        <br />
        <br />
        <div id="info">
          <button className="customBtnSecondary" onClick={clickMe}>
            Check Weather
          </button>
          <br />
          <br />
          <button className="customBtnSecondary" onClick={clickMe1}>
            Crop Recommendation
          </button>
          <br />
          <br />
          <button className="customBtnSecondary" onClick={clickMe2}>
            Fertilizer Recommendation
          </button>
          <br />
          <br />
          <button className="customBtnSecondary" onClick={clickMe2}>
            Diseases Detection
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
    </section>

    
  );
};

export default ProductDetails;
