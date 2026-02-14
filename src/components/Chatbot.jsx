// import { useState, useEffect, useRef } from "react";
// import { FaCommentDots, FaPaperPlane, FaTimes, FaRobot } from "react-icons/fa";
// import * as webllm from "@mlc-ai/web-llm";

// const Chatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       text: "Hi! I'm **Nithin's AI Assistant**. Ask me about my projects, skills, or anything else!",
//       isBot: true,
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [loadProgress, setLoadProgress] = useState(0);
//   const [isReady, setIsReady] = useState(false);
//   const [isTyping, setIsTyping] = useState(false);
  
//   const engineRef = useRef(null);
//   const messagesEndRef = useRef(null);

//   // --- HYBRID ROUTER: INSTANT RESPONSES ---
//   const findFastResponse = (question) => {
//     const q = question.toLowerCase();
//     if (q.includes("skill") || q.includes("tech")) {
//       return "Nithin is a **Fullstack Java Developer**. Core Skills: Java, Python, React, Spring Boot, and AI/ML (TensorFlow, OpenCV).";
//     }
//     if (q.includes("project") || q.includes("work")) {
//       return "Key projects include: **College Website** (React/Node), **AetherLens** (FaceMesh), **AirLens** (Object Detection), and **SWAN LAB** (Chatbot App).";
//     }
//     if (q.includes("resume") || q.includes("cv")) {
//       return "You can download Nithin's **Resume** directly from the Resume section in the navigation bar!";
//     }
//     if (q.includes("contact") || q.includes("mail")) {
//       return "You can reach Nithin at **nithinkumarbadduluri@gmail.com** or through the Contact form.";
//     }
//     return null; // Fallback to SLM
//   };

//   const SYSTEM_PROMPT = `Assistant for Nithin (Fullstack Java/AI Dev). 
//   Skills: Java, Python, React, OpenCV. 
//   Projects: College Site (React), AetherLens (FaceMesh), AirLens (Object Detection), AirTracer (Gestures), SWAN LAB (Chatbot). 
//   Answer briefly and professionally.`;

//   useEffect(() => {
//     const initEngine = async () => {
//       try {
//         // Switch to the faster Llama 3.2 1B variant
//         const selectedModel = "TinyLlama-1.1B-Chat-v1.0-q4f32_1-MLC";   //TinyLlama-1.1B-Chat-v1.0-q4f32_1-MLC
//         const engine = await webllm.CreateMLCEngine(selectedModel, {
//           initProgressCallback: (report) => {
//             setLoadProgress(Math.round(report.progress * 100));
//           },
//         });
//         engineRef.current = engine;
//         setIsReady(true);
//       } catch (err) {
//         console.error("WebLLM Error:", err);
//       }
//     };
//     initEngine();
//   }, []);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, isTyping]);

//   const handleSendMessage = async () => {
//     if (!input.trim()) return;
    
//     const userQuery = input;
//     setInput("");
//     setMessages((prev) => [...prev, { text: userQuery, isBot: false }]);

//     // 1. Check Hybrid Router for Instant Response
//     const fastReply = findFastResponse(userQuery);
//     if (fastReply) {
//       setMessages((prev) => [...prev, { text: fastReply, isBot: true }]);
//       return;
//     }

//     // 2. Fallback to SLM with Streaming
//     if (!isReady) return;
//     setIsTyping(true);

//     try {
//       const chatMessages = [
//         { role: "system", content: SYSTEM_PROMPT },
//         { role: "user", content: userQuery }
//       ];

//       // Initialize an empty bot message for streaming
//       setMessages((prev) => [...prev, { text: "", isBot: true }]);
      
//       const asyncChunkGenerator = await engineRef.current.chat.completions.create({ 
//         messages: chatMessages,
//         stream: true, // Enable Streaming
//         temperature: 0.9,
        
//       });

//       let fullText = "";
//       for await (const chunk of asyncChunkGenerator) {
//         const delta = chunk.choices[0]?.delta?.content || "";
//         fullText += delta;
        
