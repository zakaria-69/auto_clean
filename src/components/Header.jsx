import React, { useContext } from "react";
import logo from "../../src/assets/img/detourer_logo_auto_clean.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSnapchat,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { themes, ThemeContext } from "./Theme";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="home_container_header" id="header">
      <div className="home_container_header_logo">
        <a href="/">
          <img src={logo} alt="logo de voiture qui brille" />
        </a>
      </div>
      <div className="home_container_header_left_nav">
        <nav>
          <ul>
            <li style={{ color: theme.background }}>
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
                infos
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="home_container_header_social_medias">
        <nav>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/__zak.l__/"
                target="_blank"
                className="navLink header_accueil"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a
                href="https://www.snapchat.com/fr-FR"
                target="_blank"
                className="navLink header_meetings"
              >
                <FontAwesomeIcon icon={faSnapchat} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/zakaria-ladjrafi/"
                target="_blank"
                className="navLink header_contact"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                href="mailto:ladjrafi_zakaria@yahoo.com"
                target="_blank"
                className="navLink header_city"
              >
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
