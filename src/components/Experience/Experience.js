// src/components/Experience.js
import React from 'react';
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" className={`container max-w-5xl mx-auto p-8 my-6 scroll-mt-32 ${styles.experience}`}>
      <h2 className="text-3xl font-semibold mb-4 text-white">EXPERIENCE</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-white">Full Stack Developer – Brillio Technologies</h3>
          <p className="text-sm text-gray-400">May 2022 – Present | Bengaluru, India</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Led migration of 30K+ lines from C++ to Java, delivering key modules under tight deadlines.</li>
            <li>Built 6+ full-stack features and achieved 95% test coverage.</li>
            <li>Resolved 20+ production issues, reducing downtime by 30%.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Full Stack Developer – Accenture</h3>
          <p className="text-sm text-gray-400">July 2021 – May 2022 | Bengaluru, India</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Built and deployed 250+ chatbots with speech features, increasing usage by 70%.</li>
            <li>Revamped Angular web apps, improving usability by 15%.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
