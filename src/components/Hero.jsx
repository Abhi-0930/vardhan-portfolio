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
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                AI & DSA Trainer empowering 9000+ students across 20+ premier institutions in India. 
                Specializing in hands-on training with 96% placement success rates, transforming theoretical concepts into career-ready skills through intensive bootcamps, live projects, and personalized mentorship.
              </motion.p>
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