import { motion } from 'framer-motion';
import { Sparkles, User, Heart } from 'lucide-react';

const About = () => {
  return (
    <section className="pt-20 pb-6 -mt-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        {/* Clean 2-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center justify-items-center">
          {/* Left Column - About Me Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8 w-full"
          >
            {/* About Me Text */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl mr-4 shadow-lg">
                  <Heart className="text-blue-600" size={28} />
                </div>
                My Story
              </h3>
              
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  I am a passionate AI Engineer with a deep love for technology and innovation. My journey in the world of artificial intelligence began with a simple curiosity about how machines can learn and think like humans.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  I believe in the power of technology to make a positive impact on people's lives. My passion lies in creating intelligent solutions that can solve real-world problems and help others.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  When I'm not coding or working on AI projects, I enjoy mentoring others and sharing knowledge. I believe that the best way to learn is by teaching, and I love helping others discover the amazing world of technology.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  My goal is to continue growing as a developer and contribute to meaningful projects that can make a difference in the world. I'm always excited to learn new things and take on new challenges.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center items-center w-full"
          >
            <div className="text-center">
              {/* Professional Circular Photo */}
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-full flex items-center justify-center shadow-2xl border-4 border-white mb-6 overflow-hidden">
                <img 
                  src="/profile-img.jpg" 
                  alt="Srivardhan Rao" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Professional name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Srivardhan Rao
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 