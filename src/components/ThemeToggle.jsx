import { useTheme } from './ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme} 
      className="theme-toggle-btn"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? <FaMoon /> : <FaSun />}
      
      {/* --- EMBEDDED CSS --- */}
      <style>{`
        .theme-toggle-btn {
          position: fixed;
          bottom: 30px;
          left: 30px; /* <--- CHANGED FROM 'right' TO 'left' */
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: none;
          background: var(--accent-color);
          color: white;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 15px var(--shadow-color);
          z-index: 1000;
          transition: all 0.3s ease;
        }
        .theme-toggle-btn:hover {
          transform: scale(1.1) rotate(15deg);
          background: var(--accent-hover);
        }
      `}</style>
    </button>
  );
};

export default ThemeToggle;