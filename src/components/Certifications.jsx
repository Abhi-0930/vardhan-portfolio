import { FileText, Star, Target, Users, Calendar } from 'lucide-react';

const Certifications = () => {
  const credentials = [
    {
      title: "Microsoft Certified: AI Fundamentals (AI-900)",
      issuer: "Microsoft",
      date: "2023",
      description: "Industry-recognized certification validating expertise in AI concepts, machine learning principles, and Azure AI services—ensuring students receive training backed by global standards.",
      icon: FileText,
      color: "bg-gray-900",
      category: "Microsoft Certified"
    },
    {
      title: "International Computer Vision Competition Participant",
      issuer: "Ready Tensor",
      date: "2023",
      description: "Competed in advanced computer vision challenges at international level, implementing state-of-the-art models—bringing cutting-edge industry practices directly into classroom training.",
      icon: Target,
      color: "bg-gray-800",
      category: "Industry Competition"
    }
  ];

  const achievements = [
    {
      title: "9000+ Students Mentored",
      description: "Successfully trained and mentored students across 20+ institutions in AI, DSA, and Python programming",
      icon: Users,
      color: "bg-gray-900"
    },
    {
      title: "Published Research",
      description: "Published research on Neural Style Transfer on Ready Tensor platform",
      icon: Star,
      color: "bg-gray-800"
    },
    {
      title: "4+ Years Experience",
      description: "Extensive experience in AI training, DSA mentoring, and project supervision",
      icon: Calendar,
      color: "bg-gray-700"
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-black">
            Industry Credentials & Training Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bringing industry-certified expertise and real-world experience into every training session. My credentials ensure students learn from someone who practices what they teach, combining theoretical knowledge with hands-on industry insights.
          </p>
        </div>

        {/* Professional Credentials Grid */}
        <div className="mb-16">

          <div className="grid lg:grid-cols-2 gap-8">
            {credentials.map((cert, index) => (
              <div
                key={index}
                className="bg-white backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`p-3 ${cert.color} rounded-xl flex-shrink-0`}>
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
              </div>
            ))}
          </div>
        </div>

        {/* Training Impact & Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Training Impact & Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`p-4 ${achievement.color} rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                  <achievement.icon className="text-white" size={28} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications; 