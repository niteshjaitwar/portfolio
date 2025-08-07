import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* SEO and accessibility improvements */}
      <div className="sr-only">
        <h1>Nitesh Jaitwar - Software Engineer and Java Developer</h1>
        <p>Experienced Java Developer with 4+ years specializing in Spring Boot, Microservices, and enterprise applications</p>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full" aria-hidden="true">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className={`order-2 lg:order-1 space-y-6 lg:space-y-8 text-center lg:text-left ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="space-y-3 lg:space-y-4">
              <p className="text-lg lg:text-xl text-gray-600 font-medium">Hi, I am</p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Nitesh <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block sm:inline">Jaitwar</span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light">
                Software Engineer / Java Developer
              </p>
            </div>

            <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Java Developer with over 4 years of experience specializing in building robust and efficient applications. 
              Passionate about creating scalable solutions using modern technologies and best practices.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 lg:space-x-6">
              <a
                href="mailto:nitjaitwar@gmail.com"
                className="flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-white shadow-lg rounded-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                aria-label="Send email to Nitesh Jaitwar"
              >
                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/niteshjaitwar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-white shadow-lg rounded-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                aria-label="Visit Nitesh Jaitwar's LinkedIn profile"
              >
                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600 group-hover:text-blue-700 transition-colors" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a
                href="tel:+917440800704"
                className="flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-white shadow-lg rounded-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                aria-label="Call Nitesh Jaitwar"
              >
                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-600 group-hover:text-green-700 transition-colors" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 items-center justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className={`order-1 lg:order-2 flex justify-center lg:justify-end ${isVisible ? 'animate-fade-in animation-delay-500' : 'opacity-0'}`}>
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img 
                    src={logo} 
                    alt="Nitesh Jaitwar Professional Logo" 
                    className="w-3/4 h-3/4 object-contain"
                    loading="eager"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-12 h-12 lg:w-20 lg:h-20 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce" aria-hidden="true">
                <span className="text-lg lg:text-2xl" role="img" aria-label="Coffee">☕</span>
              </div>
              <div className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 w-10 h-10 lg:w-16 lg:h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse" aria-hidden="true">
                <span className="text-sm lg:text-xl" role="img" aria-label="Laptop">💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
