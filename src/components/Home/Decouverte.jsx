
import { useContext } from "react";
// import {AnimationOnScroll } from 'react-animation-on-scroll';
// import 'animate.css';
import car_washed from "../../assets/img/clean_white_car2.jpeg";
import { ThemeContext } from "../Theme";



const Decouverte = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <section className="decouverte_formule_container" id="decouverte">
      <div className="decouverte_formule_container_card">
        <img src={car_washed} />
        <div className="decouverte_formule_container_card_textAndLink">
          <h2 className="decouverte_formule_container_card_textAndLink_text" style={{ color: theme.textImage }}>
            Auto Clean
          </h2>
          {/* <AnimationOnScroll animateIn="animate__backInRight"> */}
          <a
            href="#formule_picker"
            className="decouverte_formule_container_card_textAndLink_link"
          >
            Découvrir nos formules
          </a>
          {/* </AnimationOnScroll> */}
          
        </div>
      </div>
    </section>
  );
};

export default Decouverte;
