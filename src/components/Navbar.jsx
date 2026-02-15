import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  
  // State for the sliding indicator
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // 1. Handle Background Change on Scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Active Section Detection
  useEffect(() => {
    const handleActiveLink = () => {
      // Add 'services' and others to the list
      const sections = ['home', 'about', 'skills','achievements','internships', 'projects','services', 'resume', 'contact'];
      
      let current = 'home';
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Logic: If top of section is near middle of viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleActiveLink);
    return () => window.removeEventListener('scroll', handleActiveLink);
  }, []);

  // 3. Calculate Slider Position
  useEffect(() => {
    // Only calculate if not on mobile (isOpen check is a simple proxy, better to use media query)
    if (window.innerWidth > 768) {
      const activeItem = document.querySelector(`.nav-item[href="#${activeSection}"]`);
      const navList = navRef.current;

      if (activeItem && navList) {
        const itemRect = activeItem.getBoundingClientRect();
        const listRect = navList.getBoundingClientRect();

        setIndicatorStyle({
          left: itemRect.left - listRect.left, 
          width: itemRect.width,
          opacity: 1
        });
      }
    } else {
      setIndicatorStyle({ opacity: 0 }); // Hide on mobile
    }
  }, [activeSection, isOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          
          {/* Logo Logic */}
          <h1 className="logo">
            <a href="#home">
              {activeSection === 'home' ? (
                <span className="portfolio-text">PORTFOLIO</span>
              ) : (
                <span className="name-text">Nithin Kumar</span>
              )}
            </a>
          </h1>
          
          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={isOpen ? "nav-links active" : "nav-links"} ref={navRef}>
            
            {/* SLIDING INDICATOR (Blue Line) */}
            <li 
              className="nav-indicator" 
              style={{ 
                left: `${indicatorStyle.left}px`, 
                width: `${indicatorStyle.width}px`,
                opacity: indicatorStyle.opacity 
              }} 
            />

            {['Home', 'About','Skills','Achievements','Internships','Projects','Services', 'Resume', 'Contact'].map((item) => {
              const lowerItem = item.toLowerCase();
              return (
                <li key={item}>
                  <a 
                    href={`#${lowerItem}`} 
                    className={activeSection === lowerItem ? 'nav-item active' : 'nav-item'}
                    onClick={() => {
                      setActiveSection(lowerItem);
                      setIsOpen(false);
                    }}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* --- EMBEDDED CSS (Updated for Dark Mode) --- */}
      <style>{`
        /* 1. Navbar Base Styling */
        .navbar {
          width: 100%;
          height: 80px;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          transition: all 0.4s ease-in-out;
          background: var(--nav-bg); /* Use theme variable */
          box-shadow: 0 1px 0 var(--border-color); /* Subtle border */
          backdrop-filter: blur(10px);
        }

        /* Scrolled State */
        .navbar.scrolled {
          height: 70px; /* Compresses slightly */
          box-shadow: 0 4px 20px var(--shadow-color);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
          padding: 0 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* 2. Logo Styling */
        .logo a {
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        .portfolio-text {
          font-size: 1.8rem;
          font-weight: 900;
          letter-spacing: 2px;
          background: linear-gradient(to right, var(--accent-color), #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-transform: uppercase;
          animation: fadeIn 0.5s ease-in-out;
        }

        .name-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary); /* Dark mode compatible */
          animation: slideIn 0.5s ease-in-out;
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }

        /* 3. Navigation Links */
        .nav-links {
          display: flex;
          gap: 30px;
          list-style: none;
          position: relative; /* Needed for indicator positioning */
        }

        .nav-item {
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-secondary); /* Grey in light, lighter in dark */
          text-decoration: none;
          padding: 8px 0;
          position: relative;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        /* Hover & Active Text Color */
        .nav-item:hover, .nav-item.active {
          color: var(--accent-color); /* Blue Highlight */
          font-weight: 700;
        }

        /* 4. Sliding Indicator (The Blue Line) */
        .nav-indicator {
          position: absolute;
          bottom: 0;
          height: 3px;
          background-color: var(--accent-color);
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
          z-index: 10;
        }

        /* 5. Mobile Responsiveness */
        .hamburger {
          display: none;
          font-size: 1.6rem;
          color: var(--text-primary);
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .hamburger { display: block; }

          .nav-links {
            position: fixed;
            top: 70px;
            right: -100%;
            width: 100%;
            height: calc(100vh - 70px);
            background: var(--bg-card); /* Theme background */
            flex-direction: column;
            justify-content: flex-start;
            padding-top: 50px;
            align-items: center;
            transition: right 0.3s ease;
            box-shadow: none;
            border-top: 1px solid var(--border-color);
          }

          .nav-links.active { right: 0; }

          .nav-item {
            font-size: 1.2rem;
            margin-bottom: 25px;
            width: 100%;
            text-align: center;
          }
          
          /* Hide the sliding line on mobile */
          .nav-indicator { display: none !important; }
          
          /* Simple active state for mobile */
          .nav-item.active {
             background: rgba(37, 99, 235, 0.1);
             border-right: 4px solid var(--accent-color);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;