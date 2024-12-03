import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faSnapchat, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import logo from "../../src/assets/img/logo_lavage_auto.png"
import car_washed from '../../src/assets/img/clean_white_car2.jpeg'

const Home = () => {   
    return (
      <section className="home_container">
        <header className="home_container_header">
            <div className="home_container_header_logo">
            <a href="/"><img src={logo} alt="logo de voiture qui brille" />
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
            <img src={car_washed} />
            <div className="decouverte_formule_container_card_textAndLink">
            <p className="decouverte_formule_container_card_textAndLink_text">Auto Clean</p>
            <a className="decouverte_formule_container_card_textAndLink_link" >Découvrir nos formules</a>
            </div>
          </div>
        </section>
        <section className="description_reviews_container">
          <div className="description_reviews_container_subcontainer_description">
            {/* <h2 className="description_reviews_container_subcontainer_title">Nos Formules</h2> */}
            <p className="description_reviews_container_subcontainer_description_sentence_hook">&quot; Nous Redonnons éclat et brillance à votre véhicule avec notre expertise en nettoyage auto professionnel ! &quot; </p>
          </div>
          <div className="description_reviews_container_subcontainer_reviews">
            {/* <h2 className="description_reviews_container_subcontainer_title">Nos Formules</h2> */}
            <h2 className="description_reviews_container_subcontainer_reviews_title">&quot; Nos avis client&quot; </h2>
            <p className="description_reviews_container_subcontainer_reviews_review">&quot; Très satisfait du résultat j&apos;ai recuperer mon véhucile comme neuf !&quot; </p>
            <a href="" className="description_reviews_container_subcontainer_reviews_button">Découvrir plus d&apos;avis</a>
          </div>

        </section>
      </section>
    );
}

export default Home;