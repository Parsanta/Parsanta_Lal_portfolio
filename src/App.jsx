import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import AnimatedBackground from './components/AnimatedBackground';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/certificates';
function App() {
  return (
    <div className="overflow-hidden text-neutral-300 antialiased selection:bg-cyan-300">
      <AnimatedBackground />
      <div className="container mx-auto px-8 relative z-10">
        <Navbar />
        <HeroSection />
        <About />
        <Skills/>
        <Experience/>
        <Projects/>
        <Certifications/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
