// // src/components/Achievements.js
// import React from 'react';
// import styles from './Achievements.module.css'

// export default function Achievements() {
//   return (
//     <section id="achievements" className={`container max-w-5xl mx-auto p-8 scroll-mt-32 ${styles.achievements}`}>
//       <h2 className="text-3xl font-semibold mb-4 text-white-800">ACHIEVEMENTS</h2>
//       <ul className="list-disc pl-5 space-y-2">
//         <li>Hackathon Finalist – Built a speech-to-text app within 1 month and reached the final round.</li>
//         <li>Client Appreciation – Recognized for resolving 20+ critical issues and meeting tight deadlines.</li>
//         <li>Order Success Rate – Improved success rate from 90% to 95% by fixing bugs and optimizing backend workflows.</li>
//       </ul>
//     </section>
//   );
// }
// src/components/Achievements.js
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, TrendingUp } from 'lucide-react';
import styles from './Achievements.module.css';

export default function Achievements() {
  const achievements = [
    {
      icon: <Trophy size={32} />,
      title: 'Hackathon Finalist',
      description: 'Built a speech-to-text app within 1 month and reached the final round.'
    },
    {
      icon: <Star size={32} />,
      title: 'Client Appreciation',
      description: 'Recognized for resolving 20+ critical issues and meeting tight deadlines.'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Order Success Rate',
      description: 'Improved success rate from 90% to 95% by fixing bugs and optimizing backend workflows.'
    }
  ];

  return (
    <section id="achievements" className={`container max-w-5xl mx-auto p-8 scroll-mt-32 ${styles.achievements}`}>
      <h2 className="text-4xl font-bold mb-8 text-white">ACHIEVEMENTS</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg border border-gray-700 flex flex-col items-center text-center space-y-4 transition-all duration-300"
          >
            <div className="text-indigo-400">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
