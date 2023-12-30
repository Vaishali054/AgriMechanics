import React, { useState } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import logo from "../../assests/Agrimechanic_logo-removebg.png"

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
  const handleClickWorkshop = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("workshop");
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
    <div className="fixed">
      <div className="Navbar">
        <img
          className="company-logo"
          src={logo}
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
          <div className="links web" onClick={handleClickVision}>
            Vision
          </div>
          <div className="links web" onClick={handleClickWorkshop}>
            Workshops
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
          <div className="links" onClick={handleClickVision}>
            Vision
          </div>
          <div className="links" onClick={handleClickWorkshop}>
            Workshops
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
