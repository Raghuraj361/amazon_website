import React from "react";
import "./Footer.css";
import Logo from "./logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  console.log(year);
  const top = () => {
    window.scrollTo(0, 0);
    console.log("clicked");
  };
  return (
    <footer>
            <div className='back__button' onClick={top}>Back to top</div>
            <div className="footer_container">
                <div className="footr_details_one">
                    <h4>Get to Know US</h4>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>Press Releases</p>
                    <p>Amazon Science</p>
                </div>
                <div className="footr_details_one">
                    <h4>Connect with Us</h4>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className="footr_details_one forres">
                    <h4>Make Money with Us</h4>
                    <p>Sell on Amazon</p>
                    <p>Sell under Amazon Accelerator</p>
                    <p>Protect and Build Your Brand</p>
                    <p>Amazon Global Selling</p>
                    <p>Become an Affiliate</p>
                    <p>Fulfilment by Amazon</p>
                    <p>Advertise Your Products</p>
                    <p>Amazon Pay on Merchants</p>
                </div>
                <div className="footr_details_one forres">
                    <h4>Let Us Help You</h4>
                    <p>COVID-19 and Amazon</p>
                    <p>Your Account</p>
                    <p>Returns Centre</p>
                    <p>100% Purchase Protection</p>
                    <p>Amazon App Download</p>
                    <p>Amazon Assistant Download</p>
                    <p>Help</p>
                </div>
            </div>
            
            <div className="lastdetails">
                <img src={Logo} alt="logo" />
                <p>Australia | Brazil | Canada | China | France | Germany | Italy | Japan | Mexico | Netherlands | Poland | Singapore | Spain | Turkey | United Arab Emirates | United Kingdom | United States
                </p>
            </div>

            <div className='last__footer'>
             <div className='condion__footer'>
                <div>
                    <h6>AbeBooks</h6>
                    <p className='paragraph'>
                    Books, art<br/>
                    & collectibles
                    </p>
                </div>
                <div>
                    <h6>Amazon Web Services</h6>
                    <p className='paragraph'>Scalable Cloud<br/>
                      Computing Services
                    </p>
                </div>
                <div>
                    <h6>Audible</h6>
                    <p className='paragraph'>
                        Download<br/>
                         Audio Books
                     </p>
                </div>
                <div>
                    <h5>DPReview</h5> 
                    <p className='paragraph'>
                    Digital<br/>
                    Photography
                    </p>
                </div>
             </div>
                <p className='bottom__paragraph'>
                      Conditions of Use & Sale &nbsp; &nbsp;&nbsp;  
                      Privacy Notice  &nbsp; &nbsp;&nbsp; 
                      Interest-Based Ads  &nbsp; &nbsp;&nbsp; <br/> 
                      © 1996-{year}, Amazon.com, Inc. or its affiliates
                </p>
           </div>
        </footer>
  );
};

export default Footer;
