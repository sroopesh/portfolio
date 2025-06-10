// src/components/Skills.js
import React from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Angular",
  "ReactJS",
  "Redux",
  "TypeScript",
  "NextJs",
  "SCSS",
  "GraphQL",
  "GIT",
  "JIRA",
  "BitBucket",
  "REST APIs",
  "VueJs",
  "Jest",
  "Java",
  "NodeJS",
  "AWS",
  "API Gateway",
  "MongoDB",
  "ExpressJS",
];

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="skills"
      className={`container max-w-5xl mx-auto p-8 bg-gray-200 rounded-2xl shadow-md my-6 scroll-mt-32 ${styles.skills}`}
    >
      <h2 className="text-3xl font-semibold mb-4 text-black">SKILLS</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 pl-5">
        {skills.map((skill) => (
          <li key={skill} className="text-gray-900 flex items-start gap-2">
            <span className="text-black-500">★</span> {skill}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
