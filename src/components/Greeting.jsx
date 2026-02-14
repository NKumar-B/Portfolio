import { useEffect, useState } from "react";

const Greeting = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 1. Wait 2.5 seconds, then start fading out
    const timer = setTimeout(() => {
      setFadeOut(true);
      
      // 2. Wait another 0.8s for the fade animation to finish, then unmount
      setTimeout(() => {
        onComplete();
      }, 800); 
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`greeting-overlay ${fadeOut ? "fade-out" : ""}`}>
      <div className="greeting-content">
        <h1 className="greeting-text">
          <span className="wave">👋</span> Hi, Welcome!
        </h1>
        <p className="greeting-sub">Step into my creative space.</p>
        
        {/* Loading Line */}
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;