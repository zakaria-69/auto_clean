import Footer from "../components/footer";
import Header from "../components/Header";
import CalendlyLink from "../components/calendlyLink";

const Meetings = () => {
  return (
    <section className="meetings_container">
      <Header />
      <div className="meetings_container_subcontainer">
        <div className="meetings_container_subcontainer_titleAndText">
          <h1>Rendez-vous</h1>
          <p>
            Vous souhaitez prendre rendez-vous pour une de nos formules ou un de
            nos services ?
          </p>
          <span>C&apos;est ici que sa ce passe : </span>
        </div>
        <div className="meetings_container_subcontainer_card_container meetings_card_one">
          <div className="meetings_container_subcontainer_card_container_card">
            <h2>Lyon</h2>
            <p>Lyon 69000</p>
            <CalendlyLink />
          </div>
          <div className="meetings_container_subcontainer_operator">
            <p>Chez zakaria</p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Meetings;
