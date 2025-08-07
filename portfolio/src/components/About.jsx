const About = () => {
  const stats = [
    { number: '4+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '10+', label: 'Technologies' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 w-full">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
          </h2>
          <div className="w-16 lg:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 lg:mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
                Passionate Java Developer from Indore, MP
              </h3>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                As a Java Developer with over four years of experience, I specialize in building robust and efficient applications. 
                I am proficient in a variety of technologies including Core Java, Object-Oriented Programming, Exception Handling, 
                Multithreading, Spring, Spring Boot, Hibernate, JPA, Spring Security, JWT, and Microservices.
              </p>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                I am experienced in Agile methodologies and am seeking a challenging role where I can apply my software development 
                skills to contribute to project success while continuously growing within a collaborative team environment.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-center space-x-3 lg:space-x-4">
                <div className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600 flex-shrink-0">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-sm lg:text-base text-gray-700">Indore, Madhya Pradesh, India</span>
              </div>
              <div className="flex items-center space-x-3 lg:space-x-4">
                <div className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600 flex-shrink-0">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <span className="text-sm lg:text-base text-gray-700">+91 7440800704</span>
              </div>
              <div className="flex items-center space-x-3 lg:space-x-4">
                <div className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600 flex-shrink-0">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <span className="text-sm lg:text-base text-gray-700">nitjaitwar@gmail.com</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 lg:pt-6">
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Let's Work Together
              </button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-4 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 lg:p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl lg:rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 lg:hover:-translate-y-2"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-1 lg:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-700 font-medium leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
