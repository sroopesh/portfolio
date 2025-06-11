// // src/components/About.js
// import React from "react";
// import { motion } from 'framer-motion';
// import styles from './About.module.css';

// export default function About() {
//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//       id="about"
//       className={`container max-w-5xl mx-auto p-8 scroll-mt-32 ${styles.about}`}
//     >
//       <h2 className={`text-3xl font-semibold mb-4  ${styles.text}`}>SUMMARY</h2>
//       <p className="leading-relaxed">
//         Detail-oriented Full Stack Developer with 3.10+ years of experience
//         building scalable, user-focused web applications using Angular,
//         JavaScript, TypeScript, Node.js, Java, and AWS. Proficient in front-end
//         and back-end development, clean code practices, performance
//         optimization, and API security.
//       </p>
//     </motion.section>
//   );
// }

// src/components/About.js
import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import { Code2 } from "lucide-react";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="about"
      className={`container max-w-5xl mx-auto p-8 scroll-mt-32 ${styles.about}`}
    >
      <motion.div
        className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl border border-gray-700"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Code2 size={32} className="text-indigo-400" />
          <h2 className="text-4xl font-bold">SUMMARY</h2>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="leading-relaxed text-gray-300 text-lg"
        >
          Detail-oriented Full Stack Developer with 3.10+ years of experience
          building scalable, user-focused web applications using Angular,
          JavaScript, TypeScript, Node.js, Java, and AWS. Proficient in front-end
          and back-end development, clean code practices, performance
          optimization, and API security.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}

