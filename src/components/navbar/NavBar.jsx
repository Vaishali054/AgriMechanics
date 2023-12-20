import React, { useState } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faWhiskeyGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClickServices = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("services");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  const handleClickVision = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("vision");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };


  const handleClickHome = () => {
    navigate("/");
  };

  const handleLogo = () => {
    navigate("/");
  };

  return (
    <>
      <div className="Navbar">
        <img
          className="company-logo"
          src={faWhiskeyGlass}
          alt="company-logo"
          onClick={handleLogo}
        />
        <div className="navigation web">
          <div>
            <div className="links web" onClick={handleClickHome}>
              Home
            </div>
            <div className="bar web"></div>
          </div>
          <div className="links web" onClick={handleClickServices}>
            Services
          </div>
          <div className="links web" onClick={handleClickServices}>
            Vision
          </div>
        </div>
        <div
          className="mobile-menu-icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="mobile-dropdown">
          <div className="links" onClick={handleClickHome}>
            Home
          </div>
          <div className="links" onClick={handleClickServices}>
            Services
          </div>
          <div className="links" onClick={handleClickServices}>
            Vision
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
