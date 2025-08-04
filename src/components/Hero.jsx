import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = ({ setActiveSection }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    'AI Engineer',
    'AI Tutor',
    'DSA Tutor',
    'ML Developer',
    'Computer Vision Expert',
    'Research Scholar'
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
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center py-20 pt-32 sm:pt-20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left w-full"
          >
            {/* Greeting */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200/50 shadow-sm"
              >
                <Sparkles size={16} className="mr-2 text-blue-500" />
                Available for opportunities
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Srivardhan Rao
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                AI Engineer with hands-on experience building full-stack applications and solving complex technical problems across domains. 
                Winner of Visionova National-Level Hackathon, published researcher, and passionate about AI/ML development with 92% accuracy in neural networks.
              </motion.p>
            </div>

            {/* Single CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Kondu_Srivardhan_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="flex items-center justify-center px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:shadow-blue-500/25 shadow-lg group"
              >
                <Download size={22} className="mr-3 group-hover:scale-110 transition-transform duration-300" />
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Professional Image/Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end w-full"
          >
            <div className="relative">
              {/* Main Circle with enhanced gradients */}
              <div className="w-80 h-80 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-full flex items-center justify-center shadow-2xl relative">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-inner">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-white mb-2 drop-shadow-lg">SR</div>
                      <div className="text-white font-medium drop-shadow-md min-h-[1.5rem] flex items-center justify-center">
                        {currentText}
                        <span className="animate-pulse">|</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-200 rounded-full flex items-center justify-center shadow-lg border-2 border-green-200"
              >
                <span className="text-green-600 font-bold">AI</span>
              </motion.div>
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-orange-100 to-red-200 rounded-full flex items-center justify-center shadow-lg border-2 border-orange-200"
              >
                <span className="text-orange-600 font-bold">ML</span>
              </motion.div>
              <motion.div 
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center shadow-lg border-2 border-blue-200"
              >
                <span className="text-blue-600 font-bold">DL</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 