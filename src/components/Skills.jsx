import { useRef } from 'react';
import { 
  FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaBrain, FaDatabase, FaRobot, FaChevronLeft, FaChevronRight, FaLaptopCode
} from 'react-icons/fa';
import { SiSpringboot, SiTensorflow, SiPytorch, SiMysql, SiMongodb, SiPostman, SiOpencv } from 'react-icons/si';

const Skills = () => {
  const scrollRef = useRef(null);

  const allSkills = [
    { name: "Java", icon: <FaJava color="#f89820" /> },
    { name: "Python", icon: <FaPython color="#3776ab" /> },
    { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
    { name: "HTML5", icon: <FaHtml5 color="#e34f26" /> },
    { name: "CSS3", icon: <FaCss3Alt color="#1572b6" /> },
    { name: "SQL", icon: <FaDatabase color="#00758f" /> },
    { name: "Machine Learning", icon: <FaRobot color="#2563eb" /> },
    { name: "Deep Learning", icon: <FaBrain color="#a855f7" /> },
    { name: "TensorFlow", icon: <SiTensorflow color="#ff6f00" /> },
    { name: "NLP", icon: <FaBrain color="#10b981" /> },
    { name: "OpenCV", icon: <SiOpencv color="#5c3ee8" /> },
    { name: "Gen-AI", icon: <FaRobot color="#ec4899" /> },
    { name: "Prompt Eng.", icon: <FaBrain color="#64748b" /> },
    { name: "Spring Boot", icon: <SiSpringboot color="#6db33f" /> },
    { name: "React.js", icon: <FaReact color="#61dafb" /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    { name: "MySQL", icon: <SiMysql color="#4479a1" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
    { name: "Postman", icon: <SiPostman color="#ff6c37" /> },
    { name: "Docker", icon: <FaDocker color="#2496ed" /> },
    { name: "Git & GitHub", icon: <FaGitAlt color="#f05032" /> },
    { name: "VS Code", icon: <FaLaptopCode color="#007acc" /> }
  ];

  return (
    <>
      <style>{`
        .skills-section {
          background: var(--bg-secondary); 
          padding: 100px 0;
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
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

        .skills-section:hover .section-title {
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

        .skills-section:hover .section-subtitle {
          color: var(--text-primary);
          opacity: 1;
          filter: drop-shadow(0 0 12px var(--accent-color));
        }

        /* --- Main Card Layout --- */
        .skills-main-card {
          background: var(--bg-card);
          border-radius: 30px;
          padding: 50px;
          border: 1px solid var(--border-color);
          box-shadow: 0 10px 40px var(--shadow-color);
          position: relative;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          z-index: 1;
        }

        .skills-main-card:hover {
          border-color: var(--accent-color);
          box-shadow: 0 0 40px rgba(37, 99, 235, 0.15), 
                      0 0 100px rgba(37, 99, 235, 0.05);
          transform: translateY(-5px);
        }

        .skills-flex-wrap {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        /* Skill Pill Neon Glow */
        .skill-pill {
          display: flex;
          align-items: center;
          gap: 12px;
          background: var(--bg-secondary);
          padding: 14px 22px;
          border-radius: 15px;
          border: 1px solid var(--border-color);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          position: relative;
        }

        .skill-pill:hover {
          background: var(--bg-card);
          border-color: var(--accent-color);
          transform: translateY(-8px) scale(1.08);
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3),
                      0 0 15px rgba(37, 99, 235, 0.2);
        }

        .skill-icon {
          font-size: 1.5rem;
          transition: all 0.4s ease;
          display: flex;
          align-items: center;
        }

        .skill-pill:hover .skill-icon {
          transform: scale(1.2) rotate(8deg);
          filter: drop-shadow(0 0 10px currentColor);
        }

        .skill-name {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .skill-pill:hover .skill-name {
          color: var(--text-primary);
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        @media (max-width: 768px) {
          .skills-main-card {
            padding: 30px 15px;
          }
          .skill-pill {
            padding: 12px 15px;
            width: calc(50% - 10px);
            justify-content: flex-start;
          }
          .section-title {
            font-size: 2.2rem;
          }
        }
      `}</style>

      <section id="skills" className="skills-section">
        <div className="skills-container">
          
          <div className="section-header">
            <h2 className="section-title">Technical Expertise</h2>
            <p className="section-subtitle">
              A comprehensive view of my technical stack and specialized tools.
            </p>
          </div>

          <div className="skills-main-card">
            <div className="skills-flex-wrap">
              {allSkills.map((skill, index) => (
                <div className="skill-pill" key={index}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Skills;