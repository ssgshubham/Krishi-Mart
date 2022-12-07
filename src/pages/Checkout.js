import React from "react";

const Checkout = () => {
  

  return (
    <section className="mt-4">
      <div className="row heroSection">
      <div className="col-sm-6">
        <h2 id="highlight" className="heroText">
        Policies and Schemes
        </h2>
        <br />
        <br />
        
        <h4>Insurance Schemes </h4>
        <div class="card ">
            <div class="card-body">
                <h5 class="card-title">Pradhan Mantri Fasal Bima Yojana (PMFBY)</h5>
                <p class="card-text">Provides comprehensive insurance cover against failure of the crop thus helping in stabilising the income of the farmers.</p>
                <a href="{% url 'insurance_1' %}">Read More <i class="arrow right"></i><i class="arrow right"></i></a>
            </div>
        </div>
        <br></br>
        <div class="card ">
            <div class="card-body">
                <h5 class="card-title">Prime Minister Jeevan Jyoti Bima Yojana</h5>
                <p class="card-text">Life Insurance scheme with risk coverage of Rs. 2 Lakh in case of death of the insured, due to any reason.</p>
                <a href="{% url 'insurance_2' %}">Read More <i class="arrow right"></i><i class="arrow right"></i></a>
            </div>
        </div>
       <br></br>
       <h4>Financial Support Schemes</h4>
                <div class="card ">
                    <div class="card-body">
                        <h5 class="card-title">PM-Kisan Samman Nidhi Yojana</h5>
                        <p class="card-text">Farmers with less than two hectares of landholding will get up to Rs. 6,000 per year as a minimum income support.</p>
                        <a href="{% url 'finance_1' %}">Read More <i class="arrow right"></i><i class="arrow right"></i></a>
                    </div>
                </div>
               <br></br>
               <div class="card ">
                    <div class="card-body">
                        <h5 class="card-title">Neem Coated Urea Scheme </h5>
                        <p class="card-text">To boost the growth of wheat and paddy, and reduce the black marketeering and hoarding or urea.</p>
                        <a href="{% url 'crop_6' %}">Read More <i class="arrow right"></i><i class="arrow right"></i></a>
                    </div>
                </div>
                <br></br>

      </div>
      <div className="col-sm-6">
        <img
          className="heroImg"
          src="./images/farmerlandingpage.svg"
          alt="Farmer with a hen in his hand, smiling."
        />
      </div>
    </div>

    <br>
    </br>
    <br>
    </br>

    <div class="msp-content">
            <h2 class="c" >Minimum Support Prices (MSPs)</h2> 
            <p>MSP is the guaranteed ‘minimum floor price’ that farmer must get from the government in case the market price of the crops falls below the MSP.
            <br></br>
            <span>*Projected Crop:</span> Avg amount of money required to produce one quintal of a given crop.
            </p>
           
            <h3 class="c" >for Kharif Marketing Season (KMS) 2020-21</h3>
            <table class="table table-bordered table-hover tab">
                
                <thead>
                    <tr class="table" >
                        <th scope="col" class="t-c">Crops</th>
                        <th scope="col" class="c">Projected Cost KMS 2020-21 (Rs/q)</th>
                        <th scope="col" class="c">MSP (Rs/q)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Paddy (Common)</th>
                           <td class="c">1,245</td>
                           <td class="c">1,868</td>
                    </tr>
                    <tr>
                        <th scope="row">Paddy (Grade A)</th>
                           <td class="c">   -   </td>
                           <td class="c">1,888</td>
                    </tr>
                    <tr>
                        <th scope="row">Jowar (Hybrid)</th>
                           <td class="c">1,746</td>
                           <td class="c">2,620</td>
                    </tr>
                    <tr>
                        <th scope="row">Jowar (Maldandi)</th>
                           <td class="c"> - </td>
                           <td class="c">2,640</td>
                    </tr>
                    <tr>
                        <th scope="row">Bajra</th>
                           <td class="c">1,175</td>
                           <td class="c">2,150</td>
                    </tr>
                    <tr>
                        <th scope="row">Ragi</th>
                           <td class="c">2,194</td>
                           <td class="c">3,295</td>
                    </tr>
                    <tr>
                        <th scope="row">Maize</th>
                           <td class="c">1,213</td>
                           <td class="c">1,850</td>
                    </tr>
                    <tr>
                        <th scope="row">Tur (Arhar)</th>
                           <td class="c">3,796</td>
                           <td class="c">6,000</td>
                    </tr>
                    <tr>
                        <th scope="row">Moong</th>
                           <td class="c">4,797</td>
                           <td class="c">7,196</td>
                    </tr>
                    <tr>
                        <th scope="row">Urad</th>
                           <td class="c">3,660</td>
                           <td class="c">6,000</td>
                    </tr>
                    <tr>
                        <th scope="row">Groundnut</th>
                           <td class="c">3,515</td>
                           <td class="c">5,275</td>
                    </tr>
                    <tr>
                        <th scope="row">Sunflower Seed</th>
                           <td class="c">3,921</td>
                           <td class="c">5,885</td>
                    </tr>
                    <tr>
                        <th scope="row">Soybean (yellow)</th>
                           <td class="c">2,587</td>
                           <td class="c">3,880</td>
                    </tr>
                    <tr>
                        <th scope="row">Sesamum</th>
                           <td class="c">4,570</td>
                           <td class="c">6,855</td>
                    </tr>
                    <tr>
                        <th scope="row">Nigerseed</th>
                           <td class="c">4,462</td>
                           <td class="c">6,695</td>
                    </tr>
                    <tr>
                        <th scope="row">Cotton (Medium Staple)</th>
                           <td class="c">3,676</td>
                           <td class="c">5,515</td>
                    </tr>
                    <tr>
                        <th scope="row">Cotton (Long Staple)</th>
                           <td class="c"> - </td>
                           <td class="c">5,825</td>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <h3 class="c" >for Rabi Marketing Season (RMS) 2020-21</h3>
            <table class="table table-bordered table-hover tab">
                
                <thead>
                    <tr class="table">
                        <th scope="col" >Crops</th>
                        <th scope="col" class="c">Projected Cost RMS 2020-21 (Rs/q)</th>
                        <th scope="col" class="c">MSP (Rs/q)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Wheat</th>
                           <td class="c">923</td>
                           <td class="c">1,925</td>
                    </tr>
                    <tr>
                        <th scope="row">Barley</th>
                           <td class="c">919</td>
                           <td class="c">1,525</td>
                    </tr>
                    <tr>
                        <th scope="row">Gram</th>
                           <td class="c">2,801</td>
                           <td class="c">4,875</td>
                    </tr>
                    <tr>
                        <th scope="row">Lentil</th>
                           <td class="c">2,727</td>
                           <td class="c">4,800</td>
                    </tr>
                    <tr>
                        <th scope="row">Rapeseed & Mustard</th>
                           <td class="c">2,323</td>
                           <td class="c">4,425</td>
                    </tr>
                    <tr>
                        <th scope="row">Safflower</th>
                           <td class="c">3,470</td>
                           <td class="c">5,215</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br>
    </br>
    <br>
    </br>

    <div class="LoanCalculator">
        <div class="container">

            <h2><i class="fa fa-calculator" aria-hidden="true"></i>Loan Calculator</h2>

            <div class="content-section">
                <div class="content-section pb-5 row">
                    <div id="form" class="center">
                        <div id="form-src">
                            <form name="loan_form">
                                <table class="form-group">
                                    <tr>
                                        <td><label>Loan Amount:</label></td>
                                        <td><input class="form-control" type="text" name="loan_amt" size="10"></input></td>
                                    </tr>

                                    <tr>
                                        <td><label>Number of months:</label></td>
                                        <td><input class="form-control" type="text" name="months" size="10"></input></td>
                                    </tr>

                                    <tr>
                                        <td><label>Annual Interest Rate (in %):<br></br><span>(Example: 4.5% = 4.5)</span></label></td>
                                        <td><input class="form-control" type="text" name="rate" size="10"></input></td>
                                    </tr>

                                    <tr>
                                        <td><label>Extra Monthly Payment:</label></td>
                                        <td><input class="form-control" type="text" name="extra" size="10" value="0"></input></td>
                                    </tr>

                                    <tr>
                                        <td class="pt-3"><input class="btn btn-outline-primary" type="button" onclick="validate()" value="Calculate"/></td>
                                        <td class="pt-3"><input class="btn btn-outline-primary" type="button" onclick="startOver()" value="Start Over"></input></td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                    </div>
                    <div id="loan-details">
                        <div class="content-section" id="loan-info">
                        </div>
                    </div>
                </div>

                <div class="content-section" id="info-table">
                    <div id="table-header">
                            <table class="table table-responsive-sm">
                                <tr>
                                    <td>Payment<br></br>No.</td>
                                    <td>Payment</td>
                                    <td>Principle</td>
                                    <td>Interest</td>
                                    <td>Interest Paid</td>
                                    <td>Balance</td>
                                </tr>
                            </table>
                         </div>
                         <div id="table">
                         </div>
                    </div>
                </div>
            </div>
        </div> 
     
     <br></br>
     <br></br>

     <h3>Videos for Help</h3>
     <br></br>
     <iframe width="420" height="315" src="https://www.youtube.com/embed/7kFXdQACKlM">
     </iframe>&nbsp; &nbsp;    

     <iframe width="420" height="315" src="https://www.youtube.com/embed/qkqtcXuogu4">
     </iframe>&nbsp;&nbsp;

     <br></br>
     <br></br> 

    </section>

    
  );
};

export default Checkout;