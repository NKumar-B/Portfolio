import { FaUniversity, FaGraduationCap, FaSchool } from 'react-icons/fa';

const About = () => {
  const education = [
    {
      icon: <FaGraduationCap />,
      title: "Bachelor of Technology (B.Tech)",
      desc: "Artificial Intelligence and Data Science | Mother Theresa Institute of Engineering and Technology, Palamaner | Currently Pursuing "
    },
    {
      icon: <FaUniversity />,
      title: "Intermediate (Class XII)",
      desc: "MPC (Maths, Physics, Chemistry) | Sri Chaitanya Academy Junior College, Tirupati | May 2022"
    },
    {
      icon: <FaSchool />,
      title: "Secondary School (Class X)",
      desc: "SSC Board | ZPHigh School, Peddaupparapalle | April 2020"
    }
  ];

  return (
    <>
      <style>{`
        /* Section Background */
        .about-section {
          background: var(--bg-primary); 
          padding: 100px 0;
          position: relative;
          overflow: hidden;
          transition: background 0.3s ease;
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
          /* Multi-layered Aura Glow */
          text-shadow: 
            0 0 10px rgba(37, 99, 235, 0.2),
            0 0 20px rgba(37, 99, 235, 0.15),
            0 0 40px rgba(37, 99, 235, 0.1);
        }

        .about-section:hover .section-title {
          color: var(--accent-color);
          text-shadow: 
            0 0 15px var(--accent-color),
            0 0 30px var(--accent-color),
            0 0 60px rgba(37, 99, 235, 0.6);
          transform: translateY(-5px) scale(1.02);
        }

        .section-subtitle {
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin-top: 15px;
          transition: all 0.5s ease;
          opacity: 0.8;
          filter: drop-shadow(0 0 8px rgba(37, 99, 235, 0.1));
        }

        .about-section:hover .section-subtitle {
          color: var(--text-primary);
          opacity: 1;
          filter: drop-shadow(0 0 12px var(--accent-color));
        }

        /* Container Layout */
        .about-content {
          display: flex;
          align-items: flex-start;
          gap: 60px;
          margin-top: 40px;
          position: relative;
          z-index: 2;
        }

        /* --- LEFT SIDE: TEXT --- */
        .about-text {
          flex: 1;
          max-width: 600px;
        }

        .about-heading {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--text-primary); 
          line-height: 1.2;
          margin-bottom: 25px;
        }

        .highlight {
          color: var(--accent-color); 
          display: inline-block;
          position: relative;
        }

        .about-desc {
          font-size: 1.1rem;
          color: var(--text-secondary); 
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .about-desc strong {
          color: var(--text-primary); 
          font-weight: 600;
        }

        /* Status Badge */
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--bg-secondary); 
          color: #15803d;      
          padding: 10px 20px;
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-top: 20px;
          border: 1px solid var(--border-color); 
          transition: all 0.3s ease;
        }

        .about-section:hover .status-badge {
           box-shadow: 0 0 15px rgba(34, 197, 94, 0.2);
        }
        
        [data-theme="dark"] .status-badge {
           color: #4ade80; 
           border-color: #166534;
           background: rgba(22, 101, 52, 0.2);
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);
          animation: pulseGreen 2s infinite;
        }

        @keyframes pulseGreen {
          0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
          70% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
          100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }

        /* --- RIGHT SIDE: EDUCATION CARDS --- */
        .about-grid {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* --- NEW EDUCATION HEADER GLOW --- */
        .education-header-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 10px;
          transition: all 0.3s ease;
        }

        .about-section:hover .education-header-text {
          color: var(--accent-color);
          text-shadow: 0 0 10px rgba(37, 99, 235, 0.3);
        }

        .about-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 25px;
          background: var(--bg-card); 
          border: 1px solid var(--border-color); 
          border-radius: 16px;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 4px 6px var(--shadow-color); 
        }

        .about-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-color); 
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.15); 
        }

        .card-icon-wrapper {
          width: 60px;
          height: 60px;
          background: var(--bg-secondary); 
          color: var(--accent-color);      
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .about-card:hover .card-icon-wrapper {
          background: var(--accent-color);
          color: white;
          transform: rotate(-10deg);
          box-shadow: 0 0 15px var(--accent-color);
        }

        .card-content h4 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary); 
          margin-bottom: 5px;
          transition: all 0.3s ease;
        }

        .about-card:hover h4 {
          color: var(--accent-color);
          text-shadow: 0 0 8px rgba(37, 99, 235, 0.2);
        }

        .card-content p {
          font-size: 0.95rem;
          color: var(--text-secondary); 
          margin: 0;
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .about-content {
            flex-direction: column;
            gap: 40px;
          }
          .about-text {
            max-width: 100%;
            text-align: center;
          }
          .status-badge {
            justify-content: center;
            width: 100%;
          }
          .about-card {
            flex-direction: column;
            text-align: center;
            padding: 30px;
          }
          .education-header-text {
            text-align: center;
          }
        }
      `}</style>

      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">A glimpse into my academic background and professional goals.</p>
          </div>
          
          <div className="about-content">
            {/* LEFT SIDE: PERSONAL BIO */}
            <div className="about-text">
              <h3 className="about-heading">
                Developing with <span className="highlight">Purpose</span> & <span className="highlight">Passion</span>.
              </h3>
              
              <p className="about-desc">
                Thanks for showing interest in knowing me! I am an aspiring <strong>Full Stack Developer</strong> driven by the challenge of solving real-world problems through code.
              </p>
              
              <p className="about-desc">
                My journey involves more than just writing code; it's about creating <strong>secure, scalable, and intelligent systems</strong>. I have a strong foundation in <strong>Java and Python</strong>, and I constantly push my boundaries by exploring <strong>Artificial Intelligence</strong> and <strong>IoT development</strong>.
              </p>

              <p className="about-desc">
                I am passionate about writing clean, efficient code and collaborating on innovative projects. Currently, I am looking for opportunities to apply my skills in a professional environment.
              </p>

              <div className="status-badge">
                <span className="status-dot"></span>
                Open to Internships & Entry-level Opportunities
              </div>
            </div>

            {/* RIGHT SIDE: EDUCATIONAL HIGHLIGHTS */}
            <div className="about-grid">
              {/* Added Educational Details Heading */}
              <h3 className="education-header-text">Educational Details</h3>
              
              {education.map((item, index) => (
                <div className="about-card" key={index}>
                  <div className="card-icon-wrapper">
                    {item.icon}
                  </div>
                  <div className="card-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;