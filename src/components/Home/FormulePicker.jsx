import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTruck,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

const FormulePicker = () => {
  const fontCheckIconColor = "#00aaff";
  return (
    <section className="formules_picker_container" id="formule_picker">
      <h2>Nos formules</h2>
      <div className="formules_picker_container_cards">
        <div className="formules_picker_container_cards_card formule_card_one">
          <h3 className="formules_picker_container_cards_card_title">
            nouveau souffle de vie
          </h3>
          <p className="formules_picker_container_cards_card_price">
            à partir de 120€
          </p>
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
            <a href="#">Prendre rendez-vous</a>
          </div>
        </div>
        <div className="formules_picker_container_cards_card formule_card_two">
          <h3 className="formules_picker_container_cards_card_title">
            Performance Brillante
          </h3>
          <p className="formules_picker_container_cards_card_price">
            à partir de 180€
          </p>
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
            <a href="#">Prendre rendez-vous</a>
          </div>
        </div>
        <div className="formules_picker_container_cards_card formule_card_three">
          <h3 className="formules_picker_container_cards_card_title">
            Rénovation Premium
          </h3>
          <p className="formules_picker_container_cards_card_price">
            à partir de 240€
          </p>
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
            <a href="#">Prendre rendez-vous</a>
          </div>
        </div>
      </div>
      <section className="formules_picker_container_informations">
        <div className="formules_picker_container_informations_prestationTime">
          <FontAwesomeIcon
            icon={faTruck}
            color={fontCheckIconColor}
            className="fa-2x"
          />
          <div className="formules_picker_container_informations_prestationTime_titleAndText">
            <h3>Prestation</h3>
            <p>Durée de 1h max</p>
          </div>
        </div>
        <div className="formules_picker_container_informations_paiementMethods">
          <FontAwesomeIcon
            icon={faCreditCard}
            color={fontCheckIconColor}
            className="fa-2x"
          />
          <div className="formules_picker_container_informations_paiementMethods_titleAndText">
            <h3>Tout paiement</h3>
            <p>CB, espèces</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FormulePicker;
