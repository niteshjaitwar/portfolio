import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/niteshjaitwar',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:nitjaitwar@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
        </svg>
      )
    },
    {
      name: 'Phone',
      url: 'tel:+917440800704',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
        </svg>
      )
    }
  ];

  const quickLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden" aria-label="Footer">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-5 md:space-y-6">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-30"></div>
                <img 
                  src={logo} 
                  alt="Nitesh Jaitwar Logo" 
                  className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-2"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Nitesh Jaitwar
                </h3>
                <p className="text-blue-400 font-semibold text-sm md:text-base lg:text-lg">
                  Senior Software Engineer
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 max-w-lg leading-relaxed text-sm md:text-base lg:text-lg">
              Passionate Java Developer with 4+ years of experience in building robust and scalable applications. 
              Always excited to take on new challenges and contribute to innovative projects that make a difference.
            </p>

            {/* Social Links */}
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-gray-200">Connect With Me</h4>
              <div className="flex flex-wrap gap-3 md:gap-4" aria-label="Social Links">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target={link.name !== 'Phone' ? '_blank' : undefined}
                    rel={link.name !== 'Phone' ? 'noopener noreferrer' : undefined}
                    className="group relative overflow-hidden"
                    aria-label={link.name}
                  >
                    <div className="relative w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl flex items-center justify-center hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                      <div className="text-gray-300 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
                        {link.icon}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                      {link.name}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5 md:space-y-6">
            <h4 className="text-lg md:text-xl font-bold text-white">Quick Navigation</h4>
            <div className="w-10 md:w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <ul className="space-y-2 md:space-y-3" aria-label="Quick Navigation Links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="group flex items-center gap-2 md:gap-3 text-gray-300 hover:text-white transition-all duration-300 text-left"
                  >
                    <div className="w-2 h-2 bg-gray-500 rounded-full group-hover:bg-blue-500 transition-colors duration-300"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5 md:space-y-6">
            <h4 className="text-lg md:text-xl font-bold text-white">Get In Touch</h4>
            <div className="w-10 md:w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <ul className="space-y-3 md:space-y-4">
              <li className="group flex items-start space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 mt-0.5 text-blue-400 group-hover:text-blue-300">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-xs md:text-sm text-gray-400">Indore, Madhya Pradesh, India</p>
                </div>
              </li>
              
              <li className="group">
                <a 
                  href="mailto:nitjaitwar@gmail.com"
                  className="flex items-start space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5 text-blue-400 group-hover:text-blue-300">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                  <p className="text-xs md:text-sm text-gray-400 break-all">nitjaitwar@gmail.com</p>
                  </div>
                </a>
              </li>
              
              <li className="group">
                <a 
                  href="tel:+917440800704"
                  className="flex items-start space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5 text-blue-400 group-hover:text-blue-300">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                  <p className="text-xs md:text-sm text-gray-400">+91 7440800704</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 md:my-12 lg:my-16">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 md:gap-6 lg:gap-0">
          <div className="text-center lg:text-left">
            <p className="text-gray-300 text-xs md:text-sm lg:text-base mb-1 md:mb-2">
              © {currentYear} Nitesh Jaitwar. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs md:text-sm lg:text-base">
              Designed and developed with ❤️ using React & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            {/* Tech Stack */}
            <div className="hidden md:flex items-center gap-3 md:gap-4 text-gray-400 text-xs md:text-sm">
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span>React</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span>Tailwind</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span>Vite</span>
              </div>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="group relative overflow-hidden w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl flex items-center justify-center hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl"
              aria-label="Scroll to top"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-300 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 md:bottom-20 left-10 md:left-20 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-10 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </footer>
  );
};

export default Footer;
