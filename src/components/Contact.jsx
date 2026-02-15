import { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaTwitter, FaPaperPlane, FaUser, FaCheckCircle } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6"; 

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); 

  // --- HELPER: EMAIL VALIDATION ---
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Validate Email Format
    if (!isValidEmail(formData.email)) {
      setStatus('invalid_email');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        e.target.reset(); 
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
      console.error("Fetch error:", err);
    }
  };

  const handleChange = (e) => {
    // Clear error status when user starts typing again
    if (status === 'invalid_email' || status === 'error') setStatus('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

        .contact-section {
          background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
          padding: 60px 0;
          position: relative;
          overflow: hidden;
          transition: background 0.3s ease;
        }

        .contact-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.5;
          z-index: 0;
          animation: floatBlob 8s infinite alternate;
        }
        .blob-1 { top: -50px; left: -50px; width: 400px; height: 400px; background: radial-gradient(circle, var(--blob-color-1) 0%, rgba(255,255,255,0) 70%); }
        .blob-2 { bottom: -50px; right: -50px; width: 300px; height: 300px; background: radial-gradient(circle, var(--blob-color-2) 0%, rgba(255,255,255,0) 70%); animation-delay: 2s; }

        .contact-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        .section-header { text-align: center; margin-bottom: 40px; }
        .section-title { font-size: 2.2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 8px; }
        .section-subtitle { font-size: 0.95rem; color: var(--text-secondary); }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 40px;
          align-items: start;
        }

        .contact-info-wrapper {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .profile-card {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 10px;
        }
        
        .avatar-wrapper {
          position: relative;
          width: 76px; height: 76px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: transform 0.4s ease;
        }

        .avatar-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          padding: 3px;
          background: conic-gradient(from 0deg, transparent 0%, var(--accent-color) 50%, #a855f7 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: spin 2s linear infinite;
        }
        @keyframes spin { 100% { transform: rotate(360deg); } }

        .avatar-box {
          width: 64px; height: 64px;
          border-radius: 50%;
          border: 3px solid var(--bg-card);
          background: var(--bg-card);
          overflow: hidden;
          position: relative;
          z-index: 2;
          box-shadow: 0 4px 15px var(--shadow-color);
        }
        .avatar-img { width: 100%; height: 100%; object-fit: cover; }

        .avatar-wrapper:hover { transform: scale(1.1) rotate(5deg); }
        .avatar-wrapper:hover .avatar-box { box-shadow: 0 0 30px rgba(37, 99, 235, 0.6); border-color: var(--accent-color); }

        .status-box { display: flex; flex-direction: column; gap: 4px; }
        .greeting { font-size: 1.1rem; font-weight: 700; color: var(--text-primary); }
        .status-badge {
          display: flex; align-items: center; gap: 6px;
          font-size: 0.75rem; color: #059669; font-weight: 600;
          background: rgba(16, 185, 129, 0.1); padding: 4px 10px; border-radius: 20px;
          width: fit-content; border: 1px solid rgba(16, 185, 129, 0.2);
        }
        .status-dot { width: 8px; height: 8px; background: #10b981; border-radius: 50%; animation: pulse 2s infinite; }

        .info-card {
          background: var(--bg-card);
          backdrop-filter: blur(10px);
          padding: 18px;
          border-radius: 16px;
          display: flex; align-items: center; gap: 15px;
          box-shadow: 0 4px 10px var(--shadow-color);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }
        .info-card:hover {
          transform: translateY(-5px); 
          box-shadow: 0 0 40px rgba(37, 99, 235, 0.25);
          border-color: var(--accent-color);
        }

        .icon-box {
          width: 45px; height: 45px;
          background: var(--bg-secondary);
          color: var(--accent-color);
          border-radius: 12px;
          display: flex; justify-content: center; align-items: center;
          font-size: 1.1rem; flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .info-card:hover .icon-box { transform: rotate(-10deg) scale(1.1); background: var(--accent-color); color: white; }
        .info-text h4 { font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 2px; }
        .info-text p { font-size: 0.85rem; color: var(--text-secondary); margin: 0; }

        .social-section { margin-top: 15px; }
        .social-label { font-size: 0.9rem; font-weight: 700; color: var(--text-secondary); margin-bottom: 12px; display: block; }
        .social-links { display: flex; gap: 15px; }
        
        .social-btn {
          width: 48px; height: 48px;
          display: flex; justify-content: center; align-items: center;
          background: var(--bg-card);
          border-radius: 50%;
          color: var(--text-secondary);
          font-size: 1.2rem;
          text-decoration: none;
          border: 1px solid var(--border-color);
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          position: relative;
          box-shadow: 0 4px 10px var(--shadow-color);
        }

        .social-btn.linkedin:hover { background: #0077b5; color: white; border-color: #0077b5; transform: translateY(-5px) scale(1.1); box-shadow: 0 0 30px rgba(0, 119, 181, 0.6); }
        .social-btn.github:hover { background: #333; color: white; border-color: #333; transform: translateY(-5px) scale(1.1); box-shadow: 0 0 30px rgba(51, 51, 51, 0.6); }
        .social-btn.twitter:hover { background: #000; color: white; border-color: #000; transform: translateY(-5px) scale(1.1); box-shadow: 0 0 30px rgba(0, 0, 0, 0.6); }

        .social-btn::before {
          content: attr(data-tooltip);
          position: absolute; top: -35px; left: 50%; transform: translateX(-50%) scale(0);
          background: var(--text-primary); color: var(--bg-primary); font-size: 0.75rem; padding: 4px 10px;
          border-radius: 6px; opacity: 0; transition: all 0.3s ease; pointer-events: none;
          white-space: nowrap; font-weight: 600;
        }
        .social-btn:hover::before { opacity: 1; transform: translateX(-50%) scale(1); top: -45px; }

        .signature-container { margin-top: 25px; }
        .signature-label { font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; display: block; }

        .signature-box {
          background: var(--bg-card);
          padding: 15px 30px;
          border-radius: 12px;
          display: inline-block;
          position: relative;
          transition: all 0.3s ease;
          min-width: 220px;
          text-align: center;
          z-index: 1;
          border: 1px dashed var(--border-color);
        }

        .signature-box::before {
          content: ''; position: absolute; inset: 0; border-radius: 12px; padding: 2px;
          background: linear-gradient(45deg, var(--border-color), var(--text-secondary));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          transition: all 0.4s ease; z-index: -1;
        }

        .signature-box:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.15);
        }
        
        .signature-box:hover::before {
          background: linear-gradient(45deg, var(--accent-color), #a855f7, var(--accent-color)); background-size: 200% auto;
          animation: gradientMove 3s linear infinite;
        }
        @keyframes gradientMove { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }

        .signature-text {
          font-family: 'Dancing Script', cursive; font-size: 1.8rem;
          background: linear-gradient(45deg, var(--text-primary), var(--text-secondary)); -webkit-background-clip: text;
          -webkit-text-fill-color: transparent; opacity: 0.9; transform: rotate(-2deg);
          display: inline-block; cursor: default; position: relative; z-index: 3;
        }

        .signature-seal {
          position: absolute; bottom: 8px; right: 8px; color: var(--border-color); font-size: 1.1rem;
          transition: all 0.3s ease; z-index: 3;
        }
        .signature-box:hover .signature-seal { color: var(--accent-color); transform: scale(1.1); }

        .contact-form-card {
          background: var(--bg-card); padding: 35px; border-radius: 24px;
          box-shadow: 0 10px 30px var(--shadow-color); border: 1px solid var(--border-color);
          transition: all 0.4s ease;
          min-height: 480px;
          display: flex;
          flex-direction: column;
        }
        .contact-form-card:hover {
          transform: translateY(-8px); 
          box-shadow: 0 0 50px rgba(37, 99, 235, 0.1);
          border-color: var(--accent-color);
        }

        .form-input:disabled, .form-textarea:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          background: var(--bg-secondary);
        }

        .form-header h3 { font-size: 1.5rem; font-weight: 800; color: var(--text-primary); margin-bottom: 5px; }
        .form-header p { color: var(--text-secondary); font-size: 0.9rem; }

        .form-group { margin-bottom: 20px; position: relative; }
        .form-label { font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 6px; display: block; }
        
        .form-input, .form-textarea {
          width: 100%; padding: 14px 18px 14px 45px; border-radius: 12px;
          border: 2px solid var(--border-color); background: var(--bg-secondary); font-size: 0.95rem; color: var(--text-primary);
          outline: none; transition: all 0.3s ease; font-family: inherit;
        }
        .form-textarea { resize: vertical; min-height: 120px; padding-left: 18px; }
        
        .form-input:hover:not(:disabled), .form-textarea:hover:not(:disabled) { background: var(--bg-card); border-color: var(--text-secondary); }
        .form-input:focus:not(:disabled), .form-textarea:focus:not(:disabled) { background: var(--bg-card); border-color: var(--accent-color); box-shadow: 0 0 20px rgba(37, 99, 235, 0.25); }
        
        /* ERROR BORDER IF INVALID EMAIL */
        .form-input.invalid { border-color: #ef4444; }

        .input-wrapper { position: relative; width: 100%; }
        
        .input-icon {
          position: absolute; left: 16px; top: 50%; transform: translateY(-50%);
          color: var(--text-secondary); font-size: 1rem; transition: color 0.3s;
          pointer-events: none;
        }
        .form-input:focus ~ .input-icon { color: var(--accent-color); }

        .submit-btn {
          width: 100%; padding: 16px; background: linear-gradient(135deg, var(--accent-color) 0%, var(--accent-hover) 100%);
          color: white; border: none; border-radius: 12px; font-size: 1rem; font-weight: 700;
          cursor: pointer; display: flex; justify-content: center; align-items: center; gap: 10px;
          transition: all 0.3s ease; box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
        }
        .submit-btn:hover:not(:disabled) { transform: translateY(-3px); box-shadow: 0 0 35px rgba(37, 99, 235, 0.5); }
        .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

        .success-overlay {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          flex: 1;
          animation: fadeIn 0.5s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .success-icon-big {
          font-size: 4.5rem;
          color: #10b981;
          margin-bottom: 20px;
          filter: drop-shadow(0 0 15px rgba(16, 185, 129, 0.3));
        }

        .validation-error { color: #ef4444; font-size: 0.75rem; margin-top: 5px; font-weight: 600; display: block; }

        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; }
          .signature-container { text-align: center; }
          .profile-card { justify-content: center; }
        }
      `}</style>

      <section id="contact" className="section contact-section">
        <div className="contact-blob blob-1"></div>
        <div className="contact-blob blob-2"></div>

        <div className="contact-container">
          <div className="section-header">
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-subtitle">Have a project in mind? I'm just a message away.</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info-wrapper">
              
              <div className="profile-card">
                <div className="avatar-wrapper">
                  <div className="avatar-box">
                    <img src="./profile.jpg" alt="Nithin" className="avatar-img" />
                  </div>
                </div>
                
                <div className="status-box">
                  <span className="greeting">Hi, I'm Nithin! 👋</span>
                  <div className="status-badge">
                    <div className="status-dot"></div> Open to Work
                  </div>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-box"><FaEnvelope /></div>
                <div className="info-text">
                  <h4>Email Me</h4>
                  <p>nithinkumarbadduluri@gmail.com</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-box"><FaPhoneAlt /></div>
                <div className="info-text">
                  <h4>Call Me</h4>
                  <p>+91 62811 44047</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-box"><FaMapMarkerAlt /></div>
                <div className="info-text">
                  <h4>Location</h4>
                  <p>Palamaner, Chittor, AP, India - 517408</p>
                </div>
              </div>

              <div className="social-section">
                <span className="social-label">Follow my journey</span>
                <div className="social-links">
                  <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="social-btn linkedin" data-tooltip="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="social-btn github" data-tooltip="GitHub">
                    <FaGithub />
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="social-btn twitter" data-tooltip="X (Twitter)">
                    <FaXTwitter />
                  </a>
                </div>
              </div>

              <div className="signature-container">
                <span className="signature-label">Digital Signature</span>
                <div className="signature-box">
                  <span className="signature-text">Badduluri Nithin Kumar</span>
                  <FaCheckCircle className="signature-seal" />
                </div>
              </div>

            </div>

            <div className="contact-form-card">
              {status === 'success' ? (
                <div className="success-overlay">
                  <FaCheckCircle className="success-icon-big" />
                  <h3 style={{color: 'var(--text-primary)', marginBottom: '10px'}}>Message Sent!</h3>
                  <p style={{color: 'var(--text-secondary)'}}>Thank you for reaching out. I'll get back to you shortly.</p>
                  <button onClick={() => setStatus('')} style={{ marginTop: '25px', background: 'transparent', border: '1px solid var(--accent-color)', color: 'var(--accent-color)', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="form-header">
                    <h3>Send a Message</h3>
                    <p>I usually respond within 24 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="form-label">Your Name</label>
                      <div className="input-wrapper">
                        <input type="text" name="name" className="form-input" placeholder="Nithin Kumar" value={formData.name} required onChange={handleChange} disabled={status === 'sending'} />
                        <FaUser className="input-icon" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Your Email</label>
                      <div className="input-wrapper">
                        <input 
                          type="email" 
                          name="email" 
                          className={`form-input ${status === 'invalid_email' ? 'invalid' : ''}`} 
                          placeholder="nithinkumar@example.com" 
                          value={formData.email} 
                          required 
                          onChange={handleChange} 
                          disabled={status === 'sending'} 
                        />
                        <FaEnvelope className="input-icon" />
                        {status === 'invalid_email' && <span className="validation-error">Please enter a valid email address.</span>}
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Message</label>
                      <textarea name="message" className="form-textarea" placeholder="Tell me about your project..." value={formData.message} required onChange={handleChange} disabled={status === 'sending'}></textarea>
                    </div>

                    <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                      {status === 'sending' ? 'Sending...' : 'Send Message'} <FaPaperPlane />
                    </button>
                  </form>
                </>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;