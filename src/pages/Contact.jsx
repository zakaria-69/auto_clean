import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Contact = () => {
  return (
    <section className="contact_container">
      <Header />
      <div className="contact_container_subcontainer">
        <div className="contact_container_subcontainer_titleAndText">
          <h1>Contact</h1>
          <p>Une question sur nos services? besoin d&apos;un renseignement ?</p>
          <p>Contactez nous sans hésiter ! </p>
        </div>
        <form className="contact_container_subcontainer_form_container">
          <div className="contact_container_subcontainer_form_container_firstName">
            <label htmlFor="lastName" className="screen_readers-only">
              Nom :
            </label>
            <input type="text" placeholder="Nom" id="lastName"></input>
          </div>
          <div className="contact_container_subcontainer_form_container_lastName">
            <label htmlFor="firstName" className="screen_readers-only">
              Prénom :
            </label>
            <input type="text" placeholder="Prénom" id="firstName"></input>
          </div>
          <div className="contact_container_subcontainer_form_container_email">
            <label htmlFor="email" className="screen_readers-only">
              Email :
            </label>
            <input
              type="email"
              placeholder="*Email"
              id="email"
              required
            ></input>
          </div>
          <div className="contact_container_subcontainer_form_container_message">
            <label htmlFor="message" className="screen_readers-only">
              Message :
            </label>
            <textarea
              name="message"
              id="message"
              rows={10}
              maxLength={500}
              placeholder="*Message"
              required
            ></textarea>
            <p>* Maximum 500 caractères</p>
            <span>
              Les champs dotés d&apos;une &apos; * &apos; sont des champs
              obligatoires
            </span>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
