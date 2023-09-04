import React from 'react'
// import { Grid } from '@mui/material';
import "./Footer.css"

function Footer() {
  return (
    <footer id='home-footer'>
    <div className='footer'>
        {/* <hr style={{ marginTop: "5px", width: "95%" }} /> */}
        <div id="main-footer">
                 <div>
                     <h4> eBook Store </h4>
                     <hr style={{ width:"40%"}} />
                     <div>
                         <img
                            src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/white-mail-f7a800f328eab451231c558115ad0067bdd6c5ba04b7acd19f22ae4036e702d1.png"
                            alt="phone icon"
                        />
                        <p style={{paddingLeft:"10px"}}>support@abc.com</p>
                    </div>
                    <div>
                        <img
                            src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/white-phone-d7daea12563d63fb4bd1cbb2fa0a824d19501def56934aff125e23343912895e.png"
                            alt="phone icon"
                        />
                        <p style={{paddingLeft:"10px"}}>+91987654321</p> 
                    </div>
                </div>
                <div>
                    <h4>Company</h4>
                    <hr style={{ marginTop: "5px", width:"40%" }} />
                    <p>About Us</p>
                    <p>Blog</p>
                    <p>Careers</p>
                    <p>Contact Us</p>
                </div>
                <div>
                    <h4>Policies</h4>
                    <hr style={{ marginTop: "5px", width:"40%" }} />
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
        </div>
    </div>
    </footer>
  );
}

export default Footer;
