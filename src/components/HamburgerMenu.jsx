import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className="menu-button" onClick={toggleMenu}>
        {isOpen ? <FontAwesomeIcon icon={faTimes} size="2x" /> : <FontAwesomeIcon icon={faBars} size="2x" />}
      </button>
      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
          <li><Link to="/aboutus" onClick={toggleMenu}>Sobre Nosotros</Link></li>
          <li><Link to="/services" onClick={toggleMenu}>Servicios</Link></li>
          <li><Link to="/gallery" onClick={toggleMenu}>Galería</Link></li>
          <li><Link to="/remix" onClick={toggleMenu}>Remix</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contacto</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
