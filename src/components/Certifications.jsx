import { motion } from 'framer-motion';
import { Award, Trophy, FileText, Star, Target, Users, TrendingUp, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Winner, Visionova National-Level Hackathon – Empathy AI",
      issuer: "Visionova Hackathon",
      date: "2024",
      description: "Built a full-stack AI-powered mental health assistant using React, Node.js, and OpenAI APIs. Achieved first place among 500+ participants.",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
      category: "Hackathon"
    },
    {
      title: "Microsoft Certified: AI Fundamentals (AI-900)",
      issuer: "Microsoft",
      date: "2023",
      description: "Comprehensive understanding of AI concepts, machine learning, and Azure AI services. Validated expertise in fundamental AI principles.",
      icon: FileText,
      color: "from-blue-500 to-indigo-500",
      category: "Microsoft"
    },
    {
      title: "Complete Data Science & Machine Learning Bootcamp",
      issuer: "Udemy",
      date: "2023",
      description: "Mastered Python, statistics, machine learning algorithms, deep learning, and data visualization techniques.",
      icon: Award,
      color: "from-green-500 to-emerald-500",
      category: "Online Course"
    },
    {
      title: "Participant, International Computer Vision Competition",
      issuer: "Ready Tensor",
      date: "2023",
      description: "Competed in advanced computer vision challenges, implementing state-of-the-art models for image recognition tasks.",
      icon: Target,
      color: "from-purple-500 to-pink-500",
      category: "Competition"
    }
  ];

  const achievements = [
    {
      title: "500+ Students Mentored",
      description: "Successfully trained and mentored students across 8+ institutions in AI, DSA, and Python programming",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Published Research",
      description: "Published research on Neural Style Transfer on Ready Tensor platform",
      icon: Star,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "2+ Years Experience",
      description: "Extensive experience in AI training, DSA mentoring, and project supervision",
      icon: Calendar,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Recognized expertise and accomplishments in AI/ML, competitive programming, and educational leadership.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Certifications</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`p-3 bg-gradient-to-r ${cert.color} rounded-xl flex-shrink-0`}>
                    <cert.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{cert.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                      <span className="font-medium">{cert.issuer}</span>
                      <span>•</span>
                      <span>{cert.date}</span>
                      <span>•</span>
                      <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">{cert.category}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Achievements</h3>
                     <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`p-4 bg-gradient-to-r ${achievement.color} rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                  <achievement.icon className="text-white" size={28} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications; 