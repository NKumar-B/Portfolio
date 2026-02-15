import { useRef } from 'react';
import { FaAward, FaCertificate, FaUniversity, FaFingerprint, FaExternalLinkAlt, FaCheckCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Achievements = () => {
  const scrollRef = useRef(null);

  // Dynamic Scroll Logic
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.clientWidth / 2;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const certifications = [
    {
      title: "AWS Academy Graduate-ML for NLP",
      issuer: "AWS (Credly)",
      date: "21 Dec 2025",
      credentialId: "#",
      link: "https://www.credly.com/go/pp97B3gX",
      skills: ["Raspberry Pi", "MQTT"],
      icon: <FaUniversity />
    },
    {
      title: "AWS Academy Graduate- GEN AI Foundations",
      issuer: "AWS (Credly)",
      date: "19 Dec 2025",
      credentialId: "#",
      link: "https://www.credly.com/badges/2f3e0642-af57-4c9a-b020-9a3f46651eec",
      skills: ["Raspberry Pi", "MQTT"],
      icon: <FaUniversity />
    },
    {
      title: "Introduction to Industry 4.0 and Industrial Internet of Things",
      issuer: "NPTEL",
      date: "Nov 2025",
      credentialId: "NPTEL25CS146S962100519",
      link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs146/Course/NPTEL25CS146S96210051910690182.pdf",
      skills: ["Raspberry Pi", "MQTT"],
      icon: <FaUniversity />
    },
    {
      title: "Introduction to HTML",
      issuer: "Coursera",
      date: "30 May 2025",
      credentialId: "NPTEL25CS146S962100519",
      link: "https://coursera.org/share/120965a91f0ca294767613337752be15",
      skills: ["Raspberry Pi", "MQTT"],
      icon: <FaUniversity />
    },
    {
      title: "SQL and Relational Databases 101",
      issuer: "Cognitive Class (IBM Developer Skills Network)",
      date: "23 Dec 2024",
      credentialId: "6a43bf0d6fe342ef835fb69112162a98",
      link: "https://courses.cognitiveclass.ai/certificates/6a43bf0d6fe342ef835fb69112162a98",
      skills: ["Raspberry Pi", "MQTT"],
      icon: <FaUniversity />
    },
    {
      title: "Python 101 for Data Science",
      issuer: "Cognitive Class( IBM Developer Skills Network)",
      date: "19 Dec 2024",
      credentialId: "9a77656c36df40a2bdea748f5ecb42c0",
      link: " https://courses.cognitiveclass.ai/certificates/9a77656c36df40a2bdea748f5ecb42c0",
      skills: ["Raspberry Pi", "MQTT"],
      icon: <FaUniversity />
    },
    {
      title: "Python for Data Science",
      issuer: " IBM (Credly) ",
      date: "19 Dec 2024",
      credentialId: "6a43bf0d6fe342ef835fb69112162a98",
      link: "https://www.credly.com/badges/82faf937-0bb8-4af6-8778-177b593bcf07/print",
      skills: ["Raspberry Pi", "MQTT"],
      icon: <FaUniversity />
    },
    {
      title: "Developer and Technology Job Simulation",
      issuer: "Forage (Accenture)",
      date: "15 Jul 2024",
      credentialId: "8c2DzMkg3g4Js5AWh",
      link: " https://www.theforage.com/completion-certificates/Accenture%20UK/3xnZEj9kfpoQKW885_Accenture%20UK_8c2DzMkg3g4Js5AWh_1721038394314_completion_certificate.pdf",
      skills: ["Raspberry Pi", "MQTT"],
      icon: <FaUniversity />
    },
  ];

  return (
    <>
      <style>{`
        /* Section Background */
        .achievements-section {
          background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
          padding: 80px 0;
          position: relative;
          overflow: hidden;
          transition: background 0.3s ease;
        }

        /* Container */
        .achievements-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
        }

        /* Carousel Wrapper */
        .achievements-slider-wrapper {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* SCROLLABLE FLEX CONTAINER */
        .achievements-grid {
          display: flex;
          overflow-x: auto;
          gap: 20px;
          width: 100%;
          padding: 20px 5px;
          scroll-behavior: smooth;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .achievements-grid::-webkit-scrollbar { 
          display: none; 
        }

        /* --- SECTION HEADING & SUBHEADING GLOW --- */
        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 15px;
          transition: all 0.3s ease;
        }

        .section-subtitle {
          transition: all 0.3s ease;
          color: var(--text-secondary);
        }

        /* Both heading and sub-heading glow when section is hovered */
        .achievements-section:hover .section-title {
          text-shadow: 0 0 15px var(--accent-color);
        }

        .achievements-section:hover .section-subtitle {
          color: var(--text-primary);
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        }

        /* --- NAVIGATION BUTTONS --- */
        .scroll-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px; height: 50px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          color: var(--accent-color);
          font-size: 1.2rem;
          display: flex; justify-content: center; align-items: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 4px 15px var(--shadow-color);
          transition: all 0.3s ease;
        }
        .scroll-btn:hover {
          background: var(--accent-color);
          color: white;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 0 20px var(--accent-color);
        }
        .scroll-btn.left { left: -25px; }
        .scroll-btn.right { right: -25px; }

        /* --- CARD STYLING --- */
        .cert-card {
          min-width: calc(50% - 20px);
          flex: 0 0 auto;
          position: relative;
          background: var(--bg-card);
          border-radius: 16px;
          padding: 25px;
          border: 1px solid var(--border-color);
          box-shadow: 0 4px 20px var(--shadow-color);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column; 
          gap: 15px;
          overflow: hidden;
          z-index: 1;
          box-sizing: border-box;
        }

        /* Hover: Gradient Border & Glow Overlay */
        .cert-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: 16px;
          padding: 2px;
          background: linear-gradient(45deg, var(--accent-color), #06b6d4, var(--accent-color));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: 0;
        }
        
        .cert-card:hover::before {
          opacity: 1;
        }

        /* Hover: Lift & Glow Effect */
        .cert-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.25);
          border-color: var(--accent-color);
        }

        /* Header: Icon & Verified Badge */
        .cert-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          position: relative;
          z-index: 2;
        }

        .cert-icon-box {
          width: 45px; height: 45px;
          background: var(--bg-secondary);
          color: var(--accent-color);
          border-radius: 12px;
          display: flex; justify-content: center; align-items: center;
          font-size: 1.2rem;
          transition: all 0.4s ease;
        }
        .cert-card:hover .cert-icon-box {
          background: var(--accent-color);
          color: white;
          transform: rotateY(180deg);
          box-shadow: 0 0 15px var(--accent-color);
        }

        .verified-badge {
          font-size: 0.65rem;
          font-weight: 700;
          color: #059669; 
          background: #ecfdf5;
          padding: 4px 10px;
          border-radius: 20px;
          display: flex; align-items: center; gap: 4px;
          border: 1px solid #d1fae5;
          transition: all 0.3s ease;
        }
        .cert-card:hover .verified-badge {
          box-shadow: 0 0 10px rgba(5, 150, 105, 0.4);
        }

        /* Content Styling */
        .cert-content {
          position: relative;
          z-index: 2;
          flex: 1;
        }
        .cert-content h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
          line-height: 1.4;
          transition: all 0.3s ease;
        }
        .cert-card:hover .cert-content h3 {
          text-shadow: 0 0 8px rgba(37, 99, 235, 0.3);
        }

        .cert-issuer {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 12px;
          font-weight: 500;
        }

        /* Skills Tags */
        .cert-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 15px;
        }
        .skill-tag {
          font-size: 0.7rem;
          background: var(--bg-secondary);
          color: var(--text-secondary);
          padding: 3px 8px;
          border-radius: 6px;
          font-weight: 600;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }
        .skill-tag:hover {
           background: var(--accent-color) !important;
           color: white !important;
           border-color: var(--accent-color);
           box-shadow: 0 0 12px var(--accent-color);
           transform: translateY(-2px) scale(1.05);
        }

        /* Footer: ID & Link */
        .cert-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px dashed var(--border-color);
          padding-top: 15px;
          margin-top: auto;
          position: relative;
          z-index: 2;
        }

        .credential-code {
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.75rem;
          color: var(--text-secondary);
          display: flex; align-items: center; gap: 6px;
          font-weight: 700;
          letter-spacing: 0.5px;
          padding: 4px 8px;
          border-radius: 6px;
          transition: all 0.3s ease;
          cursor: text;
        }
        .credential-code:hover {
          color: var(--accent-color);
          text-shadow: 0 0 5px var(--accent-color);
        }

        .btn-verify-icon {
          width: 32px; height: 32px;
          border-radius: 50%;
          background: var(--bg-secondary);
          color: var(--text-secondary);
          display: flex; justify-content: center; align-items: center;
          transition: all 0.3s ease;
          border: 1px solid var(--border-color);
          font-size: 0.8rem;
          text-decoration: none;
        }
        .btn-verify-icon:hover {
          background: var(--accent-color);
          color: white;
          border-color: var(--accent-color);
          transform: rotate(45deg) scale(1.1);
          box-shadow: 0 0 15px var(--accent-color);
        }

        @media (max-width: 900px) {
          .scroll-btn { display: none; }
          .achievements-grid { padding-bottom: 20px; }
          .cert-card {
            min-width: 85%;
            margin-right: 15px;
          }
        }
      `}</style>

      {/* --- JSX STRUCTURE --- */}
      <section id="achievements" className="section achievements-section">
        <div className="achievements-container">
          <div className="section-header text-center">
            <h2 className="section-title">Achievements</h2>
            <p className="section-subtitle">
              Verified credentials validating my technical expertise.
            </p>
          </div>

          <div className="achievements-slider-wrapper">
            {/* Left Button */}
            <button className="scroll-btn left" onClick={() => scroll('left')}>
              <FaChevronLeft />
            </button>

            {/* Scrollable Container */}
            <div className="achievements-grid" ref={scrollRef}>
              {certifications.map((cert, index) => (
                <div className="cert-card" key={index}>
                  
                  {/* Header: Icon + Badge */}
                  <div className="cert-header">
                    <div className="cert-icon-box">
                      {cert.icon}
                    </div>
                    <div className="verified-badge">
                      <FaCheckCircle /> Verified
                    </div>
                  </div>

                  {/* Content */}
                  <div className="cert-content">
                    <h3>{cert.title}</h3>
                    <p className="cert-issuer">{cert.issuer} • {cert.date}</p>
                    
                    <div className="cert-skills">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="cert-footer">
                    <div className="credential-code" title="Copy ID">
                      <FaFingerprint /> {cert.credentialId}
                    </div>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn-verify-icon" title="View Certificate">
                      <FaExternalLinkAlt />
                    </a>
                  </div>

                </div>
              ))}
            </div>

            {/* Right Button */}
            <button className="scroll-btn right" onClick={() => scroll('right')}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;