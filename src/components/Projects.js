// src/components/Projects.js
import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto p-8 my-6 scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4 text-blue-800">Projects</h2>
      <div className="space-y-6">
        {[
          {
            title: 'ASCO Website',
            desc: 'Developed Angular frontend for a medical site with CMS integration, secure login, dynamic filters, and 30+ bug fixes.'
          },
          {
            title: 'Verizon System Modernization',
            desc: 'Migrated legacy C++ to Java, built full-stack features and REST APIs with 95% test coverage.'
          },
          {
            title: 'Speech-to-Text Web App',
            desc: 'Built a browser-based real-time transcription tool with PDF/Word export using JS.'
          },
          {
            title: 'Travel Booking Website',
            desc: 'Created a travel booking platform using WordPress and a custom frontend.'
          },
          {
            title: 'Hand Gesture Recognition',
            desc: 'Built a deep learning system to recognize hand gestures and convert them into text using CNNs.'
          }
        ].map(project => (
          <div key={project.title} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-blue-700">{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
