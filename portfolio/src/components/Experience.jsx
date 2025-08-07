const Experience = () => {
  const experiences = [
    {
      title: 'Senior Java Developer',
      company: 'Tech Solutions Ltd.',
      period: '2022 - Present',
      location: 'Indore, MP',
      companyType: 'Product Company',
      description: [
        'Led development of microservices-based applications using Spring Boot and Spring Cloud architecture',
        'Implemented secure authentication systems using Spring Security and JWT with role-based access control',
        'Optimized database performance and designed efficient data models with JPA/Hibernate, reducing query time by 40%',
        'Mentored junior developers and conducted code reviews to maintain high code quality standards',
        'Collaborated with cross-functional teams using Agile methodologies, delivering 15+ successful projects'
      ],
      technologies: ['Java', 'Spring Boot', 'Microservices', 'Spring Security', 'JWT', 'PostgreSQL'],
      achievements: [
        'Reduced application response time by 40%',
        'Led team of 5 developers',
        'Delivered 15+ projects successfully'
      ]
    },
    {
      title: 'Java Developer',
      company: 'Digital Innovations Pvt. Ltd.',
      period: '2021 - 2022',
      location: 'Indore, MP',
      companyType: 'Service Company',
      description: [
        'Developed and maintained enterprise-level Java applications using Spring framework and modern design patterns',
        'Built comprehensive RESTful APIs and integrated third-party services for various business requirements',
        'Implemented robust exception handling and multithreading solutions for improved application performance',
        'Worked closely with QA teams to ensure thorough testing and maintained 99% bug-free deployments',
        'Participated in requirements gathering and technical architecture discussions with stakeholders'
      ],
      technologies: ['Java', 'Spring', 'Hibernate', 'MySQL', 'REST APIs', 'Maven'],
      achievements: [
        '99% bug-free deployment rate',
        'Integrated 10+ third-party services',
        'Improved system performance by 25%'
      ]
    },
    {
      title: 'Junior Java Developer',
      company: 'StartupTech Solutions',
      period: '2020 - 2021',
      location: 'Indore, MP',
      companyType: 'Startup',
      description: [
        'Started career focusing on Core Java programming and Object-Oriented principles with hands-on project experience',
        'Developed responsive web applications using Spring MVC and Hibernate ORM with modern UI frameworks',
        'Learned database design and optimization techniques with MySQL, improving data retrieval efficiency',
        'Participated in daily standups and sprint planning as part of Agile development process',
        'Collaborated with senior developers to understand enterprise application architecture and best practices'
      ],
      technologies: ['Core Java', 'Spring MVC', 'Hibernate', 'MySQL', 'HTML/CSS', 'JavaScript'],
      achievements: [
        'Successfully completed 8 projects',
        'Learned 6+ new technologies',
        'Contributed to team success'
      ]
    }
  ];

  const timelineIcon = (index) => {
    const icons = ['🚀', '💼', '🌱'];
    return icons[index] || '💼';
  };

  return (
    <section className="min-h-screen bg-white flex items-center py-10 md:py-14 lg:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 md:mb-8 lg:mb-10" id="experience" aria-label="Work Experience">
            Work{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Experience
            </span>
          </h2>
          <div className="w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 md:mb-8 lg:mb-10 rounded-full"></div>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My professional journey in software development, building robust applications and growing expertise in Java ecosystem
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="relative hidden lg:block">
          {/* Enhanced Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 shadow-sm"></div>

          {experiences.map((experience, index) => (
            <div key={index} className={`relative flex items-center mb-16 md:mb-20 last:mb-0 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}> 
              {/* Enhanced Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-xl z-20 flex items-center justify-center">
                <span className="text-2xl" role="img" aria-label="Timeline icon">{timelineIcon(index)}</span>
              </div>

              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 md:pr-16' : 'pl-8 md:pl-16'}`}> 
                <div className="group bg-white p-6 md:p-8 lg:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-gray-100 hover:border-blue-200">
                  {/* Header */}
                  <div className="mb-4 md:mb-6">
                    <div className="flex items-center mb-2 md:mb-3">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {experience.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-blue-600 font-bold text-base md:text-lg">{experience.company}</span>
                        <span className="text-xs md:text-sm text-gray-500 bg-gray-100 px-2 md:px-3 py-1 rounded-full">
                          {experience.companyType}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 text-xs md:text-sm font-medium">📍 {experience.location}</span>
                        <span className="inline-block px-3 md:px-4 py-1 md:py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-xs md:text-sm font-semibold">
                          {experience.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 mt-2.5 flex-shrink-0"></div>
                        <span className="text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Achievements */}
                  <div className="mb-4 md:mb-6">
                    <h4 className="text-xs md:text-sm font-semibold text-gray-900 mb-2 md:mb-3">Key Achievements:</h4>
                    <div className="space-y-1 md:space-y-2">
                      {experience.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center">
                          <span className="text-green-500 mr-2 text-xs md:text-sm">✓</span>
                          <span className="text-xs md:text-sm text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 md:px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-xs md:text-sm font-medium hover:from-blue-100 hover:to-purple-100 hover:text-blue-800 transition-all duration-300 transform hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-20 group-hover:opacity-40 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Timeline - Enhanced */}
        <div className="relative lg:hidden">
          {/* Mobile timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full shadow-sm"></div>

          {experiences.map((experience, index) => (
            <div key={index} className="relative flex items-start mb-8 md:mb-12 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute left-8 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                <span className="text-lg" role="img" aria-label="Timeline icon">{timelineIcon(index)}</span>
              </div>

              {/* Content */}
              <div className="ml-16 flex-1">
                <div className="bg-white p-4 md:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                  <div className="mb-4">
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2">{experience.title}</h3>
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-blue-600 font-bold text-xs md:text-base">{experience.company}</span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full self-start sm:self-auto">
                          {experience.companyType}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-gray-600 text-xs md:text-sm">📍 {experience.location}</span>
                        <span className="inline-block px-2 md:px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-xs md:text-sm font-semibold self-start sm:self-auto">
                          {experience.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-1 md:space-y-2 mb-3 md:mb-4">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-xs md:text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Achievements for mobile */}
                  <div className="mb-3 md:mb-4">
                    <h4 className="text-xs md:text-sm font-semibold text-gray-900 mb-1 md:mb-2">Achievements:</h4>
                    <div className="space-y-0.5 md:space-y-1">
                      {experience.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center">
                          <span className="text-green-500 mr-2 text-xs md:text-sm">✓</span>
                          <span className="text-xs text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Career Summary */}
        <div className="mt-14 md:mt-20 lg:mt-24">
          <div className="bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-12 border-2 border-gray-100">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8 lg:mb-12 text-center">
              Career{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Highlights
              </span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
              <div className="text-center group">
                <div className="relative mb-4">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700 group-hover:scale-110 transition-transform duration-300">
                    4+
                  </div>
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-sm lg:text-base text-gray-700 font-semibold">Years of Experience</div>
                <div className="text-xs text-gray-500 mt-1">Building robust applications</div>
              </div>
              
              <div className="text-center group">
                <div className="relative mb-4">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700 group-hover:scale-110 transition-transform duration-300">
                    50+
                  </div>
                  <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-sm lg:text-base text-gray-700 font-semibold">Projects Delivered</div>
                <div className="text-xs text-gray-500 mt-1">Successfully completed</div>
              </div>
              
              <div className="text-center group">
                <div className="relative mb-4">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 group-hover:scale-110 transition-transform duration-300">
                    10+
                  </div>
                  <div className="absolute inset-0 bg-green-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-sm lg:text-base text-gray-700 font-semibold">Technologies Mastered</div>
                <div className="text-xs text-gray-500 mt-1">Modern tech stack</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
