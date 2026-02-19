// import { FaEnvelope, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
// import { Typewriter } from 'react-simple-typewriter';
// import { Tilt } from 'react-tilt';
// import profilePic from '/profile.jpg'; 

// const Hero = () => {
//   return (
//     <>
//       {/* --- EMBEDDED CSS --- */}
//       <style>{`
//         /* 1. Hero Section Background & Layout */
//         .hero {
//           position: relative;
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
//           overflow: hidden;
//           padding-top: 80px; 
//           transition: background 0.3s ease;
//         }

//         /* 2. Floating Background Blobs */
//         .blob {
//           position: absolute;
//           border-radius: 50%;
//           filter: blur(80px);
//           opacity: 0.6;
//           z-index: 0;
//           animation: floatBlob 10s infinite alternate;
//         }
//         .blob-1 {
//           width: 500px; height: 500px;
//           background: var(--blob-color-1);
//           top: -100px; left: -100px;
//         }
//         .blob-2 {
//           width: 400px; height: 400px;
//           background: var(--blob-color-2);
//           bottom: -50px; right: -100px;
//           animation-delay: 2s;
//         }

//         @keyframes floatBlob {
//           0% { transform: translate(0, 0); }
//           100% { transform: translate(20px, 40px); }
//         }

//         /* 3. Container Layout */
//         .hero-container {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           width: 100%;
//           max-width: 1200px;
//           padding: 0 20px;
//           position: relative;
//           z-index: 2;
//           gap: 40px;
//         }

//         /* --- LEFT SIDE: TEXT CONTENT --- */
//         .hero-text {
//           flex: 1;
//           max-width: 650px;
//         }

//         .hero-text h1 {
//           font-size: 3.5rem;
//           font-weight: 800;
//           color: var(--text-primary);
//           line-height: 1.1;
//           margin-bottom: 15px;
//         }

//         .text-gradient {
//           background: linear-gradient(to right, var(--accent-color), #7c3aed);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .role-text {
//           font-size: 1.8rem;
//           font-weight: 600;
//           color: var(--text-secondary);
//           margin-bottom: 20px;
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }
//         .role-text span {
//           color: var(--accent-color);
//           font-weight: 700;
//         }

//         .hero-description {
//           font-size: 1.1rem;
//           color: var(--text-secondary);
//           line-height: 1.7;
//           margin-bottom: 30px;
//           max-width: 90%;
//         }

//         /* --- UPDATED SOCIAL ICONS (Matching Contact.jsx) --- */
//         .hero-socials {
//           display: flex;
//           gap: 15px;
//           margin-bottom: 35px;
//         }
//         .social-icon {
//           width: 48px; height: 48px;
//           border-radius: 50%;
//           background: var(--bg-card);
//           border: 1px solid var(--border-color);
//           display: flex; justify-content: center; align-items: center;
//           font-size: 1.2rem;
//           color: var(--text-secondary);
//           transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
//           position: relative;
//           box-shadow: 0 4px 10px var(--shadow-color);
//           text-decoration: none;
//         }
        
//         .social-icon:hover {
//           background: var(--accent-color);
//           color: white;
//           border-color: var(--accent-color);
//           transform: translateY(-5px) scale(1.1);
//           box-shadow: 0 8px 20px rgba(37, 99, 235, 0.2);
//         }

//         /* Tooltip Logic from Contact.jsx */
//         .social-icon::before {
//           content: attr(data-tooltip);
//           position: absolute; 
//           top: -35px; 
//           left: 50%; 
//           transform: translateX(-50%) scale(0);
//           background: var(--text-primary); 
//           color: var(--bg-primary); 
//           font-size: 0.75rem; 
//           padding: 4px 10px;
//           border-radius: 6px; 
//           opacity: 0; 
//           transition: all 0.3s ease; 
//           pointer-events: none;
//           white-space: nowrap; 
//           font-weight: 600;
//         }
//         .social-icon:hover::before { 
//           opacity: 1; 
//           transform: translateX(-50%) scale(1); 
//           top: -45px; 
//         }

//         /* Buttons Row */
//         .hero-btns {
//           display: flex;
//           gap: 20px;
//         }

//         .btn-glow {
//           padding: 14px 32px;
//           background: var(--accent-color);
//           color: white;
//           border-radius: 12px;
//           font-weight: 600;
//           text-decoration: none;
//           transition: all 0.3s ease;
//           border: 1px solid var(--accent-color);
//           box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
//         }
//         .btn-glow:hover {
//           background: var(--accent-hover);
//           transform: translateY(-2px);
//           box-shadow: 0 10px 25px rgba(37, 99, 235, 0.5);
//         }

