import React from "react";
import Footer from "../components/footer";
import Header from "../components/Header";
import Decouverte from "../components/Home/Decouverte";
import Description from "../components/Home/Description";
import Formules from "../components/Home/Formules";
import FormulePicker from "../components/Home/FormulePicker";
import Prestation from "../components/Home/Prestation";
import Services from "../components/Home/Services";

const Home = () => {
  return (
    <section className="home_container">
      <Header />
      <Decouverte />
      <Description />
      <Formules />
      <FormulePicker />
      <Prestation />
      <Services />
      <Footer />
    </section>
  );
};

export default Home;
