import React, { useState, useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

const CalendlyLink = () => {
  const [calendlyLink, setCalendyLink] = useState("");

  useEffect(() => {
    const currentMonth = new Date().toISOString().slice(0, 7);
    setCalendyLink(
      `https://calendly.com/ladjrafi-zak/30min?month=${currentMonth}`
    );
  }, []);

  return (
    <div>
      <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
        Prendre rendez-vous
      </a>
    </div>
  );
};
export default CalendlyLink;
