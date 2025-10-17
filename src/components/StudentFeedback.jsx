import { Award, Sparkles, Code, Users, Briefcase, Calendar, Quote } from 'lucide-react';

const StudentFeedback = () => {
  const studentFeedback = [
         {
      college: "Government Engineering College, Thrissur",
      location: "Kerala, India",
      feedback: "Srivardhan's teaching style made complex algorithms easy to understand. His practical approach helped me secure a placement at a top tech company.",
      student: "Rahul Kumar",
      rating: 5,
      icon: Award,
      color: "bg-gray-900",
      feedbackLink: "https://docs.google.com/spreadsheets/d/1Eq3px5t6G1qct7M5e9Yf0fzTWxN3BIr5WJfUkPhg-kw/edit?usp=sharing"
    },
    {
      college: "Sridevi Women's Engineering College",
      location: "Hyderabad, India",
      feedback: "The AI projects we built under his guidance were industry-ready. His mentorship transformed my understanding of machine learning.",
      student: "Priya Sharma",
      rating: 5,
      icon: Sparkles,
      color: "bg-gray-800",
      feedbackLink: "https://docs.google.com/spreadsheets/d/1s76hGVPFQ72PBkwT-42B2JpNUzTFlF-aQPWJNYSttdg/edit?usp=sharing"
    },
    {
      college: "Ballari Institute of Technology & Management",
      location: "Karnataka, India",
      feedback: "His DSA sessions were incredibly practical. We solved real-world problems, not just theory. Highly recommend his training!",
      student: "Arjun Reddy",
      rating: 5,
      icon: Code,
      color: "bg-gray-700",
      feedbackLink: "https://docs.google.com/spreadsheets/d/1pQ7WNaN6ucvKak2yH6ALGYEvXqV0nFZdiyEDdi7FH10/edit?usp=sharing"
    },
    {
      college: "Annamacharya Institute of Technology & Sciences",
      location: "Kadapa, India",
      feedback: "The workshops were perfectly structured. From basic concepts to advanced algorithms, everything was covered systematically.",
      student: "Lakshmi Devi",
      rating: 5,
      icon: Users,
      color: "bg-gray-900",
      feedbackLink: "https://docs.google.com/spreadsheets/d/1AJBsRJijZZpowg91a60r-b8I9vqJBfCxTO7KDMiVOB8/edit?usp=sharing"
    },
    {
      college: "Vignan's Institute of Information Technology",
      location: "Visakhapatnam, India",
      feedback: "His project mentoring approach is exceptional. We built a complete image classification system from scratch.",
      student: "Vikram Singh",
      rating: 5,
      icon: Briefcase,
      color: "bg-gray-800",
      feedbackLink: "https://docs.google.com/spreadsheets/d/1f9DmDb7FjGgj26nRXZv9MibW3MmDCnLZrNKnec2qBPQ/edit?usp=sharing"
    },
    {
      college: "SR University",
      location: "Warangal, India",
      feedback: "The research project guidance was invaluable. His expertise in AI tools helped us achieve significant results.",
      student: "Anjali Patel",
      rating: 5,
      icon: Calendar,
      color: "bg-gray-700",
      feedbackLink: "https://docs.google.com/spreadsheets/d/1_M0vlZP0IU1JHMepAAl-HqmsUmUGsFlxHXCjoek8CVM/edit?usp=sharing"
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-black">
            Student Feedback & Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center mb-16">
            Real testimonials from students across different institutions, showcasing the impact of my teaching methodology and the success stories of students who secured placements at top tech companies.
          </p>
        </div>

        {/* Vertical Card List (matching Publications & Research UI) */}
        <div className="space-y-8">
          {studentFeedback.map((feedback, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Mode Badge (Online/Offline) */}
              {(() => {
                const onlineIndices = new Set([0, 2]);
                const isOnline = onlineIndices.has(index);
                return (
                  <div className="absolute top-4 right-4">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${
                        isOnline
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : 'bg-gray-100 text-gray-700 border-gray-200'
                      }`}
                      aria-label={isOnline ? 'Online mode' : 'Offline mode'}
                    >
                      <span className={`h-2 w-2 rounded-full ${isOnline ? 'bg-emerald-500' : 'bg-gray-400'}`}></span>
                      {isOnline ? 'Online' : 'Offline'}
                    </span>
                  </div>
                );
              })()}

              <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                <div className={`p-3 ${feedback.color} rounded-xl flex-shrink-0 flex justify-center sm:justify-start`}>
                  <feedback.icon className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{feedback.college}</h4>
                  <p className="text-sm text-gray-600">{feedback.location}</p>
                </div>
              </div>

              <div className="sm:ml-16">
                <div className="mb-6">
                  <div className="flex items-start space-x-3">
                    <Quote className="text-gray-900 mt-1 flex-shrink-0" size={22} />
                    <p className="text-gray-700 leading-relaxed italic text-sm sm:text-base">
                      "{feedback.feedback}"
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <a
                    href={feedback.feedbackLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-900 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentFeedback; 