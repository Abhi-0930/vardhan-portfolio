import { Award, Sparkles, Code, Users, Briefcase, Calendar, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const StudentFeedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
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

  // Auto-play functionality with pause on hover
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % studentFeedback.length);
      }, 2500); // Auto-advance every 2.5 seconds (faster)

      return () => clearInterval(interval);
    }
  }, [isPaused, studentFeedback.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % studentFeedback.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + studentFeedback.length) % studentFeedback.length);
  };

  // Touch/swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swiped left
      goToNext();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      // Swiped right
      goToPrevious();
    }
  };

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

        {/* Slider Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slider Wrapper */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {studentFeedback.map((feedback, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-2 sm:px-4"
                >
                  <div className="bg-white backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 max-w-5xl mx-auto">
                    {/* College Header */}
                    <div className="flex items-start space-x-6 mb-8">
                      <div className={`p-4 ${feedback.color} rounded-xl flex-shrink-0`}>
                        <feedback.icon className="text-white" size={32} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">{feedback.college}</h4>
                        <p className="text-base text-gray-600">{feedback.location}</p>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="mb-8">
                      <div className="flex items-start space-x-4">
                        <Quote className="text-gray-900 mt-2 flex-shrink-0" size={28} />
                        <p className="text-gray-700 leading-relaxed italic text-xl">
                          "{feedback.feedback}"
                        </p>
                      </div>
                    </div>

                    {/* View More Feedback Button */}
                    <a
                      href={feedback.feedbackLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-black text-white py-4 px-6 rounded-xl font-medium text-lg hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer"
                    >
                      View More Feedback
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Desktop Only - Centered to content */}
          <button
            onClick={goToPrevious}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 bg-black text-white p-4 rounded-full shadow-xl hover:bg-gray-900 hover:scale-110 transition-all duration-300 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button
            onClick={goToNext}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 bg-black text-white p-4 rounded-full shadow-xl hover:bg-gray-900 hover:scale-110 transition-all duration-300 z-10"
            aria-label="Next slide"
          >
            <ChevronRight size={28} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            {studentFeedback.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-8 h-3 bg-black rounded-full'
                    : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentFeedback; 