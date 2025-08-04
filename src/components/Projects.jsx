import { motion } from 'framer-motion';
import { Award, Brain, Code, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Empathy AI – Generative AI-Powered Mental Health Assistant",
      subtitle: "Winner – Visionova Hackathon",
      description: "Built a full-stack web app using React, Node.js, MongoDB, and Hugging Face Transformers. Integrated OpenAI APIs to deliver personalized, privacy-first mental health responses. Scalable to 100+ concurrent sessions; designed for ethical AI use in emotional support.",
      technologies: ["React", "Node.js", "MongoDB", "Hugging Face", "OpenAI API"],
      points: [
        "Built a full-stack web app using React, Node.js, MongoDB, and Hugging Face Transformers",
        "Integrated OpenAI APIs to deliver personalized, privacy-first mental health responses",
        "Scalable to 100+ concurrent sessions",
        "Designed for ethical AI use in emotional support",
        "Winner at Visionova National-Level Hackathon"
      ],
      metrics: [
        "100+ concurrent sessions",
        "Real-time response generation",
        "Privacy-first design implementation"
      ],
      icon: Award,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Sudoku Solver using Neural Networks",
      description: "Developed a real-time Sudoku solver using TensorFlow CNNs and OpenCV for grid and digit detection. Achieved 92% accuracy without traditional backtracking or constraint logic. Showcased the power of AI in structured vision-based problem-solving.",
      technologies: ["TensorFlow", "OpenCV", "CNN", "Python"],
      points: [
        "Developed a real-time Sudoku solver using TensorFlow CNNs and OpenCV",
        "Grid and digit detection using computer vision techniques",
        "Achieved 92% accuracy without traditional backtracking or constraint logic",
        "Showcased the power of AI in structured vision-based problem-solving",
        "Real-time processing and solving capabilities"
      ],
      metrics: [
        "92% accuracy rate",
        "Real-time solving capability",
        "Computer vision integration"
      ],
      icon: Brain,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "RefineX – AI-Powered Data Cleaning & EDA Assistant",
      description: "Designed a Streamlit app integrating OpenAI GPT for natural-language-based EDA automation. Enabled one-click data profiling and cleaning via conversational prompts. Reduced data preprocessing time by 60% across multiple datasets.",
      technologies: ["Streamlit", "OpenAI GPT", "Python", "Data Analysis"],
      points: [
        "Designed a Streamlit app integrating OpenAI GPT for natural-language-based EDA automation",
        "Enabled one-click data profiling and cleaning via conversational prompts",
        "Reduced data preprocessing time by 60% across multiple datasets",
        "Natural language interface for data analysis",
        "Automated EDA report generation"
      ],
      metrics: [
        "60% time reduction in data preprocessing",
        "One-click data profiling",
        "Natural language interface"
      ],
      icon: Code,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const publications = [
    {
      title: "Emotion Detection from EEG Signals using a CNN-Transformer Hybrid Architecture",
      status: "Ongoing",
      description: "Designing a deep learning model combining CNNs (for spatial pattern extraction) and Transformers (for temporal EEG signal modeling). Aims at real-time multi-class emotion classification for use in mental health and affective computing. Targeting submission to IEEE EMBC or NeurIPS 2025.",
      technologies: ["CNN", "Transformer", "EEG", "Deep Learning", "Python"],
      points: [
        "Designing a deep learning model combining CNNs for spatial pattern extraction",
        "Transformers for temporal EEG signal modeling",
        "Real-time multi-class emotion classification",
        "Targeting submission to IEEE EMBC or NeurIPS 2025",
        "Application in mental health and affective computing"
      ],
      metrics: [
        "Real-time classification capability",
        "Multi-class emotion detection",
        "Hybrid architecture design"
      ],
      icon: Brain,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Neural Style Transfer",
      status: "Published on Ready Tensor",
      description: "Built a pipeline for artistic image generation using pre-trained VGG19 to blend content and style images. Used Gram matrices and weighted content-style loss with Adam optimizer for stylization. Supports tunable blending via hyperparameters; built with TensorFlow, OpenCV, NumPy, Matplotlib.",
      technologies: ["VGG19", "TensorFlow", "OpenCV", "NumPy", "Matplotlib"],
      points: [
        "Built a pipeline for artistic image generation using pre-trained VGG19",
        "Blend content and style images using Gram matrices",
        "Weighted content-style loss with Adam optimizer for stylization",
        "Supports tunable blending via hyperparameters",
        "Published on Ready Tensor platform"
      ],
      metrics: [
        "Published research paper",
        "Tunable hyperparameters",
        "Artistic image generation"
      ],
      link: "#",
      icon: Sparkles,
      color: "from-pink-500 to-rose-500"
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
            Academic Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative projects that demonstrate expertise in AI/ML, computer vision, and full-stack development.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                <div className={`p-3 bg-gradient-to-r ${project.color} rounded-xl flex-shrink-0 flex justify-center sm:justify-start`}>
                  <project.icon className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                  {project.subtitle && (
                    <p className="text-sm text-blue-600 font-medium mb-2">{project.subtitle}</p>
                  )}
                </div>
              </div>
              
              <div className="sm:ml-16">
                <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                  {project.description}
                </p>
                
                {/* Key Points */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Metrics & Achievements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <span
                        key={metricIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs font-medium border border-blue-200"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/80 text-gray-700 rounded-full text-sm font-medium border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Publications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Publications & Research
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center mb-12">
            Ongoing research projects and published work in cutting-edge AI/ML domains, focusing on neural networks, computer vision, and real-time emotion detection systems.
          </p>
          
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                  <div className={`p-3 bg-gradient-to-r ${pub.color} rounded-xl flex-shrink-0 flex justify-center sm:justify-start`}>
                    <pub.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{pub.title}</h4>
                    <p className="text-sm text-purple-600 font-medium">{pub.status}</p>
                  </div>
                </div>
                
                <div className="sm:ml-16">
                  <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                    {pub.description}
                  </p>
                  
                  {/* Key Points */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Research Highlights:</h4>
                    <ul className="space-y-1">
                      {pub.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Metrics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pub.metrics.map((metric, metricIndex) => (
                        <span
                          key={metricIndex}
                          className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-medium border border-purple-200"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/80 text-gray-700 rounded-full text-sm font-medium border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  

                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 