
import { useEffect, useState } from 'react';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Portfolio() {
  const [resumeUrl, setResumeUrl] = useState('');

  useEffect(() => {
    // Optional: you can host your PDF on Vercel or other hosting and link here
    setResumeUrl('/Roopesh_Srinivasa_Resume.pdf');
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <header className="p-8 bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold">Roopesh Srinivasa</h1>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="https://www.linkedin.com/in/roopesh-srinivasa-34791015b" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-blue-700 w-6 h-6" />
            </a>
            <a href="mailto:roopeshmahi.7@gmail.com">
              <FaEnvelope className="w-6 h-6" />
            </a>
            <a href="tel:+919036629114">
              <FaPhone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      <section className="max-w-5xl mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I am a Full Stack Developer with 3.9+ years of experience building scalable, user-focused web applications using Angular, JavaScript, TypeScript, Node.js, Java, and AWS. I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
        </p>
      </section>

      <section className="max-w-5xl mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 list-disc pl-5">
          {['Angular', 'ReactJS', 'JavaScript', 'Node.js', 'TypeScript', 'AWS', 'GraphQL', 'HTML5', 'CSS3', 'Java', 'MongoDB', 'ExpressJS', 'Git', 'JIRA'].map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="max-w-5xl mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold">ASCO Website</h3>
            <p>Improved UI and stability using Angular and Python for a large medical association site. Integrated CMS, advanced filtering, meeting registration, and secure login.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Speech-to-Text Web App</h3>
            <p>Real-time browser-based transcription tool using JavaScript with export support to PDF and Word.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Travel Booking Website</h3>
            <p>Created a travel booking platform with WordPress and a custom web app for seamless trip planning.</p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4">Resume</h2>
        <a href={resumeUrl} download className="text-blue-600 underline">Download My Resume</a>
      </section>

      <footer className="text-center p-4 bg-white shadow-inner">
        <p>© {new Date().getFullYear()} Roopesh Srinivasa. All rights reserved.</p>
      </footer>
    </main>
  );
}