//         .btn-black {
//           padding: 14px 32px;
//           background: var(--text-primary);
//           color: var(--bg-primary);
//           border-radius: 12px;
//           font-weight: 600;
//           text-decoration: none;
//           display: flex; align-items: center; gap: 10px;
//           transition: all 0.3s ease;
//           border: 1px solid var(--text-primary);
//           box-shadow: 0 4px 15px var(--shadow-color);
//         }
//         .btn-black:hover {
//           background: transparent;
//           color: var(--text-primary);
//           border-color: var(--text-primary);
//           transform: translateY(-2px);
//           box-shadow: 0 10px 25px rgba(0,0,0,0.3);
//         }

//         /* --- RIGHT SIDE: 3D IMAGE WRAPPER --- */
//         .hero-image-wrapper {
//           flex: 1;
//           display: flex;
//           justify-content: center;
//           perspective: 1000px;
//         }

//         .profile-box {
//           width: 380px; 
//           height: 380px;
//           border-radius: 30px;
//           background: var(--bg-card);
//           padding: 15px; 
//           box-shadow: 0 20px 50px var(--shadow-color);
//           transform-style: preserve-3d;
//           transition: transform 0.3s ease, background 0.3s ease;
//         }

//         .profile-img-hover {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           border-radius: 20px;
//           transition: transform 0.5s ease;
//         }
//         .profile-box:hover .profile-img-hover {
//           transform: scale(1.02);
//         }

//         /* --- SCROLL DOWN MOUSE ANIMATION --- */
//         .scroll-down {
//           position: absolute;
//           bottom: 30px;
//           left: 50%;
//           transform: translateX(-50%);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 10px;
//           opacity: 0.7;
//           animation: bounce 2s infinite;
//         }
//         .scroll-down span {
//           font-size: 0.85rem;
//           font-weight: 600;
//           color: var(--text-secondary);
//           letter-spacing: 1px;
//           text-transform: uppercase;
//         }
//         .mouse {
//           width: 30px;
//           height: 50px;
//           border: 2px solid var(--text-secondary);
//           border-radius: 20px;
//           position: relative;
//         }
//         .wheel {
//           width: 4px;
//           height: 8px;
//           background: var(--text-secondary);
//           border-radius: 2px;
//           position: absolute;
//           top: 10px;
//           left: 50%;
//           transform: translateX(-50%);
//           animation: scrollWheel 1.5s infinite;
//         }

//         @keyframes scrollWheel {
//           0% { top: 10px; opacity: 1; }
//           100% { top: 30px; opacity: 0; }
//         }
//         @keyframes bounce {
//           0%, 20%, 50%, 80%, 100% { transform: translate(-50%, 0); }
//           40% { transform: translate(-50%, -10px); }
//           60% { transform: translate(-50%, -5px); }
//         }

//         @media (max-width: 900px) {
//           .hero { padding-top: 100px; height: auto; padding-bottom: 50px; }
//           .hero-container { 
//             flex-direction: column-reverse; 
//             text-align: center; 
//             gap: 40px;
//           }
//           .hero-text { max-width: 100%; }
//           .hero-text h1 { font-size: 2.5rem; }
//           .role-text { justify-content: center; font-size: 1.4rem; }
//           .hero-socials { justify-content: center; }
//           .hero-btns { justify-content: center; }
//           .hero-image-wrapper { margin-left: 0 !important; width: 100%; }
//           .profile-box { width: 300px; height: 300px; }
//           .scroll-down { display: none; }
//         }
//       `}</style>

//       {/* --- JSX STRUCTURE --- */}
//       <section id="home" className="hero">
//         <div className="blob blob-1"></div>
//         <div className="blob blob-2"></div>

//         <div className="container hero-container">
//           <div className="hero-text">
//             <h1>Hi, I'm <span className="text-gradient" style={{ whiteSpace: 'nowrap' }}>Badduluri Nithin Kumar</span></h1>
            
//             <h2 className="role-text">
//               I am a{' '}
//               <span>
//                 <Typewriter
//                   words={['Fullstack Java Developer.', 'AI & DS Enthusiast.', 'Tech Innovator.']}
//                   loop={0} cursor cursorStyle='|' typeSpeed={80} deleteSpeed={50} delaySpeed={2000}
//                 />
//               </span>
//             </h2>

//             <p className="hero-description">
//               Transforming ideas into scalable web applications and intelligent AI solutions. 
//               Focused on building efficient, modern, and user-centric digital experiences.
//             </p>

