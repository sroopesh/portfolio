import React from "react";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section
      id="education"
      className={`container max-w-5xl mx-auto p-8 scroll-mt-32 ${styles.education}`}
    >
      <h2 className="text-4xl font-semibold mb-8 text-white">EDUCATION</h2>
      <ul className={`flex flex-wrap gap-6 ${styles.educationList}`}>
        <li className={`bg-gray-900 text-white ${styles.educationCard}`}>
          <h3 className="font-semibold text-1/2xl mb-2">
            B.Tech
          </h3>
          <h3 className=" font-semibold text-xl mb-2">
            Dayananda Sagar University
          </h3>
          <p>Bengaluru, India | GPA: 8.89 / 10</p>
        </li>
        <li className={`bg-gray-900 text-white ${styles.educationCard}`}>
          <h3 className="font-semibold text-1/2xl mb-2">
            Pre-University
          </h3>
          <h3 className="font-semibold text-xl mb-2">
            Jain University
          </h3>
          <p>Bengaluru, India | GPA: 9 / 10</p>
        </li>
        <li className={`bg-gray-900 text-white ${styles.educationCard}`}>
          <h3 className="font-semibold text-1/2xl mb-2">
            Secondary (ICSE)
          </h3>
          <h3 className="font-semibold text-xl mb-2">
            Sree Rama Vidyalaya
          </h3>
          <p>Bengaluru, India | GPA: 9 / 10</p>
        </li>
      </ul>
    </section>
  );
}
