import React, { useState } from 'react';
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faImage, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div id="Navbar">
        <div className={`container ${menuOpen ? 'show' : ''}`}>
          <button> <FontAwesomeIcon icon={faHome} size="1x" />Home </button>
          <button> <FontAwesomeIcon icon={faImage} size="1x" /> Gallery</button>
          <button> <FontAwesomeIcon icon={faImage} size="1x" /> Contact</button>
          <button> <FontAwesomeIcon icon={faInfoCircle} size="1x" /> About</button>
        </div>
        <IoMenu className="menu-icon" size={50} color="red" onClick={toggleMenu} />
      </div>
    </>
  );
};

export default Navbar;
