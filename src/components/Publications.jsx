import { useRef } from 'react';
import { FaBookOpen, FaQuoteRight, FaFilePdf, FaBarcode, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Swal from 'sweetalert2'; 

const Publications = () => {
  const scrollRef = useRef(null);

  const papers = [
    {
      type: "Research Paper",
      title: "Predictive Analysis with Artificial Intelligence and Machine Learning for Digital Marketing: Boosting Customer Engagement and Return on Investment",
      journal: "5th National Conference on Recent Advances in Technology & Engineering (CRATE-2025)",
      date: "February 2025",
      desc: "The paper proposes an AI architecture combining ensemble learning and Explainable AI for real-time digital marketing optimization. It boosts return on ad spend by 27% while enhancing professional trust through transparent, interpretable insights.",
      link: "/Nithin_Mtieat_II_Vemu.PDF",
      ISBN: "978-93-48512-15-4"
    },
    {
      type: "Review Paper",
      title: "Sustainable Agriculture with Precision Agriculture Technologies",
      journal: "A National Level Article Presentation - PEN TO PODIUM",
      date: "September 2026",
      desc: "The article analyzes how precision agriculture uses data-driven technologies to maximize crop yields and farm profits while minimizing environmental footprints.",
      link: "/Mits_article.pdf",
      ISBN: "Pending" 
    }
    // Add more papers here to see the carousel in action
  ];

  // --- CAROUSEL SCROLL LOGIC ---
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.clientWidth / 2 + 17; // Half container + half gap
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // --- HELPER: SMOOTH SWEETALERT POPUP ---
  const showSuccessPopup = (message) => {
    Swal.fire({
      title: 'Copied!',
      text: message,
      icon: 'success',
      background: 'var(--bg-card)',
      color: 'var(--text-primary)',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      customClass: {
        popup: 'swal2-smooth-radius'
      }
    });
  };

  const handleCopyISBN = (isbn) => {
    if (isbn === "Pending") return;
    navigator.clipboard.writeText(isbn);
    showSuccessPopup(`ISBN: ${isbn} copied to clipboard!`);
  };

  const handleCite = (paper) => {
    const citation = `${paper.title}. ${paper.journal}, ${paper.date}. ISBN: ${paper.ISBN}`;
    navigator.clipboard.writeText(citation);
    showSuccessPopup("Citation details copied to clipboard!");
  };

  return (
    <>
      <style>{`
        .swal2-smooth-radius {
          border-radius: 28px !important;
          border: 1px solid var(--border-color);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2) !important;
        }

        .publications-section {
          background: var(--bg-primary);
          padding: 100px 0;
          transition: background 0.3s ease;
          border-top: 1px solid var(--border-color);
          overflow: hidden;
        }

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
          text-shadow: 0 0 10px rgba(37, 99, 235, 0.2), 0 0 20px rgba(37, 99, 235, 0.15);
        }

        .publications-section:hover .section-title {
          color: var(--accent-color);
          text-shadow: 0 0 15px var(--accent-color), 0 0 30px var(--accent-color), 0 0 60px rgba(37, 99, 235, 0.6);
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

        .publications-section:hover .section-subtitle {
          color: var(--text-primary);
          opacity: 1;
          filter: drop-shadow(0 0 12px var(--accent-color));
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        }

        /* --- CAROUSEL WRAPPER --- */
        .pub-carousel-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 50px;
        }

        .pub-grid {
          display: flex;
          overflow-x: auto;
          gap: 35px;
          padding: 20px 5px;
          scroll-behavior: smooth;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE */
        }

        .pub-grid::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }

        .pub-card {
          min-width: calc(50% - 17.5px); /* Displays exactly 2 cards */
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 24px;
          padding: 35px;
          position: relative;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
          text-align: left;
          height: auto;
        }

        .pub-card:hover {
          transform: translateY(-12px);
          border-color: var(--accent-color);
          box-shadow: 0 20px 40px var(--shadow-color), 0 0 25px rgba(37, 99, 235, 0.2);
        }

        /* --- NAVIGATION BUTTONS --- */
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

        .prev { left: -10px; }
        .next { right: -10px; }

        .pub-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .pub-tag {
          background: rgba(37, 99, 235, 0.1);
          color: var(--accent-color);
          padding: 6px 16px;
          border-radius: 30px;
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          transition: all 0.4s ease;
        }

        .pub-isbn {
          font-size: 0.75rem;
          font-family: 'Courier New', monospace;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--bg-secondary);
          padding: 6px 12px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          cursor: pointer;
        }

        .pub-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 18px;
          line-height: 1.4;
        }

        .pub-meta {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 18px;
          font-style: italic;
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .pub-desc {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.8;
          margin-bottom: 30px;
          flex-grow: 1;
        }

        .pub-actions {
          display: flex;
          gap: 25px;
          border-top: 1px solid var(--border-color);
          padding-top: 25px;
        }

        .pub-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          transition: all 0.3s ease;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .pub-btn:hover {
          color: var(--accent-color);
          transform: translateX(8px);
        }

        @media (max-width: 900px) {
          .pub-card { min-width: calc(100% - 10px); }
          .pub-carousel-container { padding: 0 20px; }
          .nav-btn { display: none; }
          .section-title { font-size: 2.2rem; }
          .pub-header-row { flex-direction: column; align-items: flex-start; gap: 10px; }
        }
      `}</style>

      <section id="publications" className="section publications-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Publications</h2>
            <p className="section-subtitle">Scholarly contributions to AI, IoT, and Software Engineering.</p>
          </div>

          <div className="pub-carousel-container">
            <button className="nav-btn prev" onClick={() => scroll('left')}>
              <FaChevronLeft />
            </button>

            <div className="pub-grid" ref={scrollRef}>
              {papers.map((paper, index) => (
                <div className="pub-card" key={index}>
                  <div>
                    <div className="pub-header-row">
                      <div className="pub-tag">{paper.type}</div>
                      {paper.ISBN && (
                        <div className="pub-isbn" onClick={() => handleCopyISBN(paper.ISBN)}>
                          <FaBarcode style={{ color: 'var(--accent-color)' }} /> 
                          <span>ISBN: {paper.ISBN}</span>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="pub-title">{paper.title}</h3>
                    
                    <div className="pub-meta">
                      <FaBookOpen style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '4px', fontSize: '1.1rem' }} />
                      <span>{paper.journal} • <strong>{paper.date}</strong></span>
                    </div>
                    
                    <p className="pub-desc">{paper.desc}</p>
                  </div>

                  <div className="pub-actions">
                    <a href={paper.link} className="pub-btn" target="_blank" rel="noopener noreferrer">
                      <FaFilePdf size={20} /> View Paper
                    </a>
                    <button className="pub-btn" onClick={() => handleCite(paper)}>
                      <FaQuoteRight size={18} /> Cite
                    </button>
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

export default Publications;