import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = ({ setActiveSection }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    'AI Trainer',
    'DSA Mentor',
    'ML Instructor',
    'Placement Coach',
    'Technical Educator'
  ];

  useEffect(() => {
    const currentTitle = titles[currentTextIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const deletingSpeed = 50;

    if (!isDeleting && currentText === currentTitle) {
      // Wait before starting to delete
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentTitle.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentTitle.substring(0, currentText.length + 1));
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, titles]);
  return (
    <section className="min-h-screen bg-white flex items-center justify-center py-20 pt-32 sm:pt-20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-100 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-100 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-50 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left w-full"
          >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Hi, I'm{' '}
                <span className="text-black">
                  Srivardhan Rao
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full bg-gray-100 text-gray-800 px-4 py-2 text-sm font-medium"
                aria-label="AI and DSA Trainer badge"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                DSA Trainer
              </motion.div>

              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="space-y-3 text-gray-700"
              >
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.59a.75.75 0 1 0-1.22-.87l-3.22 4.53-1.56-1.56a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.15-.094l3.66-5.32Z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-lg leading-relaxed">Empowered 9,000+ students across 20+ premier institutions</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.59a.75.75 0 1 0-1.22-.87l-3.22 4.53-1.56-1.56a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.15-.094l3.66-5.32Z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-lg leading-relaxed">Hands-on AI, ML, and DSA bootcamps with real projects</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.59a.75.75 0 1 0-1.22-.87l-3.22 4.53-1.56-1.56a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.15-.094l3.66-5.32Z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-lg leading-relaxed">96% placement success through interview-focused training</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.59a.75.75 0 1 0-1.22-.87l-3.22 4.53-1.56-1.56a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.15-.094l3.66-5.32Z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-lg leading-relaxed">Personalized mentorship and career roadmap guidance</span>
                </li>
              </motion.ul>
          </motion.div>

          {/* Right Side - Animated Black Circle with Typing Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex justify-center lg:justify-end w-full"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-black rounded-full flex items-center justify-center shadow-2xl px-16 py-12"
            >
              <div className="text-center">
                <div className="text-white font-medium text-2xl flex items-center justify-center">
                  {currentText}
                  <span className="animate-pulse ml-1">|</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 