import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Smartphone, Zap } from 'lucide-react';
import './SkillsSection.css';

const SkillsSection = () => {
  const skills = [
    {
      icon: <Code2 size={32} />,
      title: 'Frontend Development',
      technologies: ['React', 'JavaScript', 'TypeScript', 'HTML5/CSS3'],
    },
    {
      icon: <Server size={32} />,
      title: 'Backend Development',
      technologies: ['Node.js', 'Python', 'FastAPI', 'REST APIs'],
    },
    {
      icon: <Database size={32} />,
      title: 'Database',
      technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
    },
    {
      icon: <Layout size={32} />,
      title: 'UI/UX Design',
      technologies: ['Tailwind CSS', 'Figma', 'Responsive Design', 'Animations'],
    },
    {
      icon: <Zap size={32} />,
      title: 'Tools & DevOps',
      technologies: ['Git', 'Docker', 'CI/CD', 'AWS'],
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Development',
      technologies: ['React Native', 'Progressive Web Apps', 'Cross-platform'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">
            Building modern applications with cutting-edge technologies
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(0, 255, 200, 0.3)',
                transition: { duration: 0.3 },
              }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-title">{skill.title}</h3>
              <div className="skill-tech-list">
                {skill.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;