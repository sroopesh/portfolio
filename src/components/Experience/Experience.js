import React from "react";
import styles from "./Experience.module.css";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  return (
    <section
      id="experience"
      className={`container max-w-5xl mx-auto p-8 my-6 scroll-mt-32 ${styles.experience}`}
    >
      <h2 className="text-4xl font-semibold mb-8 text-white">EXPERIENCE</h2>
      <div className="grid gap-6">
        <div className="border border-gray-700 rounded-xl p-6 bg-[#111827] hover:border-purple-500 transition-all duration-300 shadow-md">
          <div className="flex items-center gap-3 mb-3 text-purple-400">
            <FaBriefcase className="text-lg" />
            <h3 className="text-xl font-bold text-white">
              Full Stack Developer – Brillio Technologies
            </h3>
          </div>
          <p className="text-sm text-gray-400 mb-1">
            May 2022 – Present | Bengaluru, India
          </p>
          <p className="text-white mb-4">
            A technology consulting firm specializing in digital transformation
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
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

        {/* Accenture */}
        <div className="border border-gray-700 rounded-xl p-6 bg-[#111827] hover:border-purple-500 transition-all duration-300 shadow-md">
          <div className="flex items-center gap-3 mb-3 text-purple-400">
            <FaBriefcase className="text-lg" />
            <h3 className="text-xl font-bold text-white">
              Full Stack Developer – Accenture
            </h3>
          </div>
          <p className="text-sm text-gray-400 mb-1">
            July 2021 – May 2022 | Bengaluru, India
          </p>
          <p className="text-white mb-4">
            A multinational professional services company specializing in IT
            services and consulting
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
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
