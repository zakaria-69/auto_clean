import CalendlyLink from "../calendlyLink";
import { AnimationOnScroll } from "react-animation-on-scroll";
import 'animate.css'

const Services = () => {
  return (
    <section className="service_container">
      <div className="service_container_title_container">
        <h2>Services</h2>
        <p>
          En plus de nos formules et préstations nous vous proposons aussi :{" "}
        </p>
      </div>
      <div className="service_container_subcontainer">
        <div className="service_container_subcontainer_top_container service_card_one">
          <h3>Traitements micro-rayures</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            suscipit cupiditate nam nihil rem! Voluptas dolorum, officia nihil
            reiciendis commodi iure nobis tempore ipsum obcaecati laborum.
            Repellat eius amet et?
          </p>
          <div id="linkContainer_one">
          <AnimationOnScroll animateIn="animate__backInRight" offset={50} animateOnce="true">
            <CalendlyLink />
            </AnimationOnScroll>
          </div>
        </div>
        <div className="service_container_subcontainer_middle_container">
          <div className="service_container_subcontainer_middle_container_left service_card_two">
            <h3>Rénovations phares</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              suscipit cupiditate nam nihil rem! Voluptas dolorum, officia nihil
              reiciendis commodi iure nobis tempore ipsum obcaecati laborum.
              Repellat eius amet et?
            </p>
            <div id="linkContainer">
          <AnimationOnScroll animateIn="animate__backInRight" offset={50} animateOnce="true">
              <CalendlyLink />
              </AnimationOnScroll>
            </div>
          </div>
          <div className="service_container_subcontainer_middle_container_right service_card_three">
            <h3>Rénovations plastique</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              suscipit cupiditate nam nihil rem! Voluptas dolorum, officia nihil
              reiciendis commodi iure nobis tempore ipsum obcaecati laborum.
              Repellat eius amet et?
            </p>
            <div id="linkContainer">

          <AnimationOnScroll animateIn="animate__backInRight" offset={50} animateOnce="true">
              <CalendlyLink />
              </AnimationOnScroll>
            </div>
          </div>
        </div>
        <div className="service_container_subcontainer_bottom_container service_card_four">
          <h3>Lavage éxterieur vapeur</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            suscipit cupiditate nam nihil rem! Voluptas dolorum, officia nihil
            reiciendis commodi iure nobis tempore ipsum obcaecati laborum.
            Repellat eius amet et?
          </p>
          <div id="#linkContainer_bottom">
          <AnimationOnScroll animateIn="animate__backInRight" offset={50} animateOnce="true">
            <CalendlyLink />
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
