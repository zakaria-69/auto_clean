import { useContext } from "react";
import car_washed from "../../assets/img/clean_white_car2.jpeg";
import { ThemeContext } from "../Theme";

const Decouverte = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <section className="decouverte_formule_container" id="decouverte">
      <div className="decouverte_formule_container_card">
        <img src={car_washed} />
        <div className="decouverte_formule_container_card_textAndLink">
          <h2
            className="decouverte_formule_container_card_textAndLink_text"
            style={{ color: theme.textImage }}
          >
            Auto Clean
          </h2>
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
