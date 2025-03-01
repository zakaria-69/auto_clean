import React, { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Decouverte from "../components/Home/Decouverte";
import Description from "../components/Home/Description";
import FormulePicker from "../components/Home/FormulePicker";
import Prestation from "../components/Home/Prestation";
import Services from "../components/Home/Services";
import { ThemeContext } from "../components/Theme";
import ThemeSwitch from "../components/ThemeSwitch";
import NavbarHome from "../components/Home/NavbarHome";

const Home = () => {
   const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <section style={{ backgroundColor: theme.background, color: theme.text }}>
      <NavbarHome />
      <Header />
      <ThemeSwitch />
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