//             {/* Social Icons with Tooltips */}
//             <div className="hero-socials">
//               <a href="https://github.com/NKumar-B" target="_blank" rel="noreferrer" className="social-icon" data-tooltip="GitHub">
//                 <FaGithub />
//               </a>
//               <a href="https://linkedin.com/in/nithin-kumar-badduluri-3942512a6" target="_blank" rel="noreferrer" className="social-icon" data-tooltip="LinkedIn">
//                 <FaLinkedin />
//               </a>
//               <a href="mailto:nithinkumarbadduluri@gmail.com" className="social-icon" data-tooltip="Email">
//                 <FaEnvelope />
//               </a>
//             </div>

//             <div className="hero-btns">
//               <a href="#projects" className="btn btn-glow">View My Work</a>
//               <a href="/resume.pdf" download className="btn btn-black">
//                 Resume <FaDownload size={12}/>
//               </a>
//             </div>
//           </div>

//           <div className="hero-image-wrapper">
//             <Tilt className="Tilt" options={{ max: 25, scale: 1.05, speed: 400 }}>
//               <div className="profile-box">
//                  <img src={profilePic} alt="Nithin Kumar" className="profile-img-hover" />
//               </div>
//             </Tilt>
//           </div>
//         </div>

//         <div className="scroll-down">
//           <div className="mouse"><div className="wheel"></div></div>
//           <span>Scroll Down</span>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;


