import React from "react";
import styles from "./Resume.module.css";
import { FaDownload } from "react-icons/fa";

export default function Resume() {
  return (
    <section
      id="resume"
      className={`container max-w-5xl mx-auto p-8 scroll-mt-32 ${styles.resume}`}
    >
      <h2 className="text-4xl font-semibold mb-5 text-white">RESUME</h2>
      <a
        href="/Resume_Roopesh_Srinivasa.pdf"
        download
        className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
      >
        <FaDownload className="text-xl font-bold" />
        Download Resume
      </a>
    </section>
  );
}
