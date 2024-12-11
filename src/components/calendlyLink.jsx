import React, { useState, useEffect } from "react";

const CalendlyLink = () => {
  const [calendlyLink, setCalendyLink] = useState("");

  useEffect(() => {
    const currentMonth = new Date().toISOString().slice(0, 7);
    setCalendyLink(
      `https://calendly.com/ladjrafi-zak/30min?month=${currentMonth}`
    );
  }, []);

  return (
    <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
      Prendre rendez-vous
    </a>
  );
};

export default CalendlyLink;
