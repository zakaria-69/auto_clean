import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faClose } from '@fortawesome/free-solid-svg-icons';

const NavbarHome = () => {

    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => {
        setIsOpen(false);
    }

  
  return (
    <div className={`home-nav-wrapper ${isOpen ? "shadow" : ""}`}>
        <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faCompass} 
        className={`home-nav-icon ${isOpen ? "rotate" : ""}`}
         size="3x" 
         listItem
        // pull="left"
         />
        </button>
      {isOpen && (
       <nav className="home-nav-container" >
        <button className="close-modal-btn" onClick={() => closeModal()}>
        <FontAwesomeIcon icon={faClose} className="close-modal-icon" />
        </button>
        <h3>Naviguer vers :</h3>
       <ul>
            <li><a href="#header">Haut de page</a></li>
           <li><a href="#decouverte">Découverte</a></li>
           <li><a href="#description">Déscription</a></li>
           <li><a href="#formule_picker">Formules</a></li>
           <li><a href="#prestations">préstations</a></li>
           <li><a href="#services">préstations</a></li>
           <li><a href="#footer">bas de page</a></li>
       </ul>
     </nav>
      )}
    </div>
  );
};

export default NavbarHome;


