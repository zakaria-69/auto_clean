import CalendlyLink from "../calendlyLink";
import { AnimationOnScroll } from "react-animation-on-scroll";
import 'animate.css';

const Prestation = () => {
  return (
    <section className="prestations_container" id="prestations">
      <div className="prestations_container_title_container">
        <h2>Prestations</h2>
        <p>Découvrez également nos préstations sur mesure : </p>
      </div>

      <div className="prestations_container_main_container">
        <div className="prestations_container_main_container_top_container">
          <h3>Lavage intérieur vapeur</h3>
          <span>à partir de 100€</span>
          <AnimationOnScroll animateIn="animate__backInRight" offset={50} animateOnce="true">
          <CalendlyLink />
          </AnimationOnScroll>
         
        </div>
        <div className="prestations_container_main_container_bottom_container">
          <div className="prestations_container_main_container_bottom_container_subcontainer formule_card_one">
            <h3>Lavage vapeur</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              eligendi totam alias ex cumque, adipisci iusto repellat, fuga
              ipsam nesciunt doloribus veniam provident nobis error eveniet
              harum quis in enim.
            </p>
          </div>
          <div className="prestations_container_main_container_bottom_container_subcontainer formule_card_two">
            <h3>Tableau de bord microfibre</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              eligendi totam alias ex cumque, adipisci iusto repellat, fuga
              ipsam nesciunt doloribus veniam provident nobis error eveniet
              harum quis in enim.
            </p>
          </div>
          <div className="prestations_container_main_container_bottom_container_subcontainer formule_card_three">
            <h3>Aspiration siege et tapis</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              eligendi totam alias ex cumque, adipisci iusto repellat, fuga
              ipsam nesciunt doloribus veniam provident nobis error eveniet
              harum quis in enim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prestation;
