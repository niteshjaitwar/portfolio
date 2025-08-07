import { Suspense, lazy, useState } from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load components for better performance
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  const renderActiveSection = () => {
    const LoadingSpinner = () => (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
      </div>
    );

    switch (activeSection) {
      case 'hero':
        return <Suspense fallback={<LoadingSpinner />}><Hero /></Suspense>;
      case 'about':
        return <Suspense fallback={<LoadingSpinner />}><About /></Suspense>;
      case 'skills':
        return <Suspense fallback={<LoadingSpinner />}><Skills /></Suspense>;
      case 'experience':
        return <Suspense fallback={<LoadingSpinner />}><Experience /></Suspense>;
      case 'contact':
        return <Suspense fallback={<LoadingSpinner />}><Contact /></Suspense>;
      default:
        return <Suspense fallback={<LoadingSpinner />}><Hero /></Suspense>;
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white flex flex-col">
        {/* Navigation Header */}
        <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <div className="flex items-center">
                <img 
                  src="/src/assets/logo.png" 
                  alt="Nitesh Jaitwar" 
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover border-2 border-blue-600"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden h-8 w-8 sm:h-10 sm:w-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-base">NJ</span>
                </div>
                <div className="ml-3">
                  <h1 className="text-lg sm:text-xl font-bold text-gray-900">Nitesh Jaitwar</h1>
                  <p className="text-xs sm:text-sm text-gray-600">Java Developer</p>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                    }`}
                    aria-label={`Navigate to ${section.label} section`}
                  >
                    <span className="mr-2">{section.icon}</span>
                    {section.label}
                  </button>
                ))}
              </nav>

              {/* Tablet Navigation Dropdown */}
              <div className="md:hidden">
                <select
                  value={activeSection}
                  onChange={(e) => setActiveSection(e.target.value)}
                  className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  aria-label="Navigate to section"
                >
                  {sections.map((section) => (
                    <option key={section.id} value={section.id}>
                      {section.icon} {section.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-hidden">
          {renderActiveSection()}
        </main>

        {/* Bottom Navigation for Mobile */}
        <nav className="md:hidden bg-white border-t border-gray-200 sticky bottom-0 z-50 shadow-lg">
          <div className="grid grid-cols-5 gap-1 px-2 py-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex flex-col items-center py-2 px-1 rounded-lg transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                aria-label={`Navigate to ${section.label} section`}
              >
                <span className="text-lg mb-1">{section.icon}</span>
                <span className="text-xs font-medium">{section.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </ErrorBoundary>
  );
}

export default App;
