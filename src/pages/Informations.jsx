import CalendlyLink from "../components/calendlyLink";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faHome } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../components/theme";

const Informations = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <section className="information_container">
      <Header />
      <section className="information_container_subcontainer">
        <h1>
          Auto clean Lyon
        </h1>
        <p className="information_container_subcontainer_whereAndWhen">Ou et quand ?</p>
        <div className="information_container_subcontainer_infosContainer">
          <div className="information_container_subcontainer_infosContainer_contact">
            <ul>
              <li className="information_container_subcontainer_infosContainer_contact_adress">
              <FontAwesomeIcon icon={faHome} color={theme.icon} className="icon" />
                <a
                  href="https://maps.app.goo.gl/Qu5WrAk7HbJ9dWxz5"
                  target="_blank"
                >
                  Lyon
                </a>
              </li>
              <li className="information_container_subcontainer_infosContainer_contact_phone">
              <FontAwesomeIcon icon={faPhone} color={theme.icon} className="icon" />
                <a href="tel:+33782479774" target="_blank">
                  +33 7 82 47 97 74
                </a>
              </li>
              <li className="information_container_subcontainer_infosContainer_contact_email">
              <FontAwesomeIcon icon={faEnvelope} color={theme.icon} className="icon" />
                <a href="mailto:ladjrafi_zakaria@yahoo.com" target="_blank">
                  {" "}
                  ladjrafi_zakaria@yahoo.com
                </a>
              </li>
            </ul>
          </div>
          <div className="information_container_subcontainer_infosContainer_schedule">
            <ol>
              <div className="information_container_subcontainer_infosContainer_schedule_day">
                <li>
                  <p>Lundi</p>
                  <p>10h - 18h</p>
                </li>
              </div>
              <div className="information_container_subcontainer_infosContainer_schedule_day">
                <li>
                  <p>Mardi</p>
                  <p>10h - 18h</p>
                </li>
              </div>
              <div className="information_container_subcontainer_infosContainer_schedule_day">
                <li>
                  <p>Mercredi</p>
                  <p>10h - 18h</p>
                </li>
              </div>
              <div className="information_container_subcontainer_infosContainer_schedule_day">
                <li>
                  <p>Jeudi</p>
                  <p>10h - 18h</p>
                </li>
              </div>
              <div className="information_container_subcontainer_infosContainer_schedule_day">
                <li>
                  <p>Vendredi</p>
                  <p>10h - 18h</p>
                </li>
              </div>
              <div className="information_container_subcontainer_infosContainer_schedule_day">
                <li>
                  <p>Samedi</p>
                  <p>10h - 18h</p>
                </li>
              </div>
              <div className="information_container_subcontainer_infosContainer_schedule_day">
                <li>
                  <p>Dimanche</p>
                  <p>10h - 18h</p>
                </li>
              </div>
            </ol>
          </div>
        </div>
      </section>
      <section className="information_appointment">
        <div className="information_appointment_subcontainer">
          <h2>Prendre rendez-vous</h2>
          <p>dans cet atelier</p>
          {/* <a href="" target="_blank"> */}
            <CalendlyLink />
          {/* </a> */}
        </div>
      </section>
      <div className="about_me">
        <p>Ce site ne fournis aucun réel service de netoyage de véhicule tout les services proposé sont fictifs.
            Ce site est un site vitrine réalisé dans le cadre d&apos;un projet personnel.
            Je suis Zakaria Ladjrafi développeur fullstack vous pouvez découvrir mes réseau via les liens présent dans les menus.
        </p>
        <p>Merci !</p>
      </div>
      <Footer />
    </section>
  );
};
export default Informations;
