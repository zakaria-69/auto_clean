import React from "react";

const Description = () => {

    return (
        <section className="description_reviews_container">
        <div className="description_reviews_container_subcontainer_description">
          <p className="description_reviews_container_subcontainer_description_sentence_hook">
            &quot; Nous Redonnons éclat et brillance à votre véhicule avec notre
            expertise en nettoyage auto professionnel ! &quot;{" "}
          </p>
        </div>
        <div className="description_reviews_container_subcontainer_reviews">
          <h2 className="description_reviews_container_subcontainer_reviews_title">
            Nos avis client
          </h2>
          <p className="description_reviews_container_subcontainer_reviews_review">
            &quot; Très satisfait du résultat j&apos;ai recuperer mon véhicule
            comme neuf !&quot;{" "}
          </p>
          <a
            href="/"
            className="description_reviews_container_subcontainer_reviews_button"
          >
            Découvrir plus d&apos;avis
          </a>
        </div>
      </section>
    )
}

export default Description;