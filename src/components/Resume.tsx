import React, { useState, useEffect, useRef } from 'react';
import { Download, Eye, FileText, Star } from 'lucide-react';

const Resume: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const resumeHighlights = [
    'Computer Science Student with 9.19 CGPA',

    'Team Leadership experience at Infosys Springboard',
    
    'Good understanding in React, Django, Android Development',
    'Experience with ML and Data Analytics'
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

const handleDownload = () => {
  const url = 'https://drive.google.com/file/d/1QShjvk98n54qhcqJ8naDBwAtRATE6JBs/view?usp=drive_link';
  const link = document.createElement('a');
  link.href = url;
  link.download = 'YuvaAkhil_Resume.pdf'; // optional: suggest a file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

 const handlePreview = () => {
  const url = 'https://drive.google.com/file/d/1SLv3sg4rvKRlLDu9NBc5EYVHdNt2yBe3/view?usp=sharing';
  window.open(url, '_blank');
};


  return (
    <section id="resume" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Resume</h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Download my complete resume to learn more about my experience, skills, and achievements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Resume Preview Card */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-black dark:hover:border-white group">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FileText size={40} className="group-hover:animate-pulse" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-2">Yuva Akhil Pattela</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-2">
                Full-Stack Developer & Computer Science Student
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-8">
                Last updated: August 2025
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className={`group flex items-center justify-center px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                    isDownloading ? 'animate-pulse' : 'hover:shadow-xl'
                  }`}
                >
                  {isDownloading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-current border-t-transparent mr-2"></div>
                      Downloading...
                    </>
                  ) : (
                    <>
                      <Download size={20} className="mr-2 group-hover:animate-bounce" />
                      Download Resume
                    </>
                  )}
                </button>
                
                <button
                  onClick={handlePreview}
                  className="group flex items-center justify-center px-8 py-4 border-2 border-black dark:border-white rounded-full font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  <Eye size={20} className="mr-2 group-hover:scale-110 transition-transform duration-200" />
                  Preview Online
                </button>
              </div>

              {/* Download Stats */}
              <div className="text-center">
                <div className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
                 
                </div>
              </div>
            </div>
          </div>

          {/* Resume Highlights */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h3 className="text-3xl font-bold mb-8">What's Inside</h3>
            
            <div className="space-y-4 mb-8">
              {resumeHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`flex items-start p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <Star size={16} className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Experience', value: 'Learning' },
                { label: 'Projects', value: '5+' },
                { label: 'CGPA', value: '9.15' },
                { label: 'Certifications', value: '5+' }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-black dark:hover:border-white ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${1000 + index * 50}ms` }}
                >
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="p-6 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl border-2 border-transparent hover:border-black dark:hover:border-white transition-all duration-300">
              <h4 className="text-lg font-bold mb-2">Ready to collaborate?</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Let's discuss how I can contribute to your team's success.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg font-medium hover:scale-105 transition-transform duration-200 flex items-center"
              >
                Get In Touch
                <Star size={16} className="ml-2 animate-pulse" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
