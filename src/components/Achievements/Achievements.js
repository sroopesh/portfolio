// src/components/Achievements.js
import React from 'react';
import styles from './Achievements.module.css'

export default function Achievements() {
  return (
    <section id="achievements" className={`container max-w-5xl mx-auto p-8 scroll-mt-32 ${styles.achievements}`}>
      <h2 className="text-3xl font-semibold mb-4 text-white-800">ACHIEVEMENTS</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Hackathon Finalist – Built a speech-to-text app within 1 month and reached the final round.</li>
        <li>Client Appreciation – Recognized for resolving 20+ critical issues and meeting tight deadlines.</li>
        <li>Order Success Rate – Improved success rate from 90% to 95% by fixing bugs and optimizing backend workflows.</li>
      </ul>
    </section>
  );
}
