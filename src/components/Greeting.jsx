import { useEffect, useState } from "react";

const Greeting = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Safety check: ensure onComplete exists
    if (!onComplete) {
      console.error("Greeting component is missing onComplete prop!");
      return;
    }

    // Start fade out after 2.5s
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Unmount after animation finishes (3.3s total)
    const unmountTimer = setTimeout(() => {
      onComplete();
    }, 3300); 

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, [onComplete]);

  return (
    <div className={`greeting-overlay ${fadeOut ? "fade-out" : ""}`}>
      <div className="greeting-content">
        <h1 className="greeting-text">
          <span className="wave">👋</span> Hi, Welcome!
        </h1>
        <p className="greeting-sub">Step into Nithin's creative space.</p>
        
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>

      <style>{`
        .greeting-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: #0f172a; /* Dark background matching your theme */
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          transition: opacity 0.8s ease, visibility 0.8s ease;
        }

        .greeting-overlay.fade-out {
          opacity: 0;
          visibility: hidden;
        }

        .greeting-content { text-align: center; color: white; }
        .greeting-text { font-size: 2.5rem; margin-bottom: 10px; }
        .loading-bar { width: 200px; height: 4px; background: rgba(255,255,255,0.1); margin: 20px auto; border-radius: 2px; overflow: hidden; }
        .loading-progress { width: 100%; height: 100%; background: #2563eb; animation: load 2.5s linear forwards; }
        
        @keyframes load { from { transform: translateX(-100%); } to { transform: translateX(0); } }
        .wave { display: inline-block; animation: wave-animation 2.5s infinite; transform-origin: 70% 70%; }
        @keyframes wave-animation {
            0% { transform: rotate( 0.0deg) }
           10% { transform: rotate(14.0deg) }
           20% { transform: rotate(-8.0deg) }
           30% { transform: rotate(14.0deg) }
           40% { transform: rotate(-4.0deg) }
           50% { transform: rotate(10.0deg) }
          100% { transform: rotate( 0.0deg) }
        }
      `}</style>
    </div>
  );
};

export default Greeting;