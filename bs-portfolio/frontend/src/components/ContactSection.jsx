import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Instagram, InstagramIcon } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      url: 'https://github.com/bsbalaji7',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bala-subramanian-709a37274/',
    },
    {
      icon: <Instagram size={24} />,
      label: 'Instagram',
      url: 'https://www.instagram.com/itz_viss.__?igsh=NnkxbjNyZWZqdjgx',
    },
    {
      icon: <Mail size={24} />,
      label: 'Email',
      url: 'mailto:bsbalaji101005@gmail.com?subject=Portfolio Contact&body=Hi BS, I want to connect with you.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Ready to bring your ideas to life? Get in touch!
          </p>
        </motion.div>

        <motion.div
          className="social-links"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              className="social-link"
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 30px rgba(0, 255, 200, 0.4)',
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="social-icon">{link.icon}</div>
              <span className="social-label">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="footer-text">
            © 2025 BS. Built with React & Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;