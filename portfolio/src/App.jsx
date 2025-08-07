import { Suspense, lazy } from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load components for better performance
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  // Loading component with improved design
  const LoadingSpinner = () => (
    <div className="flex items-center justify-center h-64">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
        <div className="absolute inset-0 animate-spin rounded-full h-16 w-16 border-t-2 border-purple-600" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
      </div>
    </div>
  );

  return (
    <ErrorBoundary>
      {/* Improved semantic structure with better accessibility */}
      <div className="min-h-screen bg-white">
        {/* Header with sticky navigation */}
        <Suspense fallback={<div className="h-16 bg-white border-b"></div>}>
          <Header />
        </Suspense>

        {/* Main content with proper semantic structure */}
        <main className="relative">
          {/* Hero Section */}
          <section id="home" className="min-h-screen">
            <Suspense fallback={<LoadingSpinner />}>
              <Hero />
            </Suspense>
          </section>

          {/* About Section */}
          <section id="about" className="min-h-screen">
            <Suspense fallback={<LoadingSpinner />}>
              <About />
            </Suspense>
          </section>

          {/* Skills Section */}
          <section id="skills" className="min-h-screen">
            <Suspense fallback={<LoadingSpinner />}>
              <Skills />
            </Suspense>
          </section>

          {/* Experience Section */}
          <section id="experience" className="min-h-screen">
            <Suspense fallback={<LoadingSpinner />}>
              <Experience />
            </Suspense>
          </section>

          {/* Contact Section */}
          <section id="contact" className="min-h-screen">
            <Suspense fallback={<LoadingSpinner />}>
              <Contact />
            </Suspense>
          </section>
        </main>

        {/* Footer */}
        <Suspense fallback={<div className="h-32 bg-gray-900"></div>}>
          <Footer />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
