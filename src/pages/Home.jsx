import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Decouverte from "../components/Home/Decouverte";
import Description from "../components/Home/Description";
import FormulePicker from "../components/Home/FormulePicker";
import Prestation from "../components/Home/Prestation";
import Services from "../components/Home/Services";

const Home = () => {
  return (
    <section className="home_container">
      <Header />
      <Decouverte />
      <Description />
      <FormulePicker />
      <Prestation />
      <Services />
      <Footer />
    </section>
  );
};

export default Home;
