// src/components/Experience.js
import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto p-8 my-6 scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4 text-blue-800">Experience</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-blue-700">Full Stack Developer – Brillio Technologies</h3>
          <p className="text-sm text-gray-600">May 2022 – Present | Bengaluru, India</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Led migration of 30K+ lines from C++ to Java, delivering key modules under tight deadlines.</li>
            <li>Built 6+ full-stack features and achieved 95% test coverage.</li>
            <li>Resolved 20+ production issues, reducing downtime by 30%.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-700">Full Stack Developer – Accenture</h3>
          <p className="text-sm text-gray-600">July 2021 – May 2022 | Bengaluru, India</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Built and deployed 250+ chatbots with speech features, increasing usage by 70%.</li>
            <li>Revamped Angular web apps, improving usability by 15%.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
