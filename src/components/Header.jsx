import React from "react";
import logo from "../../src/assets/img/logo_lavage_auto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSnapchat,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="home_container_header">
      <div className="home_container_header_logo">
        <a href="/">
          <img src={logo} alt="logo de voiture qui brille" />
        </a>
      </div>
      <div className="home_container_header_left_nav">
        <nav>
          <ul>
            <li>
              <a href="/" className="navLink header_accueil">
                Accueil
              </a>
            </li>
            <li>
              <a href="/meetings" className="navLink header_meetings">
                Rendez-vous
              </a>
            </li>
            <li>
              <a href="/contact" className="navLink header_contact">
                Contact
              </a>
            </li>
            <li>
              <a href="/informations" className="navLink header_city">
                Lyon
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="home_container_header_social_medias">
        <nav>
          <ul>
            <li>
              <a href="#" className="navLink header_accueil">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="#" className="navLink header_meetings">
                <FontAwesomeIcon icon={faSnapchat} />
              </a>
            </li>
            <li>
              <a href="#" className="navLink header_contact">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="#" className="navLink header_city">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
