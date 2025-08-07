const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: '⚙️',
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
      skills: [
        { name: 'Agile Methodologies', level: 90 },
        { name: 'Exception Handling', level: 92 },
        { name: 'Multithreading', level: 85 },
        { name: 'Unit Testing', level: 88 },
        { name: 'Git Version Control', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 w-full">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Skills</span>
          </h2>
          <div className="w-16 lg:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 lg:mb-8"></div>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to create robust and scalable applications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 lg:hover:-translate-y-2"
            >
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="text-2xl lg:text-3xl mr-3 lg:mr-4">{category.icon}</div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4 lg:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-1 lg:space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm lg:text-base text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm lg:text-base text-blue-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 lg:h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-1.5 lg:h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="bg-white rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6 lg:mb-8">
            Technologies & Tools I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
            {[
              'Java', 'Spring', 'Spring Boot', 'Hibernate', 'JPA', 'Spring Security',
              'JWT', 'Microservices', 'REST APIs', 'MySQL', 'PostgreSQL', 'MongoDB',
              'Redis', 'Git', 'Maven', 'Gradle', 'Docker', 'Jenkins', 'Agile', 'Scrum'
            ].map((tech, index) => (
              <span
                key={index}
                className="px-3 lg:px-4 py-1.5 lg:py-2 bg-gray-50 text-gray-700 rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-gray-200 text-sm lg:text-base font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
