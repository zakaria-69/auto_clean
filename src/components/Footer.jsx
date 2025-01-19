import logo from "../../src/assets/img/detourer_logo_auto_clean.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSnapchat,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faHome } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_container_logoAndSocials">
        <a href="/">
          <img src={logo} alt="logo de voiture qui brille" />
        </a>
        <div className="footer_container_logoAndSocials_medias">
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
                <a href="#" className="navLink header_mail">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer_container_about">
        <h3>A propos de nous</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
          unde perspiciatis porro pariatur dolorem, aspernatur deserunt
          exercitationem ea rem, amet labore. Porro ipsum ab reiciendis
          veritatis exercitationem voluptas odit rerum.
        </p>
      </div>
      <div className="footer_container_contact">
        <h3>Contact</h3>
        <div className="footer_container_contact_list">
          <ul>
            <li>
              <a href="tel:+337824797">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="footer_container_contact_icon"
                />
                <span>+337824797</span>
              </a>
            </li>
            <li>
              <a href="mailto:ladjrafi_zakaria@yahoo.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="footer_container_contact_icon"
                />
                <span>ladjrafi_zakaria@yahoo.com</span>
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/QkEyiVP8tW8Jwnvv8"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faHome}
                  className="footer_container_contact_icon"
                />
                <span>Lyon</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_container_schedules">
        <h3>Horaires</h3>
        <ol>
          <li>Lundi : 9h - 19h</li>
          <li>Mardi : 9h - 19h</li>
          <li>Mercredi : 9h - 19h</li>
          <li>Jeudi : 9h - 19h</li>
          <li>Vendredi : 9h - 19h</li>
          <li>Samedi : 9h - 19h</li>
          <li>Dimanche : 9h - 19h</li>
        </ol>
      </div>
      <div className="footer_container_map">
        <iframe
          // eslint-disable-next-line max-len
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44538.52695156109!2d4.793930673298822!3d45.75800318058034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea516ae88797%3A0x408ab2ae4bb21f0!2sLyon!5e0!3m2!1sfr!2sfr!4v1733871758989!5m2!1sfr!2sfr"
          // style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          id="footer_map"
        />
      </div>
    </footer>
  );
};

export default Footer;
