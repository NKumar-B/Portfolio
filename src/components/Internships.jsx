import { FaLaptopCode, FaBrain, FaExternalLinkAlt, FaCheckCircle, FaUniversity } from 'react-icons/fa';

const Internships = () => {
  const internshipData = [
    {
      title: "GOOGLE AI-ML VIRTUAL INTERNSHIP",
      issuer: "AICTE-EduSkills",
      date: "Sep 2025",
      skills: ["TensorFlow", "Deep Learning", "Computer Vision", "NLP"],
      pdfLink: "/NITHIN KUMAR BADDULURI 91680.pdf", 
      verifyLink: "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=143884f9cf0c4b79050170589bb82273",
      icon: <FaBrain />,
      certImage: "/google_ai_cert.png" 
    },
    {
      title: "WEB FULL STACK DEVELOPER VIRTUAL INTERNSHIP",
      issuer: "AICTE-EduSkills",
      date: "Jun 2025",
      skills: ["React.js", "Node.js", "MongoDB", "Full Stack"],
      pdfLink: "/NITHIN KUMAR BADDULURI 642893.pdf", 
      verifyLink: "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=a67e5a989eb97513e016594b169fc478",
      icon: <FaLaptopCode />,
      certImage: "/web_fullstack_cert.png" 
    },
    {
      title: "AWS GEN-AI VIRTUAL INTERNSHIP",
      issuer: "AICTE-EduSkills",
      date: "24 Dec 2025",
      skills: ["Raspberry Pi", "MQTT"], 
      pdfLink: "/NITHIN KUMAR BADDULURI 748893.pdf", 
      verifyLink: "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=cda149d64d108cda5b1504f6f1715825",
      icon: <FaUniversity />,
      certImage: "/aws_genai_cert.png" 
    },
  ];

  return (
    <section id="internships" className="internships-section" style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <style>{`
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

        .internships-section:hover .section-title {
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

        .internships-section:hover .section-subtitle {
          color: var(--text-primary);
          opacity: 1;
          filter: drop-shadow(0 0 12px var(--accent-color));
        }

        /* --- PRESERVED CARD LOGIC --- */
        .experience-list {
          display: flex;
          flex-direction: column;
          gap: 25px;
          margin-top: 40px;
          max-height: 800px;
          overflow-y: auto;
          padding: 20px;
          scrollbar-width: none;
        }
        
        .experience-list::-webkit-scrollbar { display: none; }

        .internship-card {
          background: var(--bg-card);
          backdrop-filter: blur(12px);
          border-radius: 24px;
          border: 1px solid var(--border-color);
          padding: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 4px 15px var(--shadow-color);
          position: relative;
        }

        .internship-card:hover {
          transform: translateY(-8px);
          border-color: var(--accent-color);
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.25);
        }

        .intern-title {
          font-size: 1.4rem; 
          color: var(--text-primary); 
          margin-bottom: 8px;
          transition: all 0.3s ease;
        }
        .internship-card:hover .intern-title {
          text-shadow: 0 0 8px rgba(37, 99, 235, 0.4);
        }

        .icon-box {
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .internship-card:hover .icon-box {
          background: var(--accent-color) !important;
          color: #ffffff !important;
          transform: rotate(-10deg) scale(1.1);
          box-shadow: 0 0 20px var(--accent-color);
        }

        .service-tag {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .service-tag:hover {
          background: var(--accent-color) !important;
          color: #ffffff !important;
          border-color: var(--accent-color) !important;
          transform: translateY(-2px);
          box-shadow: 0 0 12px var(--accent-color);
        }

        .social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 15px;
          padding: 10px;
          border-radius: 12px;
          background: var(--bg-secondary);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          text-decoration: none !important;
        }

        .social-btn:hover {
          background: var(--accent-color);
          color: #ffffff !important;
          transform: scale(1.1);
          box-shadow: 0 0 15px var(--accent-color);
        }

        .cert-preview-container {
          position: relative;
          width: 220px;
          height: 150px;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          margin-left: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cert-preview-container:hover {
          transform: scale(1.05);
          border-color: var(--accent-color);
          box-shadow: 0 0 25px rgba(37, 99, 235, 0.4);
        }

        .cert-image {
          width: 100%;
          height: 100%;
          object-fit: contain; 
        }

        .cert-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          color: #ffffff;
          font-weight: 700;
          letter-spacing: 1px;
          z-index: 2;
        }

        .cert-preview-container:hover .cert-overlay { opacity: 1; }

        @media (max-width: 900px) {
          .experience-list { max-height: none; }
          .internship-card {
            flex-direction: column;
            align-items: flex-start;
          }
          .cert-preview-container {
            width: 100%;
            margin-left: 0;
            margin-top: 20px;
          }
          .section-title { font-size: 2.2rem; }
        }
      `}</style>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">Real-world applications and industry training programs.</p>
        </div>
        
        <div className="experience-list">
          {internshipData.map((item, index) => (
            <div className="internship-card" key={index}>
              <div className="internship-info">
                <div className="icon-box" style={{ 
                  fontSize: '2rem', 
                  minWidth: '60px', 
                  height: '60px', 
                  background: 'var(--bg-secondary)',
                  borderRadius: '15px',
                  color: 'var(--accent-color)',
                  marginBottom: '15px'
                }}>
                  {item.icon}
                </div>

                <div>
                  <h3 className="intern-title">{item.title}</h3>
                  <div className="issuer-info d-flex align-items-center gap-2" style={{ color: 'var(--accent-color)', fontWeight: '600' }}>
                    <FaCheckCircle size={14} />
                    {item.issuer} • {item.date}
                  </div>
                  
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {item.skills.map((skill, i) => (
                      <span key={i} className="service-tag" style={{ 
                        fontSize: '0.75rem',
                        background: 'var(--bg-secondary)',
                        color: 'var(--text-secondary)',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        border: '1px solid var(--border-color)'
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a href={item.verifyLink} target="_blank" rel="noopener noreferrer" 
                     className="social-btn" 
                     title="Verify Credential">
                    <FaExternalLinkAlt size={14} />
                  </a>
                </div>
              </div>

              <a href={item.pdfLink} target="_blank" rel="noopener noreferrer" className="image-anchor">
                <div className="cert-preview-container">
                  <img 
                    src={item.certImage} 
                    alt="Certificate Preview" 
                    className="cert-image" 
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/220x150?text=Certificate'; }}
                  />
                  <div className="cert-overlay">
                    <span>VIEW PDF</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;