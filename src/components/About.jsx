import { Sparkles, User } from 'lucide-react';

const About = () => {
  return (
    <section className="pt-20 pb-6 -mt-20 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-black">
            About Me
          </h2>
        </div>

        {/* Clean 2-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center justify-items-center">
          {/* Left Column - About Me Content */}
          <div className="space-y-8 w-full">
            {/* About Me Text */}
            <div className="bg-white backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  As a dedicated AI & DSA Trainer, I've had the privilege of mentoring over 9000+ students across 20+ premier institutions throughout India. My journey in education has been driven by a singular mission: transforming theoretical knowledge into practical, career-ready skills.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  My teaching methodology combines hands-on project work with real-world problem-solving. Whether it's guiding students through complex Neural Networks achieving 96% accuracy or helping them master Data Structures & Algorithms for top tech placements, I focus on building both technical competence and problem-solving confidence.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  At Government Engineering College, Thrissur, I achieved 92% placement outcomes through intensive DSA bootcamps. At Sridevi Women's Engineering College, I mentored 150+ students in AI/ML, focusing on industry-ready projects in NLP and Computer Vision. Each institution has been a unique learning experience, allowing me to refine my approach to teaching and mentorship.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  Beyond classroom training, I've designed and delivered specialized programs including Placement Prep Bootcamps, Code Sprint Labs, and Mock Interview Platforms. My goal is not just to teach concepts, but to build careers—empowering students with the skills, confidence, and practical experience needed to excel in the competitive tech industry.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Professional Photo */}
          <div className="flex justify-center items-center w-full">
            <div className="text-center">
              {/* Professional Circular Photo - Enlarged */}
              <div className="w-[28rem] h-[28rem] bg-gray-200 rounded-full flex items-center justify-center shadow-2xl border-4 border-white mb-6 overflow-hidden">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 