
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="p-8 bg-white shadow-md">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-900">Roopesh Srinivasa</h1>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="https://www.linkedin.com/in/roopesh-srinivasa-34791015b" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-blue-700 w-6 h-6 hover:scale-125 transition-transform duration-200" />
          </a>
          <a href="mailto:roopeshmahi.7@gmail.com">
            <FaEnvelope className="w-6 h-6 hover:scale-125 transition-transform duration-200" />
          </a>
          <a href="tel:+919036629114">
            <FaPhone className="w-6 h-6 hover:scale-125 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </div>
  );
}
