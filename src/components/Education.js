// src/components/Education.js
import React from 'react';

export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto p-8 scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4 text-blue-800">Education</h2>
      <ul className="space-y-4">
        <li>
          <h3 className="font-semibold text-blue-700">B.Tech – Dayananda Sagar University</h3>
          <p>Bengaluru, India | GPA: 8.89 / 10</p>
        </li>
        <li>
          <h3 className="font-semibold text-blue-700">Pre-University – Jain University</h3>
          <p>Bengaluru, India | GPA: 9 / 10</p>
        </li>
        <li>
          <h3 className="font-semibold text-blue-700">Secondary (ICSE) – Sree Rama Vidyalaya</h3>
          <p>Bengaluru, India | GPA: 9 / 10</p>
        </li>
      </ul>
    </section>
  );
}