//         // Update the last message in the array with the new text
//         setMessages((prev) => {
//           const updated = [...prev];
//           updated[updated.length - 1].text = fullText;
//           return updated;
//         });
//       }
//     } catch (error) {
//       setMessages((prev) => [...prev, { text: "I encountered an error. Please try again.", isBot: true }]);
//     } finally {
//       setIsTyping(false);
//     }
//   };

//   const renderMessage = (text) => {
//     if (!text) return null;
//     const parts = text.split(/(\*\*.*?\*\*)/g);
//     return parts.map((part, index) => 
//       part.startsWith("**") && part.endsWith("**") 
//         ? <strong key={index} style={{ color: 'var(--accent-color)' }}>{part.slice(2, -2)}</strong> 
//         : part
//     );
//   };

//   return (
//     <>
//       <style>{`
//         .chat-toggle {
//           position: fixed;
//           bottom: 30px;
//           right: 30px;
//           width: 60px;
//           height: 60px;
//           background: var(--accent-color);
//           color: white;
//           border-radius: 50%;
//           display: flex; align-items: center; justify-content: center;
//           cursor: pointer;
//           box-shadow: 0 0 20px var(--accent-color);
//           z-index: 1000;
//           transition: transform 0.3s;
//         }
//         .chat-toggle:hover { transform: scale(1.1); }

//         .chat-window {
//           position: fixed;
//           bottom: 100px;
//           right: 30px;
//           width: 350px;
//           height: 500px;
//           background: var(--bg-card);
//           border: 1px solid var(--border-color);
//           border-radius: 20px;
//           display: flex; flex-direction: column;
//           box-shadow: 0 10px 40px rgba(0,0,0,0.3);
//           z-index: 1000;
//           overflow: hidden;
//         }

//         .chat-header {
//           background: var(--accent-color);
//           padding: 15px;
//           color: white;
//           display: flex; justify-content: space-between; align-items: center;
//         }

//         .chat-messages {
//           flex: 1;
//           padding: 15px;
//           overflow-y: auto;
//           display: flex; flex-direction: column; gap: 10px;
//           background: var(--bg-primary);
//         }

//         .message {
//           max-width: 85%;
//           padding: 10px 14px;
//           border-radius: 15px;
//           font-size: 0.9rem;
//           line-height: 1.4;
//         }

//         .message.bot { background: var(--bg-secondary); color: var(--text-primary); align-self: flex-start; }
//         .message.user { background: var(--accent-color); color: white; align-self: flex-end; box-shadow: 0 4px 10px rgba(37, 99, 235, 0.2); }

//         .progress-bar { height: 4px; background: #10b981; transition: width 0.3s; }

//         .chat-input-area { padding: 15px; display: flex; gap: 10px; background: var(--bg-card); border-top: 1px solid var(--border-color); }
//         .chat-input-area input { flex: 1; background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 8px 15px; border-radius: 20px; color: var(--text-primary); outline: none; }
//       `}</style>

//       <div className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={28} />}
//       </div>

//       {isOpen && (
//         <div className="chat-window">
//           <div className="chat-header">
//             <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//               <FaRobot /> <span>AI Assistant</span>
//             </div>
//             {!isReady && <span style={{ fontSize: '0.7rem' }}>{loadProgress}% Loaded</span>}
//           </div>
          
//           {!isReady && <div className="progress-bar" style={{ width: `${loadProgress}%` }}></div>}

//           <div className="chat-messages">
//             {messages.map((msg, i) => (
//               <div key={i} className={`message ${msg.isBot ? "bot" : "user"}`}>
//                 {renderMessage(msg.text)}
//               </div>
//             ))}
//             <div ref={messagesEndRef} />
//           </div>

//           <div className="chat-input-area">
//             <input 
//               type="text" 
//               placeholder={isReady ? "Ask me anything..." : "Waking up AI..."} 
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
//             />
//             <button onClick={handleSendMessage} disabled={!isReady} style={{ background: 'none', border: 'none', color: 'var(--accent-color)', cursor: 'pointer' }}>
//               <FaPaperPlane />
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Chatbot;



// import { useState, useEffect, useRef } from "react";
// import { FaCommentDots, FaPaperPlane, FaTimes, FaRobot } from "react-icons/fa";
// import * as webllm from "@mlc-ai/web-llm";

