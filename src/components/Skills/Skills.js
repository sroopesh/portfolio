// src/components/Skills.js
import React from "react";
import { motion } from 'framer-motion';

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
      className="container max-w-5xl mx-auto p-8 bg-white rounded-2xl shadow-md my-6 scroll-mt-32"
    >
      <h2 className="text-2xl font-semibold mb-4 text-blue-800">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 list-disc pl-5">
        {skills.map((skill) => (
          <li key={skill} className="text-gray-700">
            {skill}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
