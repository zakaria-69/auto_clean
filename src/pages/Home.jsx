import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSnapchat,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faCheck,
  faTruck,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../src/assets/img/logo_lavage_auto.png";
import car_washed from "../../src/assets/img/clean_white_car2.jpeg";

const Home = () => {
  const fontCheckIconColor = "#00aaff";
  return (
    <section className="home_container">
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
                  <FontAwesomeIcon icon={faSnapchat} />
                </a>
              </li>
              <li>
                <a href="" className="navLink header_contact">
                  <FontAwesomeIcon icon={faLinkedin} />
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
      <section className="decouverte_formule_container">
        <div className="decouverte_formule_container_card">
          <img src={car_washed} />
          <div className="decouverte_formule_container_card_textAndLink">
            <p className="decouverte_formule_container_card_textAndLink_text">
              Auto Clean
            </p>
            <a className="decouverte_formule_container_card_textAndLink_link">
              Découvrir nos formules
            </a>
          </div>
        </div>
      </section>
      <section className="description_reviews_container">
        <div className="description_reviews_container_subcontainer_description">
          <p className="description_reviews_container_subcontainer_description_sentence_hook">
            &quot; Nous Redonnons éclat et brillance à votre véhicule avec notre
            expertise en nettoyage auto professionnel ! &quot;{" "}
          </p>
        </div>
        <div className="description_reviews_container_subcontainer_reviews">
          <h2 className="description_reviews_container_subcontainer_reviews_title">
            Nos avis client
          </h2>
          <p className="description_reviews_container_subcontainer_reviews_review">
            &quot; Très satisfait du résultat j&apos;ai recuperer mon véhucile
            comme neuf !&quot;{" "}
          </p>
          <a
            href=""
            className="description_reviews_container_subcontainer_reviews_button"
          >
            Découvrir plus d&apos;avis
          </a>
        </div>
      </section>
      <section className="formules_picker_container">
        <h2>Nos formules</h2>
        <div className="formules_picker_container_cards">
          <div className="formules_picker_container_cards_card formule_card_one">
            <h3 className="formules_picker_container_cards_card_title">
            Éclat Serein
            </h3>
            <p className="formules_picker_container_cards_card_price">prix 1</p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheck} color={fontCheckIconColor} />
                <p>Polissage</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} color={fontCheckIconColor} />
                <p>Céramique</p>
              </li>
            </ul>
            <div className="formules_picker_container_cards_card_link">
              <a href="">Prendre rendez-vous</a>
            </div>
          </div>
          <div className="formules_picker_container_cards_card formule_card_two">
            <h3 className="formules_picker_container_cards_card_title">
            Performance Brillante
            </h3>
            <p className="formules_picker_container_cards_card_price">prix 2</p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheck} color={fontCheckIconColor} />
                <p>Polissage</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} color={fontCheckIconColor} />
                <p>Céramique</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} color={fontCheckIconColor} />
                <p>Rénovation phares</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} color={fontCheckIconColor} />
                <p>Lavage intérieur et éxterieur vapeur</p>
              </li>
            </ul>
            <div className="formules_picker_container_cards_card_link">
              <a href="">Prendre rendez-vous</a>
            </div>
          </div>
          <div className="formules_picker_container_cards_card formule_card_three">
            <h3 className="formules_picker_container_cards_card_title">
            Rénovation Premium
            </h3>
            <p className="formules_picker_container_cards_card_price">prix 3</p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheck} color={fontCheckIconColor} />
                <p>Polissage</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} color={fontCheckIconColor} />
                <p>Céramique</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} color={fontCheckIconColor} />
                <p>Rénovation phares</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} color={fontCheckIconColor} />
                <p>Lavage intérieur et éxterieur vapeur</p>
              </li>
            </ul>
            <div className="formules_picker_container_cards_card_link">
              <a href="">Prendre rendez-vous</a>
            </div>
          </div>
        </div>
        <section className="formules_picker_container_informations">
          <div className="formules_picker_container_informations_prestationTime">
            <FontAwesomeIcon icon={faTruck} color={fontCheckIconColor} className="fa-2x"/>
            <div className="formules_picker_container_informations_prestationTime_titleAndText">
              <h3>Prestation</h3>
              <p>Durée de 1h max</p>
            </div>
          </div>
          <div className="formules_picker_container_informations_paiementMethods">
            <FontAwesomeIcon icon={faCreditCard} color={fontCheckIconColor}className="fa-2x"/>
            <div className="formules_picker_container_informations_paiementMethods_titleAndText">
            <h3>Tout paiement</h3>
            <p>CB, espèces</p>
            </div>
            
          </div>
        </section>
      </section>
    </section>
  );
};

export default Home;
