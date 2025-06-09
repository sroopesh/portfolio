// src/components/Achievements.js
import React from 'react';

export default function Achievements() {
  return (
    <section id="achievements" className="max-w-5xl mx-auto p-8 scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4 text-blue-800">Achievements</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Hackathon Finalist – Built a speech-to-text app within 1 month and reached the final round.</li>
        <li>Client Appreciation – Recognized for resolving 20+ critical issues and meeting tight deadlines.</li>
        <li>Order Success Rate – Improved success rate from 90% to 95% by fixing bugs and optimizing backend workflows.</li>
      </ul>
    </section>
  );
}
