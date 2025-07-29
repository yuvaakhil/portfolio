import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const certifications = [
    {
      id: 1,
      title: 'MongoDB Developer Certification',
      issuer: 'GeeksforGeeks',
      date: '2024',
      description: 'Advanced MongoDB database design, aggregation pipelines, and performance optimization.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300',
      skills: ['MongoDB', 'Database Design', 'Aggregation'],
      credentialUrl: '#'
    },
    {
      id: 2,
      title: 'Artificial Intelligence Fundamentals',
      issuer: 'Accenture',
      date: '2024',
      description: 'Comprehensive understanding of AI concepts, machine learning algorithms, and practical applications.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300',
      skills: ['AI', 'Machine Learning', 'Neural Networks'],
      credentialUrl: '#'
    },
    {
      id: 3,
      title: 'Data Analytics Professional',
      issuer: 'Forage',
      date: '2024',
      description: 'Data analysis techniques, statistical modeling, and business intelligence using modern tools.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=300',
      skills: ['Data Analysis', 'Statistics', 'Power BI'],
      credentialUrl: '#'
    },
    {
      id: 4,
      title: 'Python Programming Specialist',
      issuer: 'Infosys',
      date: '2024',
      description: 'Advanced Python programming, data structures, algorithms, and application development.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=300',
      skills: ['Python', 'Data Structures', 'Algorithms'],
      credentialUrl: '#'
    },
    {
      id: 5,
      title: 'Public Speaking Excellence',
      issuer: 'University of Michigan',
      date: '2023',
      description: 'Effective communication, presentation skills, and public speaking techniques.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300',
      skills: ['Communication', 'Presentation', 'Leadership'],
      credentialUrl: '#'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, certifications.length]);

  const nextCertification = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
    setIsAutoPlaying(false);
  };

  const prevCertification = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certifications.length) % certifications.length);
    setIsAutoPlaying(false);
  };

  const goToCertification = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="certifications" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Certifications</h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications that validate my expertise across various technologies and domains.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Certification Card */}
          <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-1000 delay-200 border-2 border-transparent hover:border-black dark:hover:border-white ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="md:flex">
              {/* Image */}
              <div className="md:w-1/3">
                <img
                  src={certifications[currentIndex].image}
                  alt={certifications[currentIndex].title}
                  className="w-full h-64 md:h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="md:w-2/3 p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Award size={24} className="text-yellow-500 mr-3" />
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {certifications[currentIndex].date}
                    </span>
                  </div>
                  <a
                    href={certifications[currentIndex].credentialUrl}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200 group"
                    aria-label="View Credential"
                  >
                    <ExternalLink size={20} className="group-hover:scale-110 transition-transform duration-200" />
                  </a>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{certifications[currentIndex].title}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  {certifications[currentIndex].issuer}
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {certifications[currentIndex].description}
                </p>
                
                {/* Skills */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Skills Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {certifications[currentIndex].skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm font-medium rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevCertification}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-200 group border-2 border-transparent hover:border-black dark:hover:border-white"
            aria-label="Previous certification"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
          </button>
          
          <button
            onClick={nextCertification}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-200 group border-2 border-transparent hover:border-black dark:hover:border-white"
            aria-label="Next certification"
          >
            <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => goToCertification(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-black dark:bg-white scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to certification ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200"
            >
              {isAutoPlaying ? 'Pause auto-play' : 'Resume auto-play'}
            </button>
          </div>
        </div>

        {/* All Certifications Grid */}
        <div className={`mt-16 grid md:grid-cols-3 lg:grid-cols-5 gap-4 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => goToCertification(index)}
              className={`bg-white dark:bg-gray-800 p-4 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 ${
                index === currentIndex 
                  ? 'border-black dark:border-white shadow-lg' 
                  : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-20 object-cover rounded mb-3 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <h4 className="font-semibold text-sm mb-1 line-clamp-2">{cert.title}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;