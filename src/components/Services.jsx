import { 
  Database, 
  Terminal, 
  Palette, 
  Layers, 
  Cloud, 
  Cpu,
  Search,
  Layout
} from 'lucide-react';
import { FaCode, FaRobot } from 'react-icons/fa';

const Services = () => {
  const servicesList = [
    {
      title: "Web Development",
      desc: "Building scalable, responsive, and high-performance web applications using modern frameworks.",
      tags: ["React", "Node.js", "MongoDB","Django"],
      icon: <FaCode />,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "AI & ML Solutions",
      desc: "Developing intelligent models and computer vision systems to solve complex real-world problems.",
      tags: ["Python", "TensorFlow", "OpenCV"],
      icon: <FaRobot />,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Data Science",
      desc: "Transforming raw data into actionable insights through statistical modeling and predictive analysis.",
      tags: ["Pandas", "Scikit-Learn", "EDA"],
      icon: <Database />,
      image: "/datascience.jpg"
    },
    {
      title: "Prompt Engineering",
      desc: "Optimizing LLM performance through advanced prompting techniques and reasoning logic.",
      tags: ["LLMs", "Gen-AI", "Few-Shot"],
      icon: <Terminal />,
      image: "/promptengineering.jpg"
    },
    {
      title: "UI & UX Design",
      desc: "Crafting intuitive, user-centric interfaces that blend aesthetic appeal with seamless functionality.",
      tags: ["Figma", "Wireframing", "Responsive"],
      icon: <Palette />,
      image: "/uiux.jpg"
    },
    {
      title: "Big Data",
      desc: "Processing and managing massive datasets using distributed systems for high-velocity analytics.",
      tags: ["Hadoop", "Spark", "Kafka"],
      icon: <Layers />,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Cloud Computing",
      desc: "Architecting scalable cloud infrastructure and managing seamless deployment pipelines.",
      tags: ["AWS", "Docker", "Kubernetes"],
      icon: <Cloud />,
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <>
      <style>{`
        .services-section {
          background: var(--bg-secondary);
          padding: 100px 0;
          transition: background 0.3s ease;
          position: relative;
          overflow: hidden;
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

        .services-section:hover .section-title {
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

        .services-section:hover .section-subtitle {
          color: var(--text-primary);
          opacity: 1;
          filter: drop-shadow(0 0 12px var(--accent-color));
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          margin-top: 60px;
        }

        .service-card {
          background: var(--bg-card);
          border-radius: 24px;
          border: 1px solid var(--border-color);
          box-shadow: 0 10px 30px var(--shadow-color);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
        }

        .service-card:hover {
          transform: translateY(-12px);
          border-color: var(--accent-color);
          box-shadow: 0 20px 40px rgba(37, 99, 235, 0.25);
        }

        .service-img-wrapper {
          height: 180px;
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .service-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
          filter: grayscale(20%);
        }

        .service-card:hover .service-img {
          transform: scale(1.1);
          filter: grayscale(0%);
        }

        .service-content {
          padding: 30px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .service-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
        }

        .service-icon {
          width: 40px;
          height: 40px;
          background: var(--bg-secondary);
          color: var(--accent-color);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          transition: all 0.4s ease;
          flex-shrink: 0;
          border: 1px solid var(--border-color);
        }

        .service-card:hover .service-icon {
          background: var(--accent-color);
          color: white;
          transform: scale(1.1) rotate(-5deg);
          box-shadow: 0 0 15px var(--accent-color);
          border-color: var(--accent-color);
        }

        .service-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0;
          transition: all 0.3s ease;
        }

        .service-card:hover .service-title {
          color: var(--accent-color);
          text-shadow: 0 0 8px rgba(37, 99, 235, 0.2);
        }

        .service-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 25px;
        }

        .service-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
        }

        .service-tag {
          font-size: 0.7rem;
          font-weight: 700;
          background: var(--bg-secondary);
          color: var(--accent-color);
          padding: 5px 14px;
          border-radius: 30px;
          border: 1px solid var(--border-color);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }

        .service-tag:hover {
          background: var(--accent-color);
          color: white;
          border-color: var(--accent-color);
          box-shadow: 0 0 10px var(--accent-color);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .section-title { font-size: 2.2rem; }
        }
      `}</style>

      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">My Services</h2>
            <p className="section-subtitle">Delivering high-impact solutions across multiple technology domains.</p>
          </div>

          <div className="services-grid">
            {servicesList.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-img-wrapper">
                  <img src={service.image} alt={service.title} className="service-img" />
                </div>
                
                <div className="service-content">
                  <div className="service-header">
                    <div className="service-icon">{service.icon}</div>
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                  
                  <p className="service-desc">{service.desc}</p>
                  
                  <div className="service-tags">
                    {service.tags.map((tag, i) => (
                      <span className="service-tag" key={i}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;