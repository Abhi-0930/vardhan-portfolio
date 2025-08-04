import { motion } from 'framer-motion';
import { Briefcase, Users, Code, Award, Sparkles, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Freelance AI & DSA Trainer / Project Mentor",
      company: "Remote / On-site (India)",
      duration: "June 2022 – Present",
      description: "Delivered hands-on training, mentorship, and project supervision in AI, Python, and DSA to over 500 students across 8+ institutions.",
      achievements: [
        "Mentored real-world projects in NLP, Computer Vision, and core algorithm design using Python",
        "Created and led problem-solving bootcamps targeting service/product-based placements",
        "Achieved 92% placement outcomes at Government Engineering College, Thrissur",
        "Delivered AI-focused sessions and mentored 150+ B.Tech students at Sridevi Women's Engineering College",
        "Taught Python + basic DSA at Ballari Institute of Technology & Management",
        "Led AI + DSA workshops at Annamacharya Institute of Technology & Sciences",
        "Project mentor for image classification (AI) and search optimization (DSA) at Vignan's Institute",
        "Trained students in DSA + AI tools for research projects at SR University",
        "Led logic-building bootcamps at Kakatiya Institute of Technology & Science (KITS)"
      ],
      icon: Users,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Freelance Client Projects",
      company: "UK",
      duration: "2022 – Present",
      description: "Delivered AI-based automation tools, dashboards, and chatbots; mentored developers on reusable Python code and testing.",
      achievements: [
        "Built and deployed ML models",
        "Assisted in backend DSA logic for recommendation systems and pattern detection",
        "Mentored developers on reusable Python code and testing"
      ],
      icon: Code,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Newbie Learning — Teaching Assistant & AI Mentor",
      company: "Hyderabad, IN",
      duration: "June 2022 – Jan 2024",
      description: "Mentored 50+ students in AI + DSA; improved code quality and logic-building skills by 40%.",
      achievements: [
        "Built micro-projects in spam detection, chatbot design, and classic DSA puzzles",
        "Improved code quality and logic-building skills by 40%"
      ],
      icon: Award,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const mentorshipProjects = [
    {
      title: "Placement Prep Bootcamp",
      description: "Trained 100+ students in sorting, recursion, greedy, DP, trees, and graphs using Python",
      icon: Sparkles,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Code Sprint Lab (for 3 colleges)",
      description: "Led 2-week competitive programming sprint with live problem-solving",
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "DSA Crash Course",
      description: "Designed and delivered modules with 200+ curated problems (LC/GFG level)",
      icon: Briefcase,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Mock Interview Platform (mini-project)",
      description: "Mentored students to build a DSA mock interview simulator using Python + SQLite",
      icon: Users,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Dynamic Path Planner",
      description: "Guided a project on shortest path algorithms (Dijkstra, A*) applied to logistics data",
      icon: MapPin,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Student Management CLI App",
      description: "Focused on implementing core DSA operations (linked lists, trees, hashmaps) in real use cases",
      icon: Calendar,
      color: "from-yellow-500 to-orange-500"
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Freelance Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Extensive experience in AI training, DSA mentoring, and project supervision across multiple institutions and clients.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-12 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex-shrink-0 flex justify-center sm:justify-start">
                  <div className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <exp.icon className="text-white" size={28} />
                  </div>
                </div>
                
                <div className="flex-1 bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200/50">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 space-y-1 sm:space-y-0">
                        <span className="font-medium">{exp.company}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm sm:text-base">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Mentorship Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Selected DSA + Python Mentorship Projects
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {mentorshipProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                  <div className={`p-3 bg-gradient-to-r ${project.color} rounded-xl flex-shrink-0`}>
                    <project.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{project.title}</h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Experience; 