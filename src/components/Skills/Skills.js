// // src/components/Skills.js
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import styles from "./Skills.module.css";

const skills = [
  "HTML5", "CSS3", "JavaScript", "Angular", "ReactJS", "Redux",
  "TypeScript", "NextJs", "SCSS", "GraphQL", "GIT", "JIRA",
  "BitBucket", "REST APIs", "VueJs", "Jest", "NPM", "Java",
  "Data Structures & Algorithms", "Adobe Experience Manager 6.5",
  "Figma", "Webiny CMS", "Okta", "Storybook", "NodeJS", "AWS",
  "API Gateway", "Postman", "Contentful", "Google Analytics",
  "ExpressJS", "MongoDB", "Agile Methodology", "Scrum", "Teamwork",
  "Leadership", "Technical Analysis", "Problem Solving",
  "Effective Communication", "Cross-Functional Collaboration"
];


export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="skills"
      className={`container max-w-5xl mx-auto p-8 scroll-mt-32 ${styles.skills}`}
    >
      <h2 className="text-4xl font-bold mb-6 text-white">SKILLS</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full shadow hover:bg-indigo-600 transition duration-300 cursor-pointer"
          >
            <Star size={16} className="text-indigo-400" />
            <span>{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
