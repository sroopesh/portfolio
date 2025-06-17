// src/components/Projects.js
import React from 'react';
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects" className={`container max-w-5xl mx-auto p-8 my-6 scroll-mt-32 ${styles.projects}`}>
      <h2 className="text-4xl font-semibold mb-4 text-white">PROJECTS</h2>
      <div className="space-y-6">
        {[
          {
            title: 'ASCO Website – Feature Development and Optimization',
            desc: `Developed and enhanced frontend features for a medical association website using Angular and Python, improving user experience, platform reliability, and release efficiency.
- Created multiple user-facing pages including Sign-in and Meeting Registration using Angular, with integrated Webby CMS and Okta for secure authentication and content management.
- Implemented advanced UI components such as dynamic search filters, meeting scheduling tools, and content accessibility features to boost user engagement.
- Resolved 30+ production issues and 40+ Jira bugs, improving platform stability and reducing system downtime by 30%.
- Delivered multiple feature updates on tight timelines, consistently completing sprints 3–4 days ahead of schedule through efficient collaboration.`
          },
          {
            title: 'Verizon Wireless – Legacy System Modernization & Feature Development',
            desc: `Contributed to modernizing legacy systems and developing new features for Verizon’s internal services platform using Java and full-stack technologies.
- Led the migration of 30,000+ lines of legacy C++ code to Java, delivering high-priority RoadWriter modules under tight deadlines, improving maintainability and performance.
- Developed 15+ full-stack features, including RESTful API endpoints, UI components, and backend services, enhancing system functionality and user experience.
- Achieved 95% unit test coverage through robust JUnit testing, ensuring reliability and reducing production bugs.
- Collaborated with cross-functional teams to integrate new features into existing systems, accelerating development cycles and ensuring smooth deployments.`
          },
          {
            title: 'Speech-to-Text Web Application – Hackathon Project',
            desc: `Built a real-time voice transcription tool using core web technologies for fast, accurate speech recognition and document export.
- Developed a browser-based speech-to-text web app using JavaScript, HTML, and CSS within 1 month as part of a hackathon challenge.
- Implemented real-time voice recognition with 95%+ accuracy, allowing users to transcribe speech directly in the browser.
- Enabled output functionality for transcribed text in PDF and Word formats, supporting both usability and accessibility.
- Created a lightweight, responsive UI optimized for quick interactions and cross-device compatibility.`
          },
          {
            title: 'WordPress Booking Website – Custom WordPress & Web App Development',
            desc: `Designed and developed a travel-focused web platform to streamline bookings and enhance user experience for clients and end users.
- Built a responsive WordPress website with tailored themes and plugins to align with specific client branding and functionality requirements.
- Integrated a custom booking web application offering efficient package selection, ticket booking, and itinerary management.
- Enhanced user-side data security and performance for the travel agency by integrating booking workflows and dynamic content.`
          },
          {
            title: 'Hand Gesture Recognition System',
            desc: `Designed and built a deep learning-based model that converts hand gestures into text using CNNs, with custom UI and AI sentence-building features.
- Developed a convolutional neural network for gesture recognition using Convolutional Neural Networks (CNNs) for video-based, hand-signed signals from webcam input.
- Achieved 92%+ accuracy in real-time gesture recognition.
- Built a dynamic front-end application using ReactJS for users to select gestures and enable sentence formation by merging recognized signs.
- Integrated Google Text-to-Speech API to convert recognized gestures into audible speech outputs for better accessibility.
- Enhanced user experience through speech customization features, enabling personalized computer interactions for hearing-impaired training.`
          }
        ].map(project => (
          <div key={project.title} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-black mb-4">{project.title}</h3>
            <pre className="whitespace-pre-wrap text-black text-[1rem] font-medium">{project.desc}</pre>
          </div>
        ))}
      </div>
    </section>
  );
}
