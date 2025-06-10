// src/components/About.js
import React from "react";
import { motion } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="about"
      className="container max-w-5xl mx-auto p-8 scroll-mt-32"
    >
      <h2 className={`text-2xl font-semibold mb-4  ${styles.text}`}>About Me</h2>
      <p className="leading-relaxed">
        Detail-oriented Full Stack Developer with 3.9+ years of experience
        building scalable, user-focused web applications using Angular,
        JavaScript, TypeScript, Node.js, Java, and AWS. Proficient in front-end
        and back-end development, clean code practices, performance
        optimization, and API security.
      </p>
    </motion.section>
  );
}
