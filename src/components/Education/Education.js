// src/components/Education.js
import React from 'react';
import styles from './Education.module.css'

export default function Education() {
  return (
    <section id="education" className={`container max-w-5xl mx-auto p-8 scroll-mt-32 ${styles.education}`}>
      <h2 className="text-3xl font-semibold mb-4 text-white">EDUCATION</h2>
      <ul className="space-y-4">
        <li>
          <h3 className="font-semibold text-white">B.Tech – Dayananda Sagar University</h3>
          <p>Bengaluru, India | GPA: 8.89 / 10</p>
        </li>
        <li>
          <h3 className="font-semibold text-white">Pre-University – Jain University</h3>
          <p>Bengaluru, India | GPA: 9 / 10</p>
        </li>
        <li>
          <h3 className="font-semibold text-white">Secondary (ICSE) – Sree Rama Vidyalaya</h3>
          <p>Bengaluru, India | GPA: 9 / 10</p>
        </li>
      </ul>
    </section>
  );
}
