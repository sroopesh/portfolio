// src/components/Resume.js
import React from 'react';

export default function Resume() {
  return (
    <section id="resume" className="container max-w-5xl mx-auto p-8 scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4 text-blue-800">Resume</h2>
      <a
        href="/Roopesh_Srinivasa_Resume.pdf"
        download
        className="text-blue-600 underline hover:text-blue-800 transition-colors"
      >
        Download My Resume
      </a>
    </section>
  );
}
