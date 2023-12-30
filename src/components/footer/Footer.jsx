import React from "react";
import "./footer.css";
import logo from "../../assests/Agrimechanic_logo-removebg.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-logo">

        <img className="logo" src={logo} alt="company-logo"></img>
        </div>

        <div className="Contacts">
          <div className="contact">Contact Us</div>
          <div>
          info@agrimechanic.in
          <br></br>
          <br></br>
          <br></br>
            Adjoining sbs college , Village ramgarh, Chandigarh road, ludhiana, punjab
            <br></br>
            <br></br>
            <br></br>
            Contact: +91 7807655660
          </div>
        </div>
      </footer>
      <div className="copyright">
      &copy; Copyright 2024 AgriMechanics. All right
        reserved.
      </div>
    </>
  );
}

export default Footer;
