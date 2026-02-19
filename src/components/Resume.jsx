import { FaDownload, FaEye, FaFilePdf, FaJava, FaReact, FaBrain, FaLayerGroup, FaNetworkWired, FaCheckCircle } from "react-icons/fa";
import { SiPython } from "react-icons/si";

const Resume = () => {
  return (
    <>
      <style>{`
        /* --- ULTIMATE RESUME SECTION --- */
        .resume-section {
          position: relative;
          padding: 100px 0;
          background: var(--bg-primary);
          overflow: hidden;
          width: 100%;
          transition: background 0.3s ease;
          border-top: 1px solid var(--border-color);
        }

        /* --- SECTION HEADING & SUBHEADING AURA GLOW --- */
        .section-header {
          margin-bottom: 60px;
          text-align: center;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          color: var(--text-primary);
          position: relative;
          display: inline-block;
          padding: 10px 20px;
          transition: all 0.5s ease;
          z-index: 2;
          /* Multi-layered Aura Glow */
          text-shadow: 
            0 0 10px rgba(37, 99, 235, 0.2),
            0 0 20px rgba(37, 99, 235, 0.15),
            0 0 40px rgba(37, 99, 235, 0.1);
        }

        .resume-section:hover .section-title {
          color: var(--accent-color);
          text-shadow: 
            0 0 15px var(--accent-color),
            0 0 30px var(--accent-color),
            0 0 60px rgba(37, 99, 235, 0.6);
          transform: translateY(-5px) scale(1.02);
        }

        .section-subtitle-main {
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin-top: 15px;
          transition: all 0.5s ease;
          opacity: 0.8;
          filter: drop-shadow(0 0 8px rgba(37, 99, 235, 0.1));
        }

        .resume-section:hover .section-subtitle-main {
          color: var(--text-primary);
          opacity: 1;
          filter: drop-shadow(0 0 12px var(--accent-color));
        }

        /* Background Blur Blob */
        .resume-bg-blur {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 400px; height: 400px;
          background: radial-gradient(circle, var(--blob-color-1) 0%, rgba(255,255,255,0) 70%);
          z-index: 0;
          opacity: 0.6;
        }

        .resume-container {
          position: relative;
          z-index: 1;
          background: var(--bg-card);
          backdrop-filter: blur(20px);
          border: 1px solid var(--border-color);
          border-radius: 24px;
          padding: 40px 30px;
          box-shadow: 0 20px 50px var(--shadow-color);
          display: flex;
          align-items: center;
          gap: 40px;
          max-width: 850px;
          margin: 0 auto;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .resume-container:hover {
          border-color: var(--accent-color);
          box-shadow: 0 0 30px rgba(37, 99, 235, 0.2);
          transform: translateY(-5px);
        }

        /* --- 1. ORBIT ANIMATION --- */
        .orbit-wrapper {
          position: relative;
          width: 180px; height: 180px;
          display: flex; justify-content: center; align-items: center;
          flex-shrink: 0;
        }

        .center-doc {
          font-size: 3rem;
          color: #ef4444; 
          z-index: 10;
          filter: drop-shadow(0 10px 20px rgba(239,68,68,0.3));
          animation: floatDoc 3s ease-in-out infinite;
          transition: all 0.3s ease;
        }

        .resume-container:hover .center-doc {
          filter: drop-shadow(0 0 15px #ef4444);
          transform: scale(1.1);
        }

        @keyframes floatDoc {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .orbit {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed var(--border-color);
          display: flex; justify-content: center; align-items: center;
          transition: all 0.5s ease;
        }

        [data-theme="dark"] .orbit { border-color: rgba(255, 255, 255, 0.3); }
        .resume-container:hover .orbit { border-color: var(--accent-color); border-style: solid; }

        .orbit-1 { width: 110px; height: 110px; animation: spinRight 10s linear infinite; }
        .orbit-2 { width: 170px; height: 170px; animation: spinLeft 15s linear infinite; }

        .planet {
          position: absolute;
          width: 32px; height: 32px;
          background: var(--bg-card);
          border-radius: 50%;
          box-shadow: 0 5px 15px var(--shadow-color);
          display: flex; justify-content: center; align-items: center;
          font-size: 1rem;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .resume-container:hover .planet {
          box-shadow: 0 0 15px var(--accent-color);
          border-color: var(--accent-color);
        }

        .p-java { top: -16px; color: #e76f00; transform: rotate(-90deg); } 
        .p-python { bottom: -16px; color: #3776ab; }
        .p-react { top: 50%; left: -16px; transform: translateY(-50%); color: #61dafb; }
        .p-ai { top: 50%; right: -16px; transform: translateY(-50%); color: #a855f7; }

        @keyframes spinRight { 100% { transform: rotate(360deg); } }
        @keyframes spinLeft { 100% { transform: rotate(-360deg); } }

        /* --- 2. CONTENT GLOW --- */
        .resume-content { flex: 1; text-align: left; }

        .badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--bg-secondary);
          color: var(--accent-color);
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 10px;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .resume-container:hover .badge-pill {
          box-shadow: 0 0 10px var(--accent-color);
          background: var(--bg-card);
        }

        .name-gradient {
          font-size: 2.2rem;
          font-weight: 800;
          margin-bottom: 10px;
          line-height: 1.1;
          background: linear-gradient(to right, var(--text-primary), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: all 0.3s ease;
        }

        .resume-container:hover .name-gradient {
          filter: drop-shadow(0 0 8px rgba(37, 99, 235, 0.3));
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 10px;
          margin-bottom: 25px;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--bg-card);
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-3px);
          border-color: var(--accent-color);
          box-shadow: 0 5px 15px rgba(37, 99, 235, 0.3);
        }

        .stat-icon {
          width: 30px; height: 30px;
          background: var(--bg-secondary);
          color: var(--accent-color);
          border-radius: 8px;
          display: flex; justify-content: center; align-items: center;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .stat-card:hover .stat-icon {
          background: var(--accent-color);
          color: white;
          box-shadow: 0 0 10px var(--accent-color);
        }

        .resume-btns { display: flex; gap: 12px; }

        .btn-black {
          padding: 10px 20px;
          background: var(--text-primary);
          color: var(--bg-primary);
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.9rem;
          display: flex; align-items: center; gap: 8px;
          text-decoration: none;
          border: 2px solid var(--text-primary);
          transition: all 0.3s ease;
        }

        .btn-black:hover {
          background: transparent;
          color: var(--text-primary);
          transform: translateY(-3px);
          box-shadow: 0 0 15px var(--text-primary);
        }

        .btn-glow-blue {
          padding: 10px 20px;
          background: var(--accent-color);
          border-radius: 10px;
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
          display: flex; gap: 8px; align-items: center;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
        }

        .btn-glow-blue:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 0 20px var(--accent-color), 0 0 40px rgba(37, 99, 235, 0.2);
          background: var(--accent-hover);
        }

        @media (max-width: 900px) {
          .resume-container { flex-direction: column; text-align: center; }
          .resume-content { text-align: center; }
          .stats-grid { grid-template-columns: 1fr; }
          .resume-btns { justify-content: center; }
          .section-title { font-size: 2.2rem; }
        }
      `}</style>

      <section id="resume" className="section resume-section">
        <div className="resume-bg-blur"></div>

        <div className="container">
          <div className="section-header">
            <h2 className="section-title">My Resume</h2>
            <p className="section-subtitle-main">Detailed overview of my professional background and skills.</p>
          </div>
          
          <div className="resume-container">
            <div className="orbit-wrapper">
              <div className="center-doc">
                <FaFilePdf />
              </div>
              <div className="orbit orbit-1">
                <div className="planet p-java"><FaJava /></div>
                <div className="planet p-python"><SiPython /></div>
              </div>
              <div className="orbit orbit-2">
                <div className="planet p-react"><FaReact /></div>
                <div className="planet p-ai"><FaBrain /></div>
              </div>
            </div>

            <div className="resume-content">
              <div className="badge-pill">
                <FaCheckCircle /> Ready to Hire
              </div>
              
              <h1 className="name-gradient">Badduluri Nithin Kumar</h1>
              
              <p className="subtitle">
                Passionate <strong>Fullstack Java Developer</strong> & <strong>AI Enthusiast</strong>. 
                I build scalable, secure web applications and integrate intelligent systems.
              </p>

              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon"><FaLayerGroup /></div>
                  <div>
                    <div className="stat-value">Full Stack</div>
                    <div className="stat-label">Java & React</div>
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-icon"><FaBrain /></div>
                  <div>
                    <div className="stat-value">AI Integrated</div>
                    <div className="stat-label">ML & GenAI</div>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon"><FaNetworkWired /></div>
                  <div>
                    <div className="stat-value">IoT Ready</div>
                    <div className="stat-label">Smart Systems</div>
                  </div>
                </div>
              </div>

              <div className="resume-btns">
                <a href="/resume.pdf" target="_blank" className="btn btn-black">
                  <FaEye /> Preview CV
                </a>
                
                <a href="/resume.pdf" download="Nithin_Resume.pdf" className="btn btn-glow-blue">
                  <FaDownload /> Download
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;