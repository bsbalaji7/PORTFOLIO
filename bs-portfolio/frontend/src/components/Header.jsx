import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className="portfolio-header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="header-content">
        <div className="logo">BS</div>
        <nav className="nav-menu">
          <a
            href="#home"
            className={activeSection === 'home' ? 'active' : ''}
            onClick={() => scrollToSection('home')}
          >
            HOME
          </a>
          <a
            href="#about"
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => scrollToSection('about')}
          >
            ABOUT
          </a>
          <a
            href="#projects"
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => scrollToSection('projects')}
          >
            PROJECTS
          </a>
          <a
            href="#contact"
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => scrollToSection('contact')}
          >
            CONTACT
          </a>
        </nav>
        <div className="portfolio-text">PORTFOLIO</div>
      </div>
    </motion.header>
  );
};

export default Header;