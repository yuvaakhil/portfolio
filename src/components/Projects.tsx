import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Filter, Calendar, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState<typeof projects>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      title: 'Secure Gate Pass Generator',
      description: 'A comprehensive security solution featuring Aadhaar OCR integration, Albedo Wallet connectivity, and IPFS-based image storage for secure gate pass generation.',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React.js', 'Node.js', 'Stellar', 'IPFS'],
      category: ['web', 'blockchain'],
      period: 'Jul 2025 – Present',
      features: ['Aadhaar OCR', 'Albedo Wallet', 'IPFS Upload'],
      github: '#',
      blog: '#',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'NutriLens – Indian Food Nutrition App',
      description: 'An intelligent Android application that uses image recognition to identify Indian foods and provides detailed nutritional information through advanced ML models.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Kotlin', 'Android Studio', 'Hugging Face', 'REST API'],
      category: ['mobile'],
      period: 'Mar 2025 – Present',
      features: ['Image Recognition', 'Nutrient Matching', 'REST API'],
      github: 'https://github.com/yuvaakhil/NutriLens',
      blog: 'https://medium.com/@yuvaakhil815/nutrilens-using-machine-learning-and-android-to-decode-indian-food-nutrition-aeff391f32de',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Smart Food Diary ',
      description: 'Led a team to develop an intelligent food tracking application during Infosys internship, focusing on user experience and nutritional insights.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Team Leadership', 'Mobile Development', 'UI/UX'],
      category: ['web'],
      period: 'Oct–Dec 2024',
      features: ['Team Leadership', 'Food Tracking', 'Analytics'],
      github: 'https://github.com/yuvaakhil/smart-diary-project',
      
      status: 'Completed'
    },
    
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Android Apps' },
    { id: 'blockchain', label: 'Blockchain' }
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
  if (activeFilter === 'all') {
    setFilteredProjects(projects);
  } else {
    setFilteredProjects(
      projects.filter((project) => project.category.includes(activeFilter))
    );
  }
}, [activeFilter]);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Selected Projects</h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            A showcase of my recent work, demonstrating expertise in modern technologies and innovative problem-solving.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center ${
                  activeFilter === filter.id
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-lg'
                    : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border-2 border-transparent hover:border-black dark:hover:border-white'
                }`}
              >
                <Filter size={16} className="mr-2" />
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-black dark:hover:border-white ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-200 transform hover:scale-110"
                    aria-label="View GitHub"
                  >
                    <Github size={20} className="text-black" />
                  </a>
                  <a
                    href={project.blog}
                    className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-200 transform hover:scale-110"
                    aria-label="Read Blog"
                  >
                    <ExternalLink size={20} className="text-black" />
                  </a>
                </div>
                
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === 'In Progress' 
                    ? 'bg-yellow-500 text-black' 
                    : 'bg-green-500 text-white'
                }`}>
                  {project.status}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar size={14} className="mr-2" />
                  {project.period}
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Code size={14} className="mr-2 text-gray-500" />
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Key Features:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-medium rounded-full group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button className="group px-8 py-4 border-2 border-black dark:border-white rounded-full font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 transform hover:scale-105">
            <span className="flex items-center">
              View All Projects
              <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;