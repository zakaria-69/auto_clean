import React from "react";
import car_washed from "../../assets/img/clean_white_car2.jpeg";

const Decouverte = () => {
  return (
    <section className="decouverte_formule_container">
      <div className="decouverte_formule_container_card">
        <img src={car_washed} />
        <div className="decouverte_formule_container_card_textAndLink">
          <p className="decouverte_formule_container_card_textAndLink_text">
            Auto Clean
          </p>
          <a
            href="#formule_picker"
            className="decouverte_formule_container_card_textAndLink_link"
          >
            Découvrir nos formules
          </a>
        </div>
      </div>
    </section>
  );
};

export default Decouverte;
