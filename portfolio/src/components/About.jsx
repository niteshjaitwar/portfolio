const About = () => {
  const stats = [
    { number: '4+', label: 'Years Experience', color: 'from-blue-500 to-blue-600' },
    { number: '50+', label: 'Projects Completed', color: 'from-green-500 to-green-600' },
    { number: '10+', label: 'Technologies', color: 'from-purple-500 to-purple-600' },
    { number: '100%', label: 'Client Satisfaction', color: 'from-pink-500 to-pink-600' }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen bg-white flex items-center py-10 md:py-14 lg:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 md:mb-8 lg:mb-10">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Me
            </span>
          </h2>
          <div className="w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 md:mb-8 lg:mb-10 rounded-full"></div>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get to know more about my journey, skills, and passion for software development
          </p>
        </div>

        <div className="grid gap-10 md:gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content - Text and Info */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Passionate{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Java Developer
                </span>{' '}
                from Indore, MP
              </h3>
              
              <div className="space-y-3 md:space-y-4 text-gray-700">
                <p className="text-base md:text-lg leading-relaxed">
                  As a <strong className="text-blue-600">Java Developer</strong> with over <strong className="text-purple-600">four years of experience</strong>, 
                  I specialize in building robust and efficient applications. I am proficient in a variety of technologies including 
                  <strong className="text-gray-900"> Core Java, Object-Oriented Programming, Exception Handling, Multithreading</strong>, 
                  and modern frameworks like <strong className="text-gray-900">Spring, Spring Boot, Hibernate, JPA, Spring Security, JWT, and Microservices</strong>.
                </p>
                
                <p className="text-base md:text-lg leading-relaxed">
                  I am experienced in <strong className="text-blue-600">Agile methodologies</strong> and am seeking a challenging role where I can apply my 
                  software development skills to contribute to project success while continuously growing within a collaborative team environment.
                </p>
                
                <p className="text-base md:text-lg leading-relaxed">
                  My passion lies in creating <strong className="text-purple-600">scalable solutions</strong> that solve real-world problems 
                  and contribute to meaningful projects that make a difference.
                </p>
              </div>
            </div>

            {/* Enhanced Contact Info Cards */}
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              <div className="group bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 lg:p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-base lg:text-lg font-semibold text-gray-900">Indore, Madhya Pradesh, India</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                      </svg>
                    </div>
                    <a href="tel:+917440800704" className="text-base lg:text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                      +91 7440800704
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>
                    <a href="mailto:nitjaitwar@gmail.com" className="text-base lg:text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                      nitjaitwar@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="pt-6">
              <button
                onClick={scrollToContact}
                className="group w-full sm:w-auto inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 text-base md:text-lg"
                aria-label="Let's Work Together"
                tabIndex={0}
              >
                <span>Let's Work Together</span>
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Content - Enhanced Stats Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-white rounded-2xl p-6 lg:p-8 border-2 border-gray-100 hover:border-transparent transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                  
                  {/* Content */}
                  <div className="relative text-center space-y-2 lg:space-y-3">
                    <div className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                      {stat.number}
                    </div>
                    <div className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium leading-tight group-hover:text-gray-900 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>

                  {/* Decorative corner element */}
                  <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r ${stat.color} rounded-full opacity-20 group-hover:opacity-40 transition-all duration-300 transform group-hover:scale-150`}></div>
                </div>
              ))}
            </div>

            {/* Additional visual element */}
            <div className="mt-8 md:mt-10 lg:mt-12 text-center">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm lg:text-base font-medium text-gray-700">Committed to Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
