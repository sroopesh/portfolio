import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import styles from "./Header.module.css";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`container header text-center ${styles.header}`}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          marginTop: "2rem",
        }}
      >
        HELLO, I'M A FULL-STACK DEVELOPER.
      </h1>
      <h1
        style={{
          fontSize: "2rem",
          marginBottom: "1rem",
          marginTop: "2rem",
          position: "relative",
          right: "17%",
        }}
      >
        I build web applications.
      </h1>
      {/* <div className={`flex gap-4 mt-2 ${styles.icons}`}>
        <a
          href="https://www.linkedin.com/in/roopesh-srinivasa-34791015b"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-blue-700 w-6 h-6 hover:scale-125 transition-transform duration-200" />
        </a>
        <a href="mailto:roopeshmahi.7@gmail.com">
          <FaEnvelope className="w-6 h-6 hover:scale-125 transition-transform duration-200" />
        </a>
        <a href="tel:+919036629114">
          <FaPhone className="w-6 h-6 hover:scale-125 transition-transform duration-200" />
        </a>
      </div> */}
    </motion.header>
  );
}

export default Header;
