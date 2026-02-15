import { useEffect, useState } from "react";

const Greeting = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  // State to track mouse position for the gradient
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    if (!onComplete) return;

    // Mouse movement handler
    const handleMouseMove = (e) => {
      // Calculate position as percentages of the window
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4000); 

    const unmountTimer = setTimeout(() => {
      onComplete();
    }, 4800); 

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, [onComplete]);

  return (
    <div className={`greeting-overlay ${fadeOut ? "fade-out" : ""}`}>
      {/* Interactive Background Glow: 
        Moves based on mousePos state 
      */}
      <div 
        className="bg-glow" 
        style={{ 
          left: `${mousePos.x}%`, 
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)' 
        }}
      ></div>
      
      <div className="greeting-content">
        
        {/* --- VIDEO CARD WITH 3D TILT --- */}
        <div className="video-container">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="greeting-video"
          >
            <source src="/greeting-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <h1 className="greeting-text">
          Hi, Welcome!
        </h1>
        <p className="greeting-sub-name"> I'am Badduluri Nithin Kumar.</p>
        <p className="greeting-sub">Step into my creative space.</p>
        
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
          background: #0f172a;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          transition: opacity 0.8s ease, visibility 0.8s ease;
          overflow: hidden;
        }

        /* INCREASED Mouse-following background glow */
        .bg-glow {
          position: absolute;
          width: 1000px; /* Increased from 800px */
          height: 1000px; /* Increased from 800px */
          background: radial-gradient(
            circle, 
            rgba(37, 99, 235, 0.4) 0%,   /* Increased opacity from 0.2 */
            rgba(147, 51, 234, 0.2) 35%,  /* Increased opacity from 0.1 */
            rgba(15, 23, 42, 0) 75%
          );
          border-radius: 50%;
          pointer-events: none;
          transition: left 0.15s ease-out, top 0.15s ease-out;
          z-index: 1;
          filter: blur(20px); /* Softens the edges for a smoother glow */
        }

        .greeting-overlay.fade-out {
          opacity: 0;
          visibility: hidden;
        }

        .greeting-content { 
          text-align: center; 
          color: white; 
          z-index: 10;
          perspective: 1000px;
        }

        .video-container {
          width: 280px;
          height: 280px;
          margin: 0 auto 30px;
          border-radius: 24px;
          overflow: hidden;
          border: 4px solid rgba(37, 99, 235, 0.8);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(37, 99, 235, 0.3);
          transform-style: preserve-3d;
          animation: tilt-3d 5s infinite ease-in-out;
        }

        .greeting-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.1);
        }

        .greeting-text { 
          font-size: 3rem; 
          margin-bottom: 10px; 
          font-weight: 800;
          animation: slide-up 0.8s ease-out;
        }
        
        .greeting-sub {
          font-size: 1.1rem;
          opacity: 0.8;
          animation: slide-up 1s ease-out;
        }

        .greeting-sub-name {
          font-size: 1.5rem;
          font-weight: 600;
          
          animation: slide-up 0.8s ease-out;
        }

        .loading-bar { 
          width: 250px; 
          height: 6px; 
          background: rgba(255,255,255,0.05); 
          margin: 30px auto 0; 
          border-radius: 10px; 
          overflow: hidden; 
          border: 1px solid rgba(255,255,255,0.1);
        }
        
        .loading-progress { 
          width: 100%; 
          height: 100%; 
          background: linear-gradient(90deg, #2563eb, #9333ea); 
          animation: load 4s linear forwards; 
        }
        
        @keyframes tilt-3d {
          0% { transform: rotateY(0deg) rotateX(0deg); }
          25% { transform: rotateY(15deg) rotateX(5deg); }
          50% { transform: rotateY(0deg) rotateX(10deg); }
          75% { transform: rotateY(-15deg) rotateX(5deg); }
          100% { transform: rotateY(0deg) rotateX(0deg); }
        }

        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes load { from { transform: translateX(-100%); } to { transform: translateX(0); } }
      `}</style>
    </div>
  );
};

export default Greeting;