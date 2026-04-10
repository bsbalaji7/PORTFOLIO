import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.png';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section-new" id="home">
      <div className="hero-container">
        {/* Profile Image */}
        <motion.div
          className="profile-section"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src={profileImage}
            alt="BS - Web Developer"
            className="hero-profile-image"
          />
        </motion.div>

        {/* Left Text */}
        <motion.div
          className="left-text-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h1 className="greeting-text">Hi There</h1>
          <h2 className="name-text">I'm BS</h2>
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="right-text-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <h3 className="role-text">Full Stack</h3>
          <h3 className="role-text">Developer</h3>
          <div className="project-counter">
            <span className="counter-number">15+</span>
            <span className="counter-label">Projects</span>
          </div>
        </motion.div>
      </div>

      {/* Aurora Background */}
      <div className="aurora-background-layer">
        <motion.div
          className="aurora-gradient aurora-1"
          animate={{
            x: ['0%', '100%', '0%'],
            y: ['0%', '50%', '0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="aurora-gradient aurora-2"
          animate={{
            x: ['100%', '0%', '100%'],
            y: ['50%', '0%', '50%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Chroma Grid */}
      <div className="chroma-grid-overlay" />
    </section>
  );
};

export default HeroSection;