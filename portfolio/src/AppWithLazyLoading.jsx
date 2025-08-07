import { Suspense, lazy } from 'react';

// Lazy load components for better performance
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading component
const Loading = ({ section = 'content' }) => (
  <div className="flex items-center justify-center py-20">
    <div className="flex flex-col items-center space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      <p className="text-gray-600">Loading {section}...</p>
    </div>
  </div>
);

// Section wrapper with error boundary
const Section = ({ children, fallback }) => (
  <Suspense fallback={fallback || <Loading />}>
    {children}
  </Suspense>
);

function App() {
  return (
    <div className="min-h-screen">
      <Section fallback={<div className="h-20 bg-white"></div>}>
        <Header />
      </Section>
      
      <main>
        <Section fallback={<Loading section="hero section" />}>
          <Hero />
        </Section>
        
        <Section fallback={<Loading section="about section" />}>
          <About />
        </Section>
        
        <Section fallback={<Loading section="skills section" />}>
          <Skills />
        </Section>
        
        <Section fallback={<Loading section="experience section" />}>
          <Experience />
        </Section>
        
        <Section fallback={<Loading section="contact section" />}>
          <Contact />
        </Section>
      </main>
      
      <Section fallback={<div className="h-40 bg-gray-900"></div>}>
        <Footer />
      </Section>
    </div>
  );
}

export default App;
