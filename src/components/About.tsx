import React, { useState, useEffect, useRef } from 'react';
import { Code, Smartphone, Brain, BarChart3 } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const interests = [
    { icon: Code, title: 'Full-Stack Development', description: 'Building end-to-end web applications' },
    { icon: Smartphone, title: 'Android Development', description: 'Creating native mobile experiences' },
    { icon: Brain, title: 'Machine Learning', description: 'Exploring AI and data science' },
    { icon: BarChart3, title: 'Data Analytics', description: 'Extracting insights from data' }
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
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className={`text-center lg:text-left transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative inline-block mb-8">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="src/public/PattelaYuvaAkhil.jpg"
                  alt="Yuva Akhil Pattela"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-black dark:bg-white rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white dark:text-black text-2xl">💻</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h3 className="text-3xl font-bold mb-6">
              Computer Science Undergraduate | Full-Stack Developer | Blogger
            </h3>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              <p>
                I'm a passionate Computer Science student at Mallareddy College with a strong foundation in 
                software development and emerging technologies. Currently maintaining a CGPA of 9.19, I combine 
                academic excellence with practical experience.
              </p>
              
              <p>
                My journey in tech spans across multiple domains - from building scalable web applications 
                with React and Django to developing Android apps and exploring the fascinating world of 
                Machine Learning and Data Analytics.
              </p>
              
              <p>
                I believe in learning by doing and sharing knowledge through blogging. Every project I work on 
                is an opportunity to push boundaries and create meaningful solutions that make a difference.
              </p>
            </div>

            {/* Interest Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map(({ icon: Icon, title, description }, index) => (
                <div
                  key={title}
                  className={`group p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-black dark:hover:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 transform hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <Icon size={24} className="mb-2 group-hover:scale-110 transition-transform duration-200" />
                  <h4 className="font-semibold mb-1">{title}</h4>
                  <p className="text-sm opacity-80">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;