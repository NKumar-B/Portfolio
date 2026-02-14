// import { useRef } from 'react';
// import { 
//   FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaBrain, FaDatabase, FaRobot, FaChevronLeft, FaChevronRight 
// } from 'react-icons/fa';
// import { SiSpringboot, SiTensorflow, SiPytorch, SiMysql, SiMongodb, SiPostman, SiOpencv } from 'react-icons/si';

// const Skills = () => {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     const { current } = scrollRef;
//     if (current) {
//       // Scroll by one card width (approx half container)
//       const scrollAmount = current.clientWidth / 2;
//       current.scrollBy({
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth'
//       });
//     }
//   };

//   const skillCategories = [
//     {
//       title: "Core & Languages",
//       skills: [
//         { name: "Java", icon: <FaJava color="#f89820" /> },
//         { name: "Python", icon: <FaPython color="#3776ab" /> },
//         { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
//         { name: "HTML5", icon: <FaHtml5 color="#e34f26" /> },
//         { name: "CSS3", icon: <FaCss3Alt color="#1572b6" /> },
//         { name: "SQL", icon: <FaDatabase color="#00758f" /> }
//       ]
//     },
//     {
//       title: "AI & Data Science",
//       skills: [
//         { name: "Machine Learning", icon: <FaRobot color="#2563eb" /> },
//         { name: "Deep Learning", icon: <FaBrain color="#a855f7" /> },
//         { name: "TensorFlow", icon: <SiTensorflow color="#ff6f00" /> },
//         { name: "NLP", icon: <FaBrain color="#10b981" /> },
//         { name: "OpenCV", icon: <SiOpencv color="#5c3ee8" /> },
//         { name: "Gen-AI", icon: <FaRobot color="#ec4899" /> },
//         { name: "Prompt Eng.", icon: <FaBrain color="#64748b" /> }
//       ]
//     },
//     {
//       title: "Frameworks & Dev",
//       skills: [
//         { name: "Spring Boot", icon: <SiSpringboot color="#6db33f" /> },
//         { name: "React.js", icon: <FaReact color="#61dafb" /> },
//         { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
//         { name: "Hibernate", icon: <FaDatabase color="#59666c" /> },
//         { name: "Flask", icon: <FaPython color="#000000" /> }
//       ]
//     },
//     {
//       title: "Tools & Platforms",
//       skills: [
//         { name: "Git & GitHub", icon: <FaGitAlt color="#f05032" /> },
//         { name: "Docker", icon: <FaDocker color="#2496ed" /> },
//         { name: "MySQL", icon: <SiMysql color="#4479a1" /> },
//         { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
//         { name: "Postman", icon: <SiPostman color="#ff6c37" /> },
//         { name: "VS Code", icon: <FaLaptopCode color="#007acc" /> }
//       ]
//     }
//   ];

//   // Helper icon for VS Code fallback
//   function FaLaptopCode({color}) { return <FaBrain style={{color: color}}/> } 

//   return (
//     <>
//       {/* --- EMBEDDED CSS (Fixed Layout) --- */}
//       <style>{`
//         /* Section Background */
//         .skills-section {
//           background: var(--bg-secondary); 
//           padding: 100px 0;
//           position: relative;
//           width: 100%;
//           transition: background 0.3s ease;
//         }

//         /* 1. Main Container */
//         .skills-container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 20px;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           width: 100%;
//         }

//         /* 2. Header */
//         .section-header {
//           width: 100%;
//           text-align: center;
//           margin-bottom: 50px;
//         }
        
//         .section-title {
//            font-size: 2rem;
//            font-weight: 800;
//            color: var(--text-primary);
//            margin-bottom: 10px;
//         }

//         .section-subtitle {
//            color: var(--text-secondary);
//         }

//         /* 3. CAROUSEL WRAPPER */
//         .skills-slider-wrapper {
//           position: relative;
//           width: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         /* 4. SCROLLABLE FLEX CONTAINER */
//         .skills-grid {
//           display: flex;
//           overflow-x: auto;
//           gap: 30px; /* Gap between cards */
//           width: 100%;
//           padding: 20px 5px; 
//           scroll-behavior: smooth;
//           scrollbar-width: none; /* Hide scrollbar Firefox */
//           -ms-overflow-style: none; /* Hide scrollbar IE */
//         }
//         .skills-grid::-webkit-scrollbar { 
//           display: none; /* Hide scrollbar Chrome/Safari */
//         }

//         /* 5. NAVIGATION BUTTONS */
//         .scroll-btn {
//           position: absolute;
//           top: 50%;
//           transform: translateY(-50%);
//           width: 50px; height: 50px;
//           border-radius: 50%;
//           background: var(--bg-card);
//           border: 1px solid var(--border-color);
//           color: var(--accent-color);
//           font-size: 1.2rem;
//           display: flex; justify-content: center; align-items: center;
//           cursor: pointer;
//           z-index: 10;
//           box-shadow: 0 4px 15px var(--shadow-color);
//           transition: all 0.3s ease;
//         }
//         .scroll-btn:hover {
//           background: var(--accent-color);
//           color: white;
//           transform: translateY(-50%) scale(1.1);
//           box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
//         }
//         .scroll-btn.left { left: -25px; }
//         .scroll-btn.right { right: -25px; }

//         /* --- SKILL CATEGORY CARD (FIXED WIDTH) --- */
//         .skill-category-card {
//           /* CALCULATION: 
//              50% of container width 
//              MINUS 25px (Half of 30px gap + 10px buffer for padding)
//              Result: Exactly 2 cards visible with a gap.
//           */
//           min-width: calc(50% - 25px);
//           width: calc(50% - 25px);
//           flex: 0 0 auto; /* Prevent shrinking or growing */
          
//           /* FIXED HEIGHT */
//           min-height: 420px; 
          
//           background: var(--bg-card);
//           border-radius: 20px;
//           padding: 40px 30px;
//           box-shadow: 0 4px 20px var(--shadow-color);
//           border: 1px solid var(--border-color);
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: flex-start;
//           box-sizing: border-box; /* Critical for padding */
//         }

//         .skill-category-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 15px 30px rgba(37, 99, 235, 0.08);
//           border-color: var(--accent-color);
//         }

//         .category-title {
//           font-size: 1.4rem;
//           font-weight: 700;
//           color: var(--text-primary);
//           margin-bottom: 35px;
//           text-align: center;
//           position: relative;
//         }
        
//         .category-title::after {
//           content: '';
//           display: block;
//           width: 50px;
//           height: 3px;
//           background: var(--accent-color);
//           margin: 12px auto 0;
//           border-radius: 2px;
//         }

//         /* --- SKILLS PILL GRID --- */
//         .skills-list {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//           gap: 15px;
//           width: 100%;
//         }

//         .skill-pill {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           background: var(--bg-secondary);
//           padding: 12px 18px;
//           border-radius: 12px;
//           border: 1px solid var(--border-color);
//           transition: all 0.3s ease;
//           cursor: default;
//         }

//         .skill-name {
//           font-size: 0.95rem;
//           font-weight: 600;
//           color: var(--text-secondary);
//         }

//         .skill-icon {
//           font-size: 1.3rem;
//           display: flex;
//           align-items: center;
//         }

//         .skill-pill:hover {
//           background: var(--bg-card);
//           border-color: var(--accent-color);
//           transform: translateY(-2px);
//           box-shadow: 0 4px 10px rgba(37, 99, 235, 0.1);
//         }

//         .skill-pill:hover .skill-name {
//           color: var(--text-primary);
//         }

//         /* --- MOBILE RESPONSIVENESS --- */
//         @media (max-width: 900px) {
//           .scroll-btn { display: none; }
//           .skills-slider-wrapper { padding: 0; }
          
//           /* On mobile, show 1 card (90% width) */
//           .skill-category-card {
//             min-width: 90%;
//             width: 90%;
//             min-height: auto;
//             padding: 30px;
//           }
//         }
//       `}</style>

//       {/* --- JSX STRUCTURE --- */}
//       <section id="skills" className="section skills-section">
//         <div className="skills-container">
          
//           <div className="section-header">
//             <h2 className="section-title">Technical Proficiency</h2>
//             <p className="section-subtitle">
//               A breakdown of the tools and technologies I work with.
//             </p>
//           </div>

//           <div className="skills-slider-wrapper">
            
//             <button className="scroll-btn left" onClick={() => scroll('left')}>
//               <FaChevronLeft />
//             </button>

//             <div className="skills-grid" ref={scrollRef}>
//               {skillCategories.map((category, index) => (
//                 <div className="skill-category-card" key={index}>
//                   <h3 className="category-title">{category.title}</h3>
                  
//                   <div className="skills-list">
//                     {category.skills.map((skill, i) => (
//                       <div className="skill-pill" key={i}>
//                         <span className="skill-icon">{skill.icon}</span>
//                         <span className="skill-name">{skill.name}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <button className="scroll-btn right" onClick={() => scroll('right')}>
//               <FaChevronRight />
//             </button>

//           </div>

//         </div>
//       </section>
//     </>
//   );
// };

// export default Skills;





import { useRef } from 'react';
import { 
  FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaBrain, FaDatabase, FaRobot, FaChevronLeft, FaChevronRight, FaLaptopCode
} from 'react-icons/fa';
import { SiSpringboot, SiTensorflow, SiPytorch, SiMysql, SiMongodb, SiPostman, SiOpencv } from 'react-icons/si';

const Skills = () => {
  const scrollRef = useRef(null);

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
        }

        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .section-title {
           font-size: 2.5rem;
           font-weight: 800;
           color: var(--text-primary);
           margin-bottom: 15px;
           transition: all 0.3s ease;
        }

        /* Title Glow on Section Hover */
        .skills-section:hover .section-title {
          text-shadow: 0 0 15px var(--accent-color);
        }

        .section-subtitle {
           transition: all 0.3s ease;
        }

        .skills-section:hover .section-subtitle {
          color: var(--text-primary);
        }

        /* Main Card Glow */
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
          /* Radiant Aura Glow */
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
          /* High-intensity glow */
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3),
                      0 0 15px rgba(37, 99, 235, 0.2);
        }

        .skill-icon {
          font-size: 1.5rem;
          transition: all 0.4s ease;
          display: flex;
          align-items: center;
        }

        /* Icon Neon Effect */
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

        /* Text Glow Effect */
        .skill-pill:hover .skill-name {
          color: var(--text-primary);
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        /* Mobile Adjustments */
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
            font-size: 2rem;
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