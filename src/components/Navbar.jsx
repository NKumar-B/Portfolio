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
      const sections = ['home', 'about', 'skills','achievements','internships', 'projects','publications','services', 'resume', 'contact'];
      
      let current = 'home';
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
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

  // 3. Calculate Slider Position (UPDATED: Added window resize listener)
  useEffect(() => {
    const updateIndicator = () => {
      // Logic: Only calculate if screen is wider than 900px (matching the CSS breakpoint)
      if (window.innerWidth > 900) {
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
        setIndicatorStyle({ left: 0, width: 0, opacity: 0 }); // Hide on mobile
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeSection, isOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          
          {/* Logo Logic */}
          <h1 className="logo">
            <a href="#home">
              {activeSection === 'home' ? (
                <span className="portfolio-text"> PORTFOLIO</span>
              ) : (
                <span className="name-text">Nithin Kumar</span>
              )}
            </a>
          </h1>
          
          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={isOpen ? "nav-links active" : "nav-links"} ref={navRef}>
            
            {/* SLIDING INDICATOR (Blue Line) - Only visible on Desktop */}
            <li 
              className="nav-indicator" 
              style={{ 
                left: `${indicatorStyle.left}px`, 
                width: `${indicatorStyle.width}px`,
                opacity: indicatorStyle.opacity 
              }} 
            />

            {['Home', 'About','Skills','Achievements','Internships','Projects','Publications','Services', 'Resume', 'Contact'].map((item) => {
              const lowerItem = item.toLowerCase();
              return (
                <li key={item} style={{ width: isOpen ? '100%' : 'auto' }}>
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

      {/* --- EMBEDDED CSS --- */}
      <style>{`
        .navbar {
          width: 100%;
          height: 80px;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          transition: all 0.4s ease-in-out;
          background: var(--nav-bg); 
          box-shadow: 0 1px 0 var(--border-color); 
          backdrop-filter: blur(10px);
        }

        .navbar.scrolled {
          height: 70px;
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
          // font-size: 1.5rem;
          // font-weight: 700;
          // color: var(--text-primary);
          // animation: slideIn 0.5s ease-in-out;

          font-size: 1.5rem;
          font-weight: 900;
          letter-spacing: 1px;
          background: linear-gradient(to right, var(--accent-color), #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-transform: uppercase;
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }

        .nav-links {
          display: flex;
          gap: 30px;
          list-style: none;
          position: relative;
        }

        .nav-item {
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          padding: 8px 0;
          position: relative;
          transition: all 0.3s ease;
          cursor: pointer;
          display: block;
        }

        .nav-item:hover, .nav-item.active {
          color: var(--accent-color);
          font-weight: 700;
        }

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

        .hamburger {
          display: none;
          font-size: 1.6rem;
          color: var(--text-primary);
          cursor: pointer;
        }

        /* 5. Mobile Responsiveness FIXES */
        @media (max-width: 900px) {
          .hamburger { display: block; }

          .nav-links {
            position: fixed;
            top: 70px;
            right: -100%;
            width: 100%;
            height: calc(100vh - 70px);
            background: var(--bg-card); 
            flex-direction: column;
            justify-content: flex-start;
            padding: 50px 0;
            align-items: center;
            transition: right 0.3s ease;
            border-top: 1px solid var(--border-color);
            overflow-y: auto;
          }

          .nav-links.active { right: 0; }

          .nav-item {
            font-size: 1.2rem;
            padding: 15px 0;
            width: 100%;
            text-align: center;
          }
          
          /* CRITICAL FIX: Explicitly hide the sliding line on mobile */
          .nav-indicator { 
            display: none !important; 
            opacity: 0 !important;
          }
          
          /* Cleaner active state for mobile stacked links */
          .nav-item.active {
             background: rgba(37, 99, 235, 0.1);
             border-left: 4px solid var(--accent-color);
             border-right: 4px solid var(--accent-color);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;