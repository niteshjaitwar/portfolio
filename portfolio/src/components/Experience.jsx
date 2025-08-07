const Experience = () => {
  const experiences = [
    {
      title: 'Senior Java Developer',
      company: 'Tech Solutions Ltd.',
      period: '2022 - Present',
      location: 'Indore, MP',
      description: [
        'Led development of microservices-based applications using Spring Boot and Spring Cloud',
        'Implemented secure authentication systems using Spring Security and JWT',
        'Optimized database performance and designed efficient data models with JPA/Hibernate',
        'Mentored junior developers and conducted code reviews to maintain high code quality',
        'Collaborated with cross-functional teams using Agile methodologies'
      ],
      technologies: ['Java', 'Spring Boot', 'Microservices', 'Spring Security', 'JWT', 'PostgreSQL']
    },
    {
      title: 'Java Developer',
      company: 'Digital Innovations Pvt. Ltd.',
      period: '2021 - 2022',
      location: 'Indore, MP',
      description: [
        'Developed and maintained enterprise-level Java applications using Spring framework',
        'Built RESTful APIs and integrated third-party services for various business requirements',
        'Implemented exception handling and multithreading solutions for improved application performance',
        'Worked closely with QA teams to ensure thorough testing and bug-free deployments',
        'Participated in requirements gathering and technical architecture discussions'
      ],
      technologies: ['Java', 'Spring', 'Hibernate', 'MySQL', 'REST APIs', 'Maven']
    },
    {
      title: 'Junior Java Developer',
      company: 'StartupTech Solutions',
      period: '2020 - 2021',
      location: 'Indore, MP',
      description: [
        'Started career focusing on Core Java programming and Object-Oriented principles',
        'Developed web applications using Spring MVC and Hibernate ORM',
        'Learned database design and optimization techniques with MySQL',
        'Participated in daily standups and sprint planning as part of Agile development process',
        'Collaborated with senior developers to understand enterprise application architecture'
      ],
      technologies: ['Core Java', 'Spring MVC', 'Hibernate', 'MySQL', 'HTML/CSS', 'JavaScript']
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 w-full">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Experience</span>
          </h2>
          <div className="w-16 lg:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 lg:mb-8"></div>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My professional journey in software development, building robust applications and growing expertise in Java ecosystem
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="relative hidden lg:block">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          {experiences.map((experience, index) => (
            <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{experience.title}</h3>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                      <span className="text-blue-600 font-semibold">{experience.company}</span>
                      <span className="text-gray-600 text-sm">{experience.location}</span>
                    </div>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium">
                      {experience.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800 transition-colors duration-200"
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

        {/* Mobile Timeline */}
        <div className="relative lg:hidden">
          {/* Mobile timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          {experiences.map((experience, index) => (
            <div key={index} className="relative flex items-start mb-8">
              {/* Timeline dot */}
              <div className="absolute left-6 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-2 border-white shadow-lg z-10"></div>

              {/* Content */}
              <div className="ml-12 flex-1">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{experience.title}</h3>
                    <div className="flex flex-col mb-2">
                      <span className="text-blue-600 font-semibold">{experience.company}</span>
                      <span className="text-gray-600 text-sm">{experience.location}</span>
                    </div>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium">
                      {experience.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-blue-100 hover:text-blue-800 transition-colors duration-200"
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

        {/* Career Summary */}
        <div className="mt-12 lg:mt-20">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl lg:rounded-2xl p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 text-center">Career Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">4+</div>
                <div className="text-sm lg:text-base text-gray-700">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-sm lg:text-base text-gray-700">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-sm lg:text-base text-gray-700">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
