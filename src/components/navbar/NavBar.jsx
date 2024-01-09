import React, { useState } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assests/Agrimechanic_logo-removebg.png"

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClickServices = () => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById("services");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  const handleClickVision = () => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById("vision");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  const handleClickWorkshop = () => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById("workshop");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  const handleClickFranchise = () => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById("franchise");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="fixed">
      <div className="Navbar">
        <img
          className="company-logo"
          src={logo}
          alt="company-logo"
        />
        <div className="navigation web">
          <div>
            <div className="links web">
              Home
            </div>
            <div className="bar web"></div>
          </div>
          <div className="links web" onClick={handleClickServices}>
            Services
          </div>
          <div className="links web" onClick={handleClickVision}>
            Vision
          </div>
          <div className="links web" onClick={handleClickWorkshop}>
            Workshops
          </div>
          <div className="links web" onClick={handleClickFranchise}>
            Franchise
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
          <div className="links">
            Home
          </div>
          <div className="links" onClick={handleClickServices}>
            Services
          </div>
          <div className="links" onClick={handleClickVision}>
            Vision
          </div>
          <div className="links" onClick={handleClickWorkshop}>
            Workshops
          </div>
          <div className="links" onClick={handleClickFranchise}>
            Franchise
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
