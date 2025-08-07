const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: '⚙️',
      gradient: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'Core Java', level: 95 },
        { name: 'Spring Framework', level: 90 },
        { name: 'Spring Boot', level: 92 },
        { name: 'Hibernate/JPA', level: 88 },
        { name: 'Spring Security', level: 85 },
        { name: 'JWT', level: 82 }
      ]
    },
    {
      title: 'Architecture & Design',
      icon: '🏗️',
      gradient: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Microservices', level: 88 },
        { name: 'RESTful APIs', level: 92 },
        { name: 'Object-Oriented Programming', level: 95 },
        { name: 'Design Patterns', level: 85 },
        { name: 'System Architecture', level: 80 }
      ]
    },
    {
      title: 'Database & Tools',
      icon: '🗄️',
      gradient: 'from-green-500 to-green-600',
      skills: [
        { name: 'SQL', level: 90 },
        { name: 'MySQL', level: 88 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'Redis', level: 70 }
      ]
    },
    {
      title: 'Development Practices',
      icon: '🔧',
      gradient: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Agile Methodologies', level: 90 },
        { name: 'Exception Handling', level: 92 },
        { name: 'Multithreading', level: 85 },
        { name: 'Unit Testing', level: 88 },
        { name: 'Git Version Control', level: 90 }
      ]
    }
  ];

  const technologies = [
    { name: 'Java', color: 'bg-red-100 text-red-800 border-red-200' },
    { name: 'Spring', color: 'bg-green-100 text-green-800 border-green-200' },
    { name: 'Spring Boot', color: 'bg-green-100 text-green-800 border-green-200' },
    { name: 'Hibernate', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
    { name: 'JPA', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
    { name: 'Spring Security', color: 'bg-blue-100 text-blue-800 border-blue-200' },
    { name: 'JWT', color: 'bg-purple-100 text-purple-800 border-purple-200' },
    { name: 'Microservices', color: 'bg-indigo-100 text-indigo-800 border-indigo-200' },
    { name: 'REST APIs', color: 'bg-pink-100 text-pink-800 border-pink-200' },
    { name: 'MySQL', color: 'bg-blue-100 text-blue-800 border-blue-200' },
    { name: 'PostgreSQL', color: 'bg-blue-100 text-blue-800 border-blue-200' },
    { name: 'MongoDB', color: 'bg-green-100 text-green-800 border-green-200' },
    { name: 'Redis', color: 'bg-red-100 text-red-800 border-red-200' },
    { name: 'Git', color: 'bg-gray-100 text-gray-800 border-gray-200' },
    { name: 'Maven', color: 'bg-orange-100 text-orange-800 border-orange-200' },
    { name: 'Gradle', color: 'bg-orange-100 text-orange-800 border-orange-200' },
    { name: 'Docker', color: 'bg-blue-100 text-blue-800 border-blue-200' },
    { name: 'Jenkins', color: 'bg-gray-100 text-gray-800 border-gray-200' },
    { name: 'Agile', color: 'bg-purple-100 text-purple-800 border-purple-200' },
    { name: 'Scrum', color: 'bg-purple-100 text-purple-800 border-purple-200' }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center py-16 lg:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 lg:mb-8">
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Skills
            </span>
          </h2>
          <div className="w-16 lg:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 lg:mb-8 rounded-full"></div>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to create robust and scalable applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group bg-white rounded-2xl p-6 lg:p-8 xl:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-gray-200"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6 lg:mb-8">
                <div className="text-2xl lg:text-3xl xl:text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5 lg:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm lg:text-base xl:text-lg text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className={`text-sm lg:text-base font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Enhanced Progress Bar */}
                    <div className="relative w-full bg-gray-200 rounded-full h-2 lg:h-3 overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                        style={{ 
                          width: `${skill.level}%`,
                          boxShadow: `0 0 10px rgba(59, 130, 246, 0.3)`
                        }}
                      >
                        {/* Animated shine effect */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative element */}
              <div className={`mt-6 h-1 bg-gradient-to-r ${category.gradient} rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="bg-white rounded-2xl lg:rounded-3xl p-8 lg:p-12 xl:p-16 shadow-xl border border-gray-100">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Technologies & Tools I Work With
            </h3>
            <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`inline-flex items-center px-4 lg:px-6 py-2 lg:py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border text-sm lg:text-base font-semibold ${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Additional Visual Element */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-base lg:text-lg font-semibold text-gray-700">
              Constantly Learning & Growing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
