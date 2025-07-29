import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const timelineItems = [
    {
      type: 'experience',
      icon: Briefcase,
      title: 'Team Lead - Smart Food Diary App',
      organization: 'Infosys Internship',
      period: 'Oct–Dec 2024',
      description: 'Led a cross-functional team in developing an intelligent food tracking application. Implemented advanced features for nutritional analysis and user engagement.',
      achievements: [
        'Successfully led a team of 7 interns',
        'Delivered project 2 weeks ahead of schedule',
        'Implemented ML-based food recognition',
        'Achieved 95% user satisfaction rating'
      ],
      color: 'bg-blue-500'
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'B.Tech Computer Science',
      organization: 'Mallareddy College of Engineering',
      period: '2022–Present',
      description: 'Currently pursuing Bachelor of Technology in Computer Science with a focus on software engineering, data structures, and emerging technologies.',
      achievements: [
        'Current CGPA: 9.19/10',
        'Bagged internship in 3rd year',
        'Active member of Coding Club',
        'Participated in multiple hackathons'
      ],
      color: 'bg-green-500'
    },
    {
      type: 'achievement',
      icon: Award,
      title: 'Technical Blogger',
      organization: 'Medium & GitHub',
      period: '2023–Present',
      description: 'Actively contributing to the tech community through technical writing and open-source projects, sharing knowledge and best practices.',
      achievements: [
        "Sharing knowledge"
      ],
      color: 'bg-purple-500'
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

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Experience & Education</h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey through education, professional experience, and continuous learning in technology.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 transform md:-translate-x-0.5"></div>
          
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-black dark:bg-white rounded-full border-4 border-white dark:border-gray-900 transform md:-translate-x-2 z-10"></div>
              
              {/* Content card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-black dark:hover:border-white group">
                  {/* Header */}
                  <div className="flex items-start mb-4">
                    <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200`}>
                      <item.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                        <Calendar size={14} className="mr-2" />
                        {item.period}
                      </div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 font-medium">{item.organization}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start text-sm text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { value: '9.19', label: 'Current CGPA', icon: '🎓' },
            { value: '3', label: 'Years Coding', icon: '💻' },
            { value: '5+', label: 'Projects Built', icon: '🚀' },
            { value: '5', label: 'Articles Written', icon: '✍️' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-black dark:hover:border-white ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: `${1000 + index * 100}ms` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;