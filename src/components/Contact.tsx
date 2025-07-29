import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'yuvaakhil08@gmail.com',
      href: 'yuvaakhil08@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9381559893',
     
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      href: 'https://www.google.com/maps',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      username: 'yuvaakhil',
      href: 'https://github.com/yuvaakhil',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      username: 'Yuva Akhil Pattela',
      href: 'http://www.linkedin.com/in/yuvaakhil815',
    },
    {
      icon: ExternalLink,
      label: 'Medium',
      username: '@yuvaakhil815',
      href: 'https://medium.com/@yuvaakhil815',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="px-6 md:px-20 py-20 max-w-screen-xl mx-auto"
      id="contact"
    >
      <div className={`transition-all duration-1000 delay-200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h3 className="text-3xl font-bold mb-8">Follow My Journey</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-12 leading-relaxed text-lg">
          Stay connected and follow my work through the platforms below. I'm always open to collaboration and meaningful conversations.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info (Now Full Width Section 1/2) */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={info.label}
                href={info.href}
                className={`flex items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group border-2 border-transparent hover:border-black dark:hover:border-white ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-200 shadow-md">
                  <info.icon size={24} />
                </div>
                <div>
                  <div className="font-medium text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wide">{info.label}</div>
                  <div className="font-bold text-lg">{info.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Social Links (Expanded to Match Contact Form Height) */}
          <div className="space-y-6">
            {socialLinks.map(({ icon: Icon, href, label, username }, index) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 transform hover:scale-105 group border-2 border-transparent hover:border-black dark:hover:border-white ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${700 + index * 50}ms` }}
              >
                <div className="w-14 h-14 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-200 shadow-md">
                  <Icon size={24} />
                </div>
                <div>
                  <div className="font-semibold">{label}</div>
                  <div className="text-sm opacity-80">{username}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
