import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="about-title">About Me</h2>
          <p className="about-subtitle">Passionate about creating exceptional digital experiences</p>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="about-text">
            <p>
              I'm a Full-Stack Web Developer with a passion for building modern, 
              responsive web applications. With expertise in both frontend and backend 
              technologies, I bring ideas to life through clean code and thoughtful design.
            </p>
            <p>
              My journey in web development has led me to work with cutting-edge technologies 
              and frameworks. I specialize in creating seamless user experiences while 
              ensuring robust and scalable backend architecture.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, contributing to open-source 
              projects, and staying up-to-date with the latest industry trends.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-item">
              <h3>5+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="highlight-item">
              <h3>1</h3>
              <p>Years Experience</p>
            </div>
            <div className="highlight-item">
              <h3>5+</h3>
              <p>Technologies Mastered</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;