import { FaEnvelope, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { Tilt } from 'react-tilt';
import profilePic from '/profile.jpg'; 

const Hero = () => {
  return (
    <>
      <style>{`
        .hero {
          position: relative;
          min-height: 88vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          overflow: hidden;
          padding-top: 80px; 
          transition: background 0.3s ease;
        }

        /* --- SECTION HEADING & SUBHEADING GLOW --- */
        .hero h1 {
          font-size: 3.0rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.1;
          margin-bottom: 15px;
          transition: all 0.3s ease;
        }

        .hero-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 30px;
          max-width: 90%;
          transition: all 0.3s ease;
        }

        .hero:hover h1 {
          text-shadow: 0 0 20px var(--accent-color);
        }

        .hero:hover .hero-description {
          color: var(--text-primary);
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        }

        /* --- SOCIAL ICONS GLOW --- */
        .social-icon {
          width: 48px; height: 48px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          display: flex; justify-content: center; align-items: center;
          font-size: 1.2rem;
          color: var(--text-secondary);
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          position: relative;
          text-decoration: none;
        }
        
        .social-icon:hover {
          background: var(--accent-color);
          color: white;
          border-color: var(--accent-color);
          transform: translateY(-5px) scale(1.1);
          /* High-intensity glow matching accent */
          box-shadow: 0 0 20px var(--accent-color), 0 0 40px rgba(37, 99, 235, 0.2);
        }

        /* --- PRIMARY BUTTON GLOW --- */
        .btn-glow {
          padding: 14px 32px;
          background: var(--accent-color);
          color: white;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid var(--accent-color);
          box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
        }

        .btn-glow:hover {
          background: var(--accent-hover);
          transform: translateY(-2px);
          /* Pulsing radiance effect */
          box-shadow: 0 0 25px var(--accent-color), 0 0 50px rgba(37, 99, 235, 0.3);
        }

        /* --- SECONDARY BUTTON GLOW --- */
        .btn-black {
          padding: 14px 32px;
          background: var(--text-primary);
          color: var(--bg-primary);
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          display: flex; align-items: center; gap: 10px;
          transition: all 0.3s ease;
          border: 1px solid var(--text-primary);
        }

        .btn-black:hover {
          background: transparent;
          color: var(--text-primary);
          border-color: var(--text-primary);
          transform: translateY(-2px);
          /* Shadow glow for secondary button */
          box-shadow: 0 0 15px var(--text-primary);
        }

        /* --- BLOB ENGINE --- */
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.6;
          z-index: 0;
          animation: floatBlob 10s infinite alternate;
        }
        .blob-1 { width: 500px; height: 500px; background: var(--blob-color-1); top: -100px; left: -100px; }
        .blob-2 { width: 400px; height: 400px; background: var(--blob-color-2); bottom: -50px; right: -100px; animation-delay: 2s; }

        @keyframes floatBlob { 0% { transform: translate(0, 0); } 100% { transform: translate(20px, 40px); } }

        .hero-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1200px;
          padding: 0 20px;
          position: relative;
          z-index: 2;
          gap: 40px;
        }

        .hero-text { flex: 1; max-width: 650px; }

        .text-gradient {
          background: linear-gradient(to right, var(--accent-color), #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .role-text {
          font-size: 1.8rem; font-weight: 600; color: var(--text-secondary);
          margin-bottom: 20px; display: flex; align-items: center; gap: 10px;
        }
        .role-text span { color: var(--accent-color); font-weight: 700; }

        .hero-socials { display: flex; gap: 15px; margin-bottom: 35px; }

        /* Tooltip Logic */
        .social-icon::before {
          content: attr(data-tooltip);
          position: absolute; top: -35px; left: 50%; transform: translateX(-50%) scale(0);
          background: var(--text-primary); color: var(--bg-primary); 
          font-size: 0.75rem; padding: 4px 10px; border-radius: 6px; 
          opacity: 0; transition: all 0.3s ease; pointer-events: none;
          white-space: nowrap; font-weight: 600;
        }
        .social-icon:hover::before { opacity: 1; transform: translateX(-50%) scale(1); top: -45px; }

        .hero-btns { display: flex; gap: 20px; }

        .hero-image-wrapper { flex: 1; display: flex; justify-content: center; perspective: 1000px; }

        .profile-box {
          width: 380px; height: 380px; border-radius: 30px;
          background: var(--bg-card); padding: 15px; 
          box-shadow: 0 20px 50px var(--shadow-color);
          transform-style: preserve-3d; transition: all 0.3s ease;
        }

        .profile-img-hover {
          width: 100%; height: 100%; object-fit: cover; border-radius: 20px;
          transition: transform 0.5s ease;
        }
        .profile-box:hover { box-shadow: 0 0 30px var(--accent-color); }
        .profile-box:hover .profile-img-hover { transform: scale(1.02); }

        .scroll-down {
          position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 10px;
          opacity: 0.7; animation: bounce 2s infinite;
        }
        .scroll-down span { font-size: 0.85rem; font-weight: 600; color: var(--text-secondary); letter-spacing: 1px; text-transform: uppercase; }
        .mouse { width: 30px; height: 50px; border: 2px solid var(--text-secondary); border-radius: 20px; position: relative; }
        .wheel { width: 4px; height: 8px; background: var(--text-secondary); border-radius: 2px; position: absolute; top: 10px; left: 50%; transform: translateX(-50%); animation: scrollWheel 1.5s infinite; }

        @keyframes scrollWheel { 0% { top: 10px; opacity: 1; } 100% { top: 30px; opacity: 0; } }
        @keyframes bounce { 0%, 20%, 50%, 80%, 100% { transform: translate(-50%, 0); } 40% { transform: translate(-50%, -10px); } 60% { transform: translate(-50%, -5px); } }

        @media (max-width: 900px) {
          .hero { padding-top: 100px; height: auto; padding-bottom: 50px; }
          .hero-container { flex-direction: column-reverse; text-align: center; gap: 40px; }
          .hero h1 { font-size: 2.5rem; }
          .role-text { justify-content: center; font-size: 1.4rem; }
          .hero-socials { justify-content: center; }
          .hero-btns { justify-content: center; }
          .profile-box { width: 300px; height: 300px; }
          .scroll-down { display: none; }
        }
      `}</style>

      <section id="home" className="hero">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>

        <div className="container hero-container">
          <div className="hero-text">
            <h1>Hi, I'm <span className="text-gradient" style={{ whiteSpace: 'nowrap' }}>Badduluri Nithin Kumar</span></h1>
            
            <h2 className="role-text">
              I am a{' '}
              <span>
                <Typewriter
                  words={['Fullstack Java Developer.','Data Scientist.', 'AI & DS Enthusiast.', 'Tech Innovator.']}
                  loop={0} cursor cursorStyle='|' typeSpeed={80} deleteSpeed={50} delaySpeed={2000}
                />
              </span>
            </h2>

            <p className="hero-description">
              Transforming ideas into scalable web applications and intelligent AI solutions. 
              Focused on building efficient, modern, and user-centric digital experiences.
            </p>

            <div className="hero-socials">
              <a href="https://github.com/NKumar-B" target="_blank" rel="noreferrer" className="social-icon" data-tooltip="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/nithin-kumar-badduluri-3942512a6" target="_blank" rel="noreferrer" className="social-icon" data-tooltip="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:nithinkumarbadduluri@gmail.com" className="social-icon" data-tooltip="Email">
                <FaEnvelope />
              </a>
            </div>

            <div className="hero-btns">
              <a href="#projects" className="btn btn-glow">View My Work</a>
              <a href="/resume.pdf" download className="btn btn-black">
                Resume <FaDownload size={12}/>
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <Tilt className="Tilt" options={{ max: 25, scale: 1.05, speed: 400 }}>
              <div className="profile-box">
                 <img src={profilePic} alt="Nithin Kumar" className="profile-img-hover" />
              </div>
            </Tilt>
          </div>
        </div>

        <div className="scroll-down">
          <div className="mouse"><div className="wheel"></div></div>
          <span>Scroll Down</span>
        </div>
      </section>
    </>
  );
};

export default Hero;