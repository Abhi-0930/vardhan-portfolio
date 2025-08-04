import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Student Feedback', id: 'student-feedback' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' }
  ];

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'srivardhan.kondu@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 6302771540' },
    { icon: MapPin, label: 'Location', value: 'Hyderabad, India' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-transparent to-gray-900/20"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">SR</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Srivardhan Rao
                  </h3>
                  <p className="text-blue-400 text-sm font-medium">AI Engineer</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                AI Engineer with hands-on experience building full-stack applications and solving complex technical problems across domains.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <info.icon className="w-4 h-4 text-blue-400" />
                    <span className="text-sm">{info.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div>
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Quick Links
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {quickLinks.slice(0, 6).map((link, index) => (
                    <motion.a
                      key={index}
                      href={`#${link.id}`}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Expertise
                </h3>
                <div className="space-y-3">
                  {[
                    'AI/ML Development',
                    'Full-Stack Development', 
                    'Computer Vision',
                    'Research & Publications',
                    'DSA & Problem Solving',
                    'Student Mentorship'
                  ].map((expertise, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-sm">{expertise}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700/50 mt-16 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Srivardhan Rao.</span>
              
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 