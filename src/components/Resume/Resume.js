// src/components/Resume.js
import React from 'react';
import styles from './Resume.module.css'

export default function Resume() {
  return (
    <section id="resume" className={`container max-w-5xl mx-auto p-8 scroll-mt-32 ${styles.resume}`}>
      <h2 className="text-3xl font-semibold mb-4 text-white">RESUME</h2>
      <a
        href="/Roopesh_Srinivasa_Resume.pdf"
        download
        className="text-white underline hover:text-grey-400 transition-colors"
      >
        Download My Resume
      </a>
    </section>
  );
}
