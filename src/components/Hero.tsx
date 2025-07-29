import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const { isDark } = useTheme();
  
  const titles = ['Full-Stack Developer', 'Computer Science Student', 'Tech Blogger', 'Problem Solver'];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-8">
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-4 font-light tracking-wide">
              Hi, I'm
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Yuva Akhil
              </span>
              <span className="block bg-gradient-to-r from-gray-600 to-gray-900 dark:from-gray-300 dark:to-white bg-clip-text text-transparent">
                Pattela
              </span>
            </h1>
          </div>
          
          <div className="h-16 mb-8">
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-600 dark:text-gray-300">
              <span className="inline-block transition-all duration-500 transform">
                {titles[textIndex]}
              </span>
            </p>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Computer Science undergraduate passionate about building innovative solutions through 
            <span className="font-semibold"> Full-Stack Development</span>, 
            <span className="font-semibold"> Android Apps</span>, and 
            <span className="font-semibold"> Machine Learning</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
              className={`group px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center ${
                isDark 
                  ? 'bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl' 
                  : 'bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-xl'
              }`}
            >
              <Download size={20} className="mr-2 group-hover:animate-bounce" />
              <span className="relative">
                View Resume
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </span>
            </button>
            
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className={`group px-8 py-4 rounded-full font-medium border-2 transition-all duration-300 transform hover:scale-105 flex items-center ${
                isDark 
                  ? 'border-white text-white hover:bg-white hover:text-black' 
                  : 'border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              <ExternalLink size={20} className="mr-2 group-hover:rotate-45 transition-transform duration-300" />
              Explore Projects
            </button>
          </div>
        </div>
        
        <button
          onClick={scrollToNext}
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <ChevronDown size={32} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-200" />
        </button>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse delay-2000" />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse delay-3000" />
      </div>
    </section>
  );
};

export default Hero;