// const Chatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showTooltip, setShowTooltip] = useState(false);
//   const [hasClicked, setHasClicked] = useState(false); // Track if user has interacted
//   const [messages, setMessages] = useState([
//     {
//       text: "Hi! I'm **Nithin's AI Assistant**. Ask me about my projects, skills, or anything else!",
//       isBot: true,
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [loadProgress, setLoadProgress] = useState(0);
//   const [isReady, setIsReady] = useState(false);
//   const [isTyping, setIsTyping] = useState(false);
  
//   const engineRef = useRef(null);
//   const messagesEndRef = useRef(null);

//   // --- WELCOME TOOLTIP LOGIC ---
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (!hasClicked && !isOpen) setShowTooltip(true);
//     }, 4000); // Appears after 4 seconds
//     return () => clearTimeout(timer);
//   }, [hasClicked, isOpen]);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//     setHasClicked(true); // Stop showing tooltip after first click
//     setShowTooltip(false);
//   };

//   // --- HYBRID ROUTER: INSTANT RESPONSES ---
//   const findFastResponse = (question) => {
//     const q = question.toLowerCase();
//     if (q.includes("skill") || q.includes("tech")) {
//       return "Nithin is a **Fullstack Java Developer**. Core Skills: Java, Python, React, Spring Boot, and AI/ML (TensorFlow, OpenCV).";
//     }
//     if (q.includes("project") || q.includes("work")) {
//       return "Key projects include: **College Website** (React/Node), **AetherLens** (FaceMesh), **AirLens** (Object Detection), and **SWAN LAB** (Chatbot App).";
//     }
//     if (q.includes("resume") || q.includes("cv")) {
//       return "You can download Nithin's **Resume** directly from the Resume section in the navigation bar!";
//     }
//     if (q.includes("contact") || q.includes("mail")) {
//       return "You can reach Nithin at **nithinkumarbadduluri@gmail.com** or through the Contact form.";
//     }
//     return null; 
//   };

//   const SYSTEM_PROMPT = `Assistant for Nithin (Fullstack Java/AI Dev). 
//   Skills: Java, Python, React, OpenCV. 
//   Projects: College Site (React), AetherLens (FaceMesh), AirLens (Object Detection), AirTracer (Gestures), SWAN LAB (Chatbot). 
//   Answer briefly and professionally.`;

//   useEffect(() => {
//     const initEngine = async () => {
//       try {
//         const selectedModel = "Llama-3.2-1B-Instruct-q4f16_1-MLC";
//         const engine = await webllm.CreateMLCEngine(selectedModel, {
//           initProgressCallback: (report) => {
//             setLoadProgress(Math.round(report.progress * 100));
//           },
//         });
//         engineRef.current = engine;
//         setIsReady(true);
//       } catch (err) {
//         console.error("WebLLM Error:", err);
//       }
//     };
//     initEngine();
//   }, []);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, isTyping]);

//   const handleSendMessage = async () => {
//     if (!input.trim()) return;
    
//     const userQuery = input;
//     setInput("");
//     setMessages((prev) => [...prev, { text: userQuery, isBot: false }]);

//     const fastReply = findFastResponse(userQuery);
//     if (fastReply) {
//       setMessages((prev) => [...prev, { text: fastReply, isBot: true }]);
//       return;
//     }

//     if (!isReady) return;
//     setIsTyping(true);

//     try {
//       const chatMessages = [
//         { role: "system", content: SYSTEM_PROMPT },
//         { role: "user", content: userQuery }
//       ];

//       setMessages((prev) => [...prev, { text: "", isBot: true }]);
      
//       const asyncChunkGenerator = await engineRef.current.chat.completions.create({ 
//         messages: chatMessages,
//         stream: true, 
//         temperature: 0.7,
//       });

//       let fullText = "";
//       for await (const chunk of asyncChunkGenerator) {
//         const delta = chunk.choices[0]?.delta?.content || "";
//         fullText += delta;
        
