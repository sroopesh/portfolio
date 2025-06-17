// src/components/Experience.js
import React from "react";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section
      id="experience"
      className={`container max-w-5xl mx-auto p-8 my-6 scroll-mt-32 ${styles.experience}`}
    >
      <h2 className="text-3xl font-semibold mb-4 text-white">EXPERIENCE</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-white">
            Full Stack Developer – Brillio Technologies
          </h3>
          <p className="text-sm text-gray-400">
            May 2022 – Present | Bengaluru, India
          </p>
          <h3 className="text-white">
            A technology consulting firm specializing in digital transformation
          </h3>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Led the migration of 30K+ lines of legacy C++ code to Java,
              delivering critical Read/Write modules within strict timelines.
            </li>
            <li>
              Developed 6+ full-stack features, including API creation and JUnit
              testing, achieving a test coverage of 95%.
            </li>
            <li>
              Resolved 20+ production issues and 25+ Jira bugs, significantly
              improving platform stability and reducing system downtime by 30%.
            </li>
            <li>
              Engineered Angular UI components, introducing features like
              advanced filtering, searching, and meeting scheduling, enhancing
              user engagement.
            </li>
            <li>
              Collaborated with cross-functional teams to streamline development
              processes, meeting deadlines 3–4 days ahead
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">
            Full Stack Developer – Accenture
          </h3>
          <p className="text-sm text-gray-400">
            July 2021 – May 2022 | Bengaluru, India
          </p>
          <h3 className="text-white">
            A multinational professional services company specializing in IT services and consulting
          </h3>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Built and deployed 250+ chatbots, improving customer engagement
              across multiple platforms
            </li>
            <li>
              Integrated features such as speech-to-text and text-to-speech,
              increasing chatbot usage by 70%
            </li>
            <li>
              Revamped web applications using Angular 8, leading to a 15%
              increase in usability scores
            </li>
            <li>
              Conducted code reviews, pair programming, and debugging sessions,
              improving overall code quality and maintainability
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
