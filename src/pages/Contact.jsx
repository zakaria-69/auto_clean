import React from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Header from "../components/Header";
import Footer from "../components/Footer";

// import dotenv from 'dotenv';

const Contact = () => {
  const schema = yup
    .object({
      nom: yup.string().max(50).required("Veuillez saisir vôtre nom"),

      prenom: yup.string().max(50).required("Veuillez saisir vôtre prénom"),

      email: yup
        .string()
        .email("Veuillez saisir une adresse email valide")
        .max(255)
        .required("Veuillez saisir une adresse email"),

      message: yup.string().max(1000).required(`Veuillez saisir vôtre message`),
    })
    .required();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, r) => {
    alert(
      "Merci d'avoir rempli ce formulaire.Vôtre message à bien été envoyé! 😃👍 "
    );
    const templateId = import.meta.env.VITE_API_TEMPLATEID;
    const serviceId = import.meta.env.VITE_API_SERVICEID;

    sendFeedback(serviceId, templateId, {
      nom: data.nom,
      prenom: data.prenom,
      email: data.email,
      message: data.message,
      reply_to: r.target.reset(),
    });
  };

  const sendFeedback = (serviceId, templateId, variables) => {
    emailjs
      .send(serviceId, templateId, variables, import.meta.env.VITE_API_USERID)
      .then((res) => {
        console.log("succes", res);
      })
      .catch((err) => alert("une erreur est survenue!"));
  };
  return (
    <section className="contact_container">
      <Header />
      <div className="contact_container_subcontainer">
        <div className="contact_container_subcontainer_titleAndText">
          <h1>Contact</h1>
          <p>Une question sur nos services? besoin d&apos;un renseignement ?</p>
          <p>Contactez nous sans hésiter ! </p>
        </div>
        <form
          action="*"
          onSubmit={handleSubmit(onSubmit)}
          className="contact_container_subcontainer_form_container"
        >
          <div className="contact_container_subcontainer_form_container_firstName">
            <label htmlFor="lastName" className="screen_readers-only">
              Nom :
            </label>
            <input
              type="text"
              placeholder="Nom"
              id="lastName"
              title="nom"
              {...register("nom")}
            ></input>
          </div>
          <div className="contact_container_subcontainer_form_container_lastName">
            <label htmlFor="firstName" className="screen_readers-only">
              Prénom :
            </label>
            <input
              type="text"
              placeholder="Prénom"
              id="firstName"
              title="firstname"
              {...register("prenom")}
            ></input>
          </div>
          <div className="contact_container_subcontainer_form_container_email">
            <label htmlFor="email" className="screen_readers-only">
              Email :
            </label>
            <input
              type="email"
              placeholder="*Email"
              id="email"
              title="email"
              {...register("email")}
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
              title="message"
              {...register("message")}
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