//         setMessages((prev) => {
//           const updated = [...prev];
//           updated[updated.length - 1].text = fullText;
//           return updated;
//         });
//       }
//     } catch (error) {
//       setMessages((prev) => [...prev, { text: "I encountered an error. Please try again.", isBot: true }]);
//     } finally {
//       setIsTyping(false);
//     }
//   };

//   const renderMessage = (text) => {
//     if (!text) return null;
//     const parts = text.split(/(\*\*.*?\*\*)/g);
//     return parts.map((part, index) => 
//       part.startsWith("**") && part.endsWith("**") 
//         ? <strong key={index} style={{ color: 'var(--accent-color)' }}>{part.slice(2, -2)}</strong> 
//         : part
//     );
//   };

//   return (
//     <>
//       <style>{`
//         /* Floating Animation for the entire container */
//         .chat-floating-wrapper {
//           position: fixed;
//           bottom: 30px;
//           right: 30px;
//           display: flex;
//           align-items: center;
//           gap: 0px;
//           z-index: 1000;
//           cursor: pointer;
//           animation: globalFloat 3s ease-in-out infinite;
//         }

//         @keyframes globalFloat {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }

//         /* Welcome Tooltip */
//         .welcome-tip {
//           position: absolute;
//           top: -55px;
//           right: 0;
//           background: var(--accent-color);
//           color: white;
//           padding: 8px 15px;
//           border-radius: 12px;
//           font-size: 0.8rem;
//           font-weight: 600;
//           white-space: nowrap;
//           box-shadow: 0 5px 15px rgba(37, 99, 235, 0.4);
//           pointer-events: none;
//         }

//         .welcome-tip::after {
//           content: '';
//           position: absolute;
//           bottom: -6px;
//           right: 25px;
//           border-left: 6px solid transparent;
//           border-right: 6px solid transparent;
//           border-top: 6px solid var(--accent-color);
//         }

//         /* Label: NITHYA */
//         .chat-label-attached {
//           background: var(--bg-card);
//           color: var(--text-primary);
//           padding: 10px 20px;
//           border-radius: 25px 0 0 25px;
//           font-weight: 800;
//           font-size: 0.9rem;
//           letter-spacing: 1.5px;
//           border: 1px solid var(--border-color);
//           border-right: none;
//           box-shadow: -5px 5px 15px var(--shadow-color);
//           transition: all 0.3s ease;
//         }

//         .chat-floating-wrapper:hover .chat-label-attached {
//           color: var(--accent-color);
//         }

//         /* Toggle Icon */
//         .chat-toggle-main {
//           width: 65px;
//           height: 65px;
//           background: var(--accent-color);
//           color: white;
//           border-radius: 50%;
//           display: flex; align-items: center; justify-content: center;
//           position: relative;
//           box-shadow: 0 0 20px var(--accent-color);
//           z-index: 2;
//         }

//         /* Red Notification Dot */
//         .notification-dot {
//           position: absolute;
//           top: 5px; right: 5px;
//           width: 12px; height: 12px;
//           background: #ff3333;
//           border-radius: 50%;
//           border: 2px solid white;
//           animation: blink 1.5s infinite;
//         }

//         @keyframes blink {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.4; transform: scale(1.2); }
//         }

//         .chat-window {
//           position: fixed;
//           bottom: 110px;
//           right: 30px;
//           width: 350px;
//           height: 500px;
//           background: var(--bg-card);
//           border: 1px solid var(--border-color);
//           border-radius: 20px;
//           display: flex; flex-direction: column;
//           box-shadow: 0 10px 40px rgba(0,0,0,0.3);
//           z-index: 1000;
//           overflow: hidden;
//         }

//         .chat-header { background: var(--accent-color); padding: 15px; color: white; display: flex; justify-content: space-between; align-items: center; }
//         .chat-messages { flex: 1; padding: 15px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; background: var(--bg-primary); }
//         .message { max-width: 85%; padding: 10px 14px; border-radius: 15px; font-size: 0.9rem; line-height: 1.4; }
//         .message.bot { background: var(--bg-secondary); color: var(--text-primary); align-self: flex-start; }
//         .message.user { background: var(--accent-color); color: white; align-self: flex-end; }
//         .progress-bar { height: 4px; background: #10b981; transition: width 0.3s; }
//         .chat-input-area { padding: 15px; display: flex; gap: 10px; background: var(--bg-card); border-top: 1px solid var(--border-color); }
//         .chat-input-area input { flex: 1; background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 8px 15px; border-radius: 20px; color: var(--text-primary); outline: none; }
//       `}</style>

