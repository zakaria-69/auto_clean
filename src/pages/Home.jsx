import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faSnapchat, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"

const Home = () => {   
    return (
      <section className="home_container">
        <header className="home_container_header">
            <div className="home_container_header_logo">
            <a href="/"><img src="../../src/assets/img/logo_lavage_auto.png" alt="logo de voiture qui brille" />
            </a>
            </div>
            <div  className="home_container_header_left_nav">
            <nav>
            <ul>
              <li>
                <a href="" className="navLink header_accueil">
                  Accueil
                </a>
              </li>
              <li>
                <a href="" className="navLink header_meetings">
                  Rendez-vous
                </a>
              </li>
              <li>
                <a href="" className="navLink header_contact">
                  Contact
                </a>
              </li>
              <li>
                <a href="" className="navLink header_city">
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
                <a href="" className="navLink header_accueil">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="" className="navLink header_meetings">
                  <FontAwesomeIcon icon={faSnapchat}/>
                </a>
              </li>
              <li>
                <a href="" className="navLink header_contact">
                  <FontAwesomeIcon icon={faLinkedin}/>
                </a>
              </li>
              <li>
                <a href="" className="navLink header_city">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
            </ul>
          </nav>
            </div>
        </header>
        <section className="decouverte_formule_container" >
          <div className="decouverte_formule_container_card">
            <img src="../../src/assets/img/clean_white_car2.jpeg" />
            <div className="decouverte_formule_container_card_overlay"></div>
            <p className="decouverte_formule_container_card_text">Auto Clean</p>
            <a className="decouverte_formule_container_card_link" >Découvrir nos formules</a>
          </div>
        </section>
      </section>
    );
}

export default Home;