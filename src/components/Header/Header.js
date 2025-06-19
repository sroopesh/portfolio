import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Header.module.css";
import styles from './Header.module.css'

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`container mx-auto text-left px-8 pt-44 pb-24 ${styles.header}`}
    >
      <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
        HELLO, I'M A FULL-STACK DEVELOPER.
      </h1>
      <p className="text-gray-400 text-xl mt-4 mb-8">I solve real-world problems with code</p>

      <div className="flex gap-5 mt-4">
        <a
          href="https://www.linkedin.com/in/roopesh-srinivasa-34791015b"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-blue-500 w-7 h-7 hover:scale-125 transition-transform duration-300" />
        </a>
        <a href="mailto:roopeshmahi.7@gmail.com">
          <FaEnvelope className="text-gray-300 w-7 h-7 hover:scale-125 transition-transform duration-300" />
        </a>
        <a href="tel:+919036629114">
          <FaPhone className="text-green-400 w-7 h-7 hover:scale-125 transition-transform duration-300" />
        </a>
      </div>
    </motion.header>
  );
}

export default Header;
