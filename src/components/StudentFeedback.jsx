import { motion } from 'framer-motion';
import { Award, Sparkles, Code, Users, Briefcase, Calendar, Quote, Star } from 'lucide-react';

const StudentFeedback = () => {
  const studentFeedback = [
         {
       college: "Government Engineering College, Thrissur",
       location: "Kerala, India",
       feedback: "Srivardhan's teaching style made complex algorithms easy to understand. His practical approach helped me secure a placement at a top tech company.",
       student: "Rahul Kumar",
       rating: 5,
       icon: Award,
       color: "from-green-500 to-emerald-500",
       feedbackLink: "https://docs.google.com/spreadsheets/d/1Eq3px5t6G1qct7M5e9Yf0fzTWxN3BIr5WJfUkPhg-kw/edit?usp=sharing"
     },
     {
       college: "Sridevi Women's Engineering College",
       location: "Hyderabad, India",
       feedback: "The AI projects we built under his guidance were industry-ready. His mentorship transformed my understanding of machine learning.",
       student: "Priya Sharma",
       rating: 5,
       icon: Sparkles,
       color: "from-blue-500 to-indigo-500",
       feedbackLink: "https://docs.google.com/spreadsheets/d/1s76hGVPFQ72PBkwT-42B2JpNUzTFlF-aQPWJNYSttdg/edit?usp=sharing"
     },
     {
       college: "Ballari Institute of Technology & Management",
       location: "Karnataka, India",
       feedback: "His DSA sessions were incredibly practical. We solved real-world problems, not just theory. Highly recommend his training!",
       student: "Arjun Reddy",
       rating: 5,
       icon: Code,
       color: "from-purple-500 to-pink-500",
       feedbackLink: "https://docs.google.com/spreadsheets/d/1pQ7WNaN6ucvKak2yH6ALGYEvXqV0nFZdiyEDdi7FH10/edit?usp=sharing"
     },
     {
       college: "Annamacharya Institute of Technology & Sciences",
       location: "Kadapa, India",
       feedback: "The workshops were perfectly structured. From basic concepts to advanced algorithms, everything was covered systematically.",
       student: "Lakshmi Devi",
       rating: 5,
       icon: Users,
       color: "from-orange-500 to-red-500",
       feedbackLink: "https://docs.google.com/spreadsheets/d/1AJBsRJijZZpowg91a60r-b8I9vqJBfCxTO7KDMiVOB8/edit?usp=sharing"
     },
     {
       college: "Vignan's Institute of Information Technology",
       location: "Visakhapatnam, India",
       feedback: "His project mentoring approach is exceptional. We built a complete image classification system from scratch.",
       student: "Vikram Singh",
       rating: 5,
       icon: Briefcase,
       color: "from-cyan-500 to-blue-500",
       feedbackLink: "https://docs.google.com/spreadsheets/d/1f9DmDb7FjGgj26nRXZv9MibW3MmDCnLZrNKnec2qBPQ/edit?usp=sharing"
     },
     {
       college: "SR University",
       location: "Warangal, India",
       feedback: "The research project guidance was invaluable. His expertise in AI tools helped us achieve significant results.",
       student: "Anjali Patel",
       rating: 5,
       icon: Calendar,
       color: "from-pink-500 to-rose-500",
       feedbackLink: "https://docs.google.com/spreadsheets/d/1_M0vlZP0IU1JHMepAAl-HqmsUmUGsFlxHXCjoek8CVM/edit?usp=sharing"
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Student Feedback & Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center mb-16">
            Real testimonials from students across different institutions, showcasing the impact of my teaching methodology and the success stories of students who secured placements at top tech companies.
          </p>
        </motion.div>

        {/* Student Feedback Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {studentFeedback.map((feedback, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
            >
              {/* College Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className={`p-3 bg-gradient-to-r ${feedback.color} rounded-xl flex-shrink-0`}>
                  <feedback.icon className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{feedback.college}</h4>
                  <p className="text-sm text-gray-600">{feedback.location}</p>
                </div>
              </div>

              {/* Quote */}
              <div className="mb-6">
                <div className="flex items-start space-x-3">
                  <Quote className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700 leading-relaxed italic">
                    "{feedback.feedback}"
                  </p>
                </div>
              </div>

                                                           {/* Student Info & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{feedback.student}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(feedback.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                </div>

               {/* View More Feedback Button */}
               <motion.a
                 href={feedback.feedbackLink}
                 target="_blank"
                 rel="noopener noreferrer"
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer"
               >
                 View More Feedback
               </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentFeedback; 