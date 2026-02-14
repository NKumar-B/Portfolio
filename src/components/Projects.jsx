import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Projects = () => {
  const scrollRef = useRef(null);

  const projectList = [
    {
      title: "College Website",
      desc: "A specialized React-based portal for faculty to manage student internal marks via Excel uploads and perform automated semester result analysis with dynamic data visualization.",
      tags: ["React.js", "Vite","Tailwind CSS","Lucide-React","Recharts","SweetAlert2","React Router DOM","MongoDB","Expreess.js","Node.js"],
      links: { demo: "#", code: "https://github.com/NKumar-B/Mtieat.Web" },
      image: "/Mtieat.png" 
    },
    {
      title: "AtherLens-FaceMesh",
      desc: "AetherLens-FaceMesh is a real-time 3D facial geometry tracking system built with MediaPipe and OpenCV.",
      tags: ["Python", "OpenCV", "MediaPipe"],
      links: { demo: "#", code: "https://github.com/NKumar-B/AetherLens-FaceMesh" },
      image: "/FaceMesh.png"
    },
    {
      title: "AirLens-Vision",
      desc: "AirLens-Vision is a high-performance, real-time object detection application powered by the MediaPipe Tasks API and OpenCV.",
      tags: ["Python", "OpenCV", "MediaPipe"],
      links: { demo: "#", code: "https://github.com/NKumar-B/ObjectSense-AI" },
      image: "/ObjectDetect.png"
    },
    {
      title: "AirTracer",
      desc: "An AI-powered computer vision tool that enables users to draw on-screen using hand gestures in real-time.",
      tags: ["Python", "OpenCV", "MediaPipe"],
      links: { demo: "#", code: "https://github.com/NKumar-B/VisionSketch_OpenCV" },
      image: "/AirTrace.png"
    },
    {
      title: "Smart Traffic Management System",
      desc: "Traditional fixed-timing traffic signals often lead to inefficient traffic flow and increased environmental impact due to vehicular idling. This project addresses these challenges by establishing a foundation for an Intelligent Transportation System (ITS).",
      tags: ["IoT", "Arduino IDE", "Wokwi Simulator","Traffic MAnagement"],
      links: { demo: "#", code: "https://github.com/NKumar-B/SmartTraffic_ManagementSystem" },
      image: "/TrafficManagement.jpeg"
    }
  ];

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.clientWidth > 768 ? 400 : 300;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <style>{`
        .projects-section {
          background: var(--bg-secondary);
          padding: 80px 0;
          position: relative;
          transition: background 0.3s ease;
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

        .projects-section:hover .section-title {
          text-shadow: 0 0 15px var(--accent-color);
        }

        .projects-section:hover .section-subtitle {
          color: var(--text-primary);
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        }

        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
        }

        .carousel-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .projects-slider {
          display: flex;
          gap: 30px;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding: 20px 5px;
          scrollbar-width: none; 
          -ms-overflow-style: none;
        }

        .projects-slider::-webkit-scrollbar {
          display: none;
        }

        .project-card {
          min-width: 350px;
          background: var(--bg-card);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          box-shadow: 0 4px 6px var(--shadow-color);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 40px rgba(37, 99, 235, 0.25);
          border-color: var(--accent-color);
        }

        .project-img-wrapper {
          position: relative;
          overflow: hidden;
          height: 220px;
          background: #000;
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover; 
          display: block;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-img {
          transform: scale(1.1);
        }

        /* --- UPDATED OVERLAY INTENSITY --- */
        .project-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(37, 99, 235, 0.4); /* Reduced from 0.85 to 0.4 */
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          opacity: 0;
          transition: opacity 0.3s ease;
          backdrop-filter: blur(2px); /* Frosted glass effect */
        }

        .project-card:hover .project-overlay { opacity: 1; }

        .overlay-btn {
          width: 45px; height: 45px;
          background: white;
          border-radius: 50%;
          display: flex; justify-content: center; align-items: center;
          color: var(--accent-color);
          transition: all 0.3s ease;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
        }

        .overlay-btn:hover { 
          transform: scale(1.2) rotate(10deg); 
          box-shadow: 0 0 25px white;
        }

        .project-content {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          transition: color 0.3s ease;
        }

        .project-card:hover .project-title {
          color: var(--accent-color);
          text-shadow: 0 0 8px rgba(37, 99, 235, 0.2);
        }

        .project-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          flex-grow: 1;
        }

        .tech-tag {
          font-size: 0.7rem;
          background: var(--bg-secondary);
          color: var(--text-secondary);
          padding: 4px 10px;
          border-radius: 20px;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          background: var(--accent-color);
          color: white;
          border-color: var(--accent-color);
          box-shadow: 0 0 12px var(--accent-color);
          transform: translateY(-2px);
        }

        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          color: var(--accent-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 4px 12px var(--shadow-color);
          transition: all 0.3s ease;
        }

        .nav-btn:hover {
          background: var(--accent-color);
          color: white;
          box-shadow: 0 0 20px var(--accent-color);
        }

        .prev { left: -25px; }
        .next { right: -25px; }

        @media (max-width: 768px) {
          .project-card { min-width: 280px; }
          .nav-btn { display: none; }
        }
      `}</style>

      <section id="projects" className="section projects-section">
        <div className="projects-container">
          <div className="section-header text-center" style={{ marginBottom: '50px' }}>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">A showcase of my recent work in Web Dev, AI, and IoT.</p>
          </div>

          <div className="carousel-wrapper">
            <button className="nav-btn prev" onClick={() => scroll('left')}>
              <FaChevronLeft />
            </button>

            <div className="projects-slider" ref={scrollRef}>
              {projectList.map((project, index) => (
                <div className="project-card" key={index}>
                  <div className="project-img-wrapper">
                    <img src={project.image} alt={project.title} className="project-img" />
                    <div className="project-overlay">
                      <a href={project.links.demo} className="overlay-btn" title="View Demo">
                        <FaExternalLinkAlt />
                      </a>
                      <a href={project.links.code} className="overlay-btn" title="View Code" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                    </div>
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.desc}</p>
                    <div className="project-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {project.tags.map((tag, i) => (
                        <span key={i} className="tech-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="nav-btn next" onClick={() => scroll('right')}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;