//       <div className="chat-floating-wrapper" onClick={handleToggle}>
//         {/* Welcome tip only shows until first click */}
//         {showTooltip && !isOpen && !hasClicked && (
//           <div className="welcome-tip">Ask me anything! 👋</div>
//         )}
        
//         {!isOpen && (
//           <>
//             <div className="chat-label-attached">NITHYA</div>
//             <div className="chat-toggle-main">
//               <FaCommentDots size={28} />
//               <div className="notification-dot"></div>
//             </div>
//           </>
//         )}

//         {isOpen && (
//           <div className="chat-toggle-main">
//             <FaTimes size={24} />
//           </div>
//         )}
//       </div>

//       {isOpen && (
//         <div className="chat-window">
//           <div className="chat-header">
//             <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//               <FaRobot /> <span>NITHYA Assistant</span>
//             </div>
//             {!isReady && <span style={{ fontSize: '0.7rem' }}>{loadProgress}% Loaded</span>}
//           </div>
          
//           {!isReady && <div className="progress-bar" style={{ width: `${loadProgress}%` }}></div>}

//           <div className="chat-messages">
//             {messages.map((msg, i) => (
//               <div key={i} className={`message ${msg.isBot ? "bot" : "user"}`}>
//                 {renderMessage(msg.text)}
//               </div>
//             ))}
//             <div ref={messagesEndRef} />
//           </div>

//           <div className="chat-input-area">
//             <input 
//               type="text" 
//               placeholder={isReady ? "Ask me anything..." : "Waking up AI..."} 
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
//             />
//             <button onClick={handleSendMessage} disabled={!isReady} style={{ background: 'none', border: 'none', color: 'var(--accent-color)', cursor: 'pointer' }}>
//               <FaPaperPlane />
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Chatbot;







import { useState, useEffect, useRef } from "react";
import { FaCommentDots, FaPaperPlane, FaTimes, FaRobot } from "react-icons/fa";
import * as webllm from "@mlc-ai/web-llm";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm **Nithin's AI Assistant**. Ask me about my projects, skills, or anything else!", isBot: true },
  ]);
  const [input, setInput] = useState("");
  const [loadProgress, setLoadProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false); // Track if loading has started
  
  const engineRef = useRef(null);
  const messagesEndRef = useRef(null);

  // --- NEW: DEVICE DETECTION ---
  const isMobile = () => /Mobi|Android|iPhone/i.test(navigator.userAgent);

  const initEngine = async () => {
    if (isReady || isInitializing) return;
    setIsInitializing(true);
    try {
      const selectedModel = "Llama-3.2-1B-Instruct-q4f16_1-MLC";
      const engine = await webllm.CreateMLCEngine(selectedModel, {
        initProgressCallback: (report) => setLoadProgress(Math.round(report.progress * 100)),
      });
      engineRef.current = engine;
      setIsReady(true);
    } catch (err) { 
      console.error("WebLLM Error:", err); 
      setIsInitializing(false);
    }
  };

  // --- TRIGGER LOADING BASED ON DEVICE ---
  useEffect(() => {
    if (!isMobile()) {
      // Laptop/PC: Load immediately
      initEngine();
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => { if (!hasClicked && !isOpen) setShowTooltip(true); }, 4000);
    return () => clearTimeout(timer);
  }, [hasClicked, isOpen]);

  const handleToggle = () => {
    if (!isOpen) {
      setHasClicked(true);
      setShowTooltip(false);
      // Mobile: Start loading only when first opened
      if (isMobile() && !isReady) {
        initEngine();
      }
    }
    setIsOpen(!isOpen);
  };

  const findFastResponse = (question) => {
    const q = question.toLowerCase();
    
    if (q.includes("hi") || q.includes("hello")) {
      return "Hello! I'm Nithya, **Nithin's AI assistant**. How can I help you today?";
    }

   if (q.includes("who is nithin") || q.includes("tell me about nithin") || q.includes("who are you")) {
      return "Nithin Kumar is a **Fullstack Java Developer** and **Tech Innovator**. He is an **AI & DS Enthusiast** with three major internships: **Google AI-ML** (Sep 2025), **Web Full Stack** (Jun 2025), and **AWS Gen-AI** (Dec 2025). His work spans from **Drone technology** to advanced **Computer Vision** projects.";
    }

    if (q.includes("skill") || q.includes("tech")) {
      return "Nithin is a **Fullstack Java Developer**. Core Skills: Java, Python, JavaScript, React, Node.js, Spring Boot, Machine Learning, and TensorFlow.";
    }

    if (q.includes("internship") || q.includes("experience")) {
      return "Nithin completed a **Google AI-ML Internship** (Sep 2025), a **Web Full Stack Internship** (Jun 2025), and an **AWS Gen-AI Internship** (Dec 2025). He also has experience in **Drone troubleshooting** and **LLM fine-tuning**.";
    }

    if (q.includes("project") || q.includes("work")) {
      return "Key projects include **AirTrace** (gesture drawing), **AetherLens** (FaceMesh), **AirLens** (Object Detection), and **SWAN LAB**.";
    }

    if (q.includes("resume") || q.includes("cv")) {
      return "You can download Nithin's **Resume** directly from the navigation bar above!";
    }

    return null; 
  };

  const SYSTEM_PROMPT = "You are NITHYA, Nithin's fast AI assistant. Answer in 1-2 short sentences only.";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!input.trim() || isTyping) return;
    const userQuery = input;
    setInput("");
    setMessages((prev) => [...prev, { text: userQuery, isBot: false }]);

    const fastReply = findFastResponse(userQuery);
    if (fastReply) {
      setMessages((prev) => [...prev, { text: fastReply, isBot: true }]);
      return;
    }

    if (!isReady) return;
    setIsTyping(true);

    try {
      setMessages((prev) => [...prev, { text: "Nithya is Thinking...", isBot: true, isThinking: true }]);
      
      const asyncChunkGenerator = await engineRef.current.chat.completions.create({ 
        messages: [{ role: "system", content: SYSTEM_PROMPT }, { role: "user", content: userQuery }],
        stream: true, 
        temperature: 0.3,
      });

      let fullText = "";
      let firstChunk = true;

      for await (const chunk of asyncChunkGenerator) {
        const delta = chunk.choices[0]?.delta?.content || "";
        if (firstChunk && delta.trim() !== "") {
          fullText = delta;
          firstChunk = false;
        } else {
          fullText += delta;
        }

        setMessages((prev) => {
          const updated = [...prev];
          const last = updated[updated.length - 1];
          last.text = fullText;
          last.isThinking = false;
          return updated;
        });
      }
    } catch (error) {
      setMessages((prev) => [...prev, { text: "I encountered an error. Please check your WebGPU settings.", isBot: true }]);
    } finally { setIsTyping(false); }
  };

  return (
    <>
      <style>{`
        .chat-floating-wrapper { position: fixed; bottom: 30px; right: 30px; display: flex; align-items: center; z-index: 1000; cursor: pointer; animation: globalFloat 3s ease-in-out infinite; transition: all 0.3s ease; gap: 0; }
        .chat-label-attached { background: var(--accent-color); color: white; padding: 10px 25px 10px 20px; border-radius: 25px 0 0 25px; font-weight: 800; font-size: 0.9rem; letter-spacing: 1.5px; border: 1px solid var(--accent-color); border-right: none; transition: all 0.3s ease; margin-right: -15px; }
        .chat-toggle-main { width: 65px; height: 65px; background: var(--accent-color); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; position: relative; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 1px solid var(--accent-color); transition: all 0.3s ease; }
        .chat-floating-wrapper:hover { transform: scale(1.08); }
        .chat-floating-wrapper:hover .chat-label-attached, .chat-floating-wrapper:hover .chat-toggle-main { box-shadow: 0 0 25px var(--accent-color); filter: brightness(1.1); }
        .chat-floating-wrapper:hover .chat-toggle-main { transform: rotate(8deg); }
        @keyframes globalFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .welcome-tip { position: absolute; top: -55px; right: 0; background: var(--accent-color); color: white; padding: 8px 15px; border-radius: 12px; font-size: 0.8rem; font-weight: 600; white-space: nowrap; box-shadow: 0 5px 15px rgba(37,99,235,0.4); }
        .welcome-tip::after { content: ''; position: absolute; bottom: -6px; right: 25px; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 6px solid var(--accent-color); }
        .notification-dot { position: absolute; top: 5px; right: 5px; width: 12px; height: 12px; background: #ff3333; border-radius: 50%; border: 2px solid white; animation: blink 1.5s infinite; }
        @keyframes blink { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(1.2); } }
        .chat-window { position: fixed; bottom: 110px; right: 30px; width: 350px; height: 500px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 20px; display: flex; flex-direction: column; box-shadow: 0 10px 40px rgba(0,0,0,0.3); z-index: 1000; overflow: hidden; }
        .chat-header { background: var(--accent-color); padding: 15px; color: white; display: flex; justify-content: space-between; align-items: center; }
        .chat-messages { flex: 1; padding: 15px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; background: var(--bg-primary); }
        .message { max-width: 85%; padding: 10px 14px; border-radius: 15px; font-size: 0.9rem; line-height: 1.4; position: relative; }
        .message.bot { background: var(--bg-secondary); color: var(--text-primary); align-self: flex-start; }
        .message.user { background: var(--accent-color); color: white; align-self: flex-end; }
        .thinking-dots::after { content: '...'; display: inline-block; width: 0px; overflow: hidden; vertical-align: bottom; animation: dots 1.5s steps(4, end) infinite; }
        @keyframes dots { to { width: 1.25em; } }
        .progress-bar { height: 4px; background: #10b981; transition: width 0.3s; }
        .chat-input-area { padding: 15px; display: flex; gap: 10px; background: var(--bg-card); border-top: 1px solid var(--border-color); }
        .chat-input-area input { flex: 1; background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 8px 15px; border-radius: 20px; color: var(--text-primary); outline: none; }
        .chat-input-area input:disabled { opacity: 0.6; cursor: not-allowed; }
      `}</style>

      <div className="chat-floating-wrapper" onClick={handleToggle}>
        {showTooltip && !isOpen && !hasClicked && <div className="welcome-tip">Ask me anything! 👋</div>}
        {!isOpen && (
          <>
            <div className="chat-label-attached">NITHYA</div>
            <div className="chat-toggle-main">
              <FaCommentDots size={28} />
              <div className="notification-dot"></div>
            </div>
          </>
        )}
        {isOpen && <div className="chat-toggle-main"><FaTimes size={24} /></div>}
      </div>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaRobot /> <span>NITHYA Assistant</span>
            </div>
            {!isReady && <span style={{ fontSize: '0.7rem' }}>{loadProgress}% Loaded</span>}
          </div>
          {!isReady && <div className="progress-bar" style={{ width: `${loadProgress}%` }}></div>}
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.isBot ? "bot" : "user"} ${msg.isThinking ? "thinking-dots" : ""}`}>
                {msg.text.split(/(\*\*.*?\*\*)/g).map((part, index) => 
                  part.startsWith("**") && part.endsWith("**") ? <strong key={index} style={{ color: 'var(--accent-color)' }}>{part.slice(2, -2)}</strong> : part
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-input-area">
            <input 
              type="text" 
              placeholder={isReady ? (isTyping ? "Nithya is responding..." : "Ask me anything...") : (isInitializing ? "Waking up AI..." : "Tap to wake up AI")} 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()} 
              disabled={isTyping || !isReady} 
            />
            <button 
              onClick={handleSendMessage} 
              disabled={!isReady || isTyping} 
              style={{ background: 'none', border: 'none', color: 'var(--accent-color)', cursor: 'pointer' }}
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;