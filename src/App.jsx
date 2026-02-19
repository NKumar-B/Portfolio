import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Chatbox from './components/Chatbot';
import './index.css';
import Greeting from './components/Greeting';
import Services from './components/Services';
import Achievements from './components/Achievements';
import Internships from './components/Internships';
import Publications from './components/Publications';

// --- Theme Imports ---
import { ThemeProvider } from './components/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  // State to track if the greeting is still showing
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <div className="App">
        
        {/* 1. Show Greeting Overlay if loading is true */}
        {loading && (
          <Greeting onComplete={() => setLoading(false)} />
        )}

        {/* 2. Main Website Content (Fades in when greeting finishes) */}
        <div 
          style={{ 
            opacity: loading ? 0 : 1, 
            transition: 'opacity 1.5s ease-in-out',
            /* Optional: prevents scrolling while greeting is active */
            height: loading ? '100vh' : 'auto', 
            overflow: loading ? 'hidden' : 'visible'
          }}
        >
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Achievements />
          <Internships />
          <Projects />
          <Publications />
          <Services />
          <Resume />
          <Contact />
          <Footer />
          
          {/* Global Floating Elements */}
          <ThemeToggle />
          <Chatbox />
        </div>

      </div>
    </ThemeProvider>
  );
}

export default App;