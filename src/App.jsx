import { useEffect, useState } from "react";
import profile from "./assets/profile.jpg";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add Orbitron font
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Inter:wght@400..900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    setIsVisible(true);
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, i) => {
      card.style.opacity = 0;
      card.style.transform = "translateY(30px)";
      setTimeout(() => {
        card.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      }, i * 150 + 400);
    });
  }, []);

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    padding: "30px",
    borderRadius: "24px",
    margin: "20px auto",
    maxWidth: "700px",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    textAlign: "left",
    position: "relative",
    overflow: "hidden",
  };

  const handleHover = (e) => {
    e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
    e.currentTarget.style.background = "rgba(255, 255, 255, 0.07)";
    e.currentTarget.style.boxShadow = "0 20px 40px rgba(99, 102, 241, 0.2)";
    e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.4)";
  };

  const handleOut = (e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
    e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
  };

  return (
    <div
      className="main-container"
      style={{
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        background: "radial-gradient(circle at top right, #1e1b4b, #0f172a), radial-gradient(circle at bottom left, #1e293b, #0f172a)",
        color: "#f8fafc",
        minHeight: "100vh",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      {/* GLOW EFFECTS */}
      <div style={{
        position: "fixed",
        top: "-10%",
        right: "-10%",
        width: "40%",
        height: "40%",
        background: "rgba(99, 102, 241, 0.15)",
        filter: "blur(120px)",
        borderRadius: "50%",
        zIndex: 0,
        pointerEvents: "none"
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* PROFILE IMAGE CONTAINER */}
        <div 
          className="profile-img-container"
          style={{ 
          position: "relative", 
          display: "inline-block",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(0.8)",
          transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)"
        }}>
          <div style={{
            position: "absolute",
            inset: "-10px",
            background: "linear-gradient(45deg, #6366f1, #a855f7)",
            borderRadius: "50%",
            filter: "blur(15px)",
            opacity: 0.6,
            animation: "pulse 3s infinite"
          }} />
          <img
            src={profile}
            alt="Vasanthapriya Ramesh"
            onError={(e) => {
              e.target.src = "https://ui-avatars.com/api/?name=Vasanthapriya+Ramesh&background=6366f1&color=fff&size=200";
            }}
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              objectFit: "cover",
              position: "relative",
              border: "4px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          />
        </div>

        {/* NAME AND TITLE */}
        <div style={{
          marginTop: "30px",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease-out 0.2s"
        }}>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              fontWeight: "900",
              fontFamily: "'Orbitron', sans-serif",
              lineHeight: "1.1",
              letterSpacing: "0.05em",
              background: "linear-gradient(to right, #fff, #94a3b8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "5px",
              padding: "0",
              textTransform: "uppercase"
            }}
          >
            VASANTHAPRIYA RAMESH
          </h1>
          
          <p 
            className="subtitle"
            style={{ 
            fontSize: "1.1rem", 
            color: "#94a3b8",
            fontWeight: "500",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginTop: "0"
          }}>
            Agriculture Engineer <span style={{color: "#6366f1"}}>•</span> Software Developer <span style={{color: "#6366f1"}}>•</span> Tester
          </p>
        </div>

        {/* HIRE BUTTON */}
        <div style={{
          marginTop: "40px",
          opacity: isVisible ? 1 : 0,
          transition: "all 0.8s ease-out 0.4s"
        }}>
          <a
            href="https://www.fiverr.com/vasanthapriyaramesh"
            target="_blank"
            rel="noopener noreferrer"
            className="hire-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 32px",
              background: "linear-gradient(45deg, #6366f1, #4f46e5)",
              borderRadius: "100px",
              color: "white",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "1.1rem",
              boxShadow: "0 10px 20px rgba(99, 102, 241, 0.3), inset 0 0 0 1px rgba(255,255,255,0.2)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px) scale(1.05)";
              e.currentTarget.style.boxShadow = "0 15px 30px rgba(99, 102, 241, 0.4)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(99, 102, 241, 0.3)";
            }}
          >
            <span>🚀</span> Hire Me
          </a>
        </div>

        {/* CONTENT SECTIONS */}
        <div style={{ marginTop: "80px" }}>
          <div className="card" style={cardStyle} onMouseOver={handleHover} onMouseOut={handleOut}>
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ color: "#fff", display: "flex", alignItems: "center", gap: "12px", marginBottom: "15px" }}>
                <span style={{ padding: "8px", background: "rgba(99, 102, 241, 0.2)", borderRadius: "12px" }}>👤</span>
                About Me
              </h2>
              <p style={{ color: "#94a3b8", lineHeight: "1.7", fontSize: "1.1rem" }}>
                I am a passionate Software Engineer and Agriculture Engineer with a unique perspective on technology. 
                Specializing in web development, rigorous testing, and efficient bug fixing, I build responsive 
                digital experiences that ensure peak performance and user satisfaction.
              </p>
            </div>
          </div>

          <div className="card" style={cardStyle} onMouseOver={handleHover} onMouseOut={handleOut}>
            <h2 style={{ color: "#fff", display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <span style={{ padding: "8px", background: "rgba(168, 85, 247, 0.2)", borderRadius: "12px" }}>🛠️</span>
              Technical Arsenal
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Manual Testing", "API Testing"].map(skill => (
                <span key={skill} style={{
                  padding: "8px 16px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "100px",
                  fontSize: "0.9rem",
                  color: "#e2e8f0"
                }}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="card" style={cardStyle} onMouseOver={handleHover} onMouseOut={handleOut}>
            <h2 style={{ color: "#fff", display: "flex", alignItems: "center", gap: "12px", marginBottom: "15px" }}>
              <span style={{ padding: "8px", background: "rgba(34, 197, 94, 0.2)", borderRadius: "12px" }}>📁</span>
              Featured Projects
            </h2>
            <div style={{ display: "grid", gap: "20px" }}>
              <div>
                <h3 style={{ color: "#e2e8f0", fontSize: "1.2rem", marginBottom: "5px" }}>BracketOro</h3>
                <p style={{ color: "#94a3b8" }}>Live tournament management system with advanced match brackets and real-time updates.</p>
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "15px" }}>
                <h3 style={{ color: "#e2e8f0", fontSize: "1.2rem", marginBottom: "5px" }}>One Kaatha At A Time</h3>
                <p style={{ color: "#94a3b8" }}>Fully responsive storytelling platform optimized for seamless mobile engagement.</p>
              </div>
            </div>
          </div>

          <div className="card" style={cardStyle} onMouseOver={handleHover} onMouseOut={handleOut}>
            <h2 style={{ color: "#fff", display: "flex", alignItems: "center", gap: "12px", marginBottom: "15px" }}>
              <span style={{ padding: "8px", background: "rgba(244, 63, 94, 0.2)", borderRadius: "12px" }}>📧</span>
              Get In Touch
            </h2>
            <div style={{ display: "grid", gap: "15px", color: "#94a3b8" }}>
              <p>Email: <a href="mailto:vasanthapriyaramesh1@gmail.com" style={{ color: "#6366f1", textDecoration: "none" }}>vasanthapriyaramesh1@gmail.com</a></p>
              <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
                <a href="https://www.linkedin.com/in/vasanthapriya-ramesh-83141427b" target="_blank" rel="noreferrer" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "1.5rem" }}>LinkedIn</a>
                <a href="https://github.com/Vasanthapriya-ABI" target="_blank" rel="noreferrer" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "1.5rem" }}>GitHub</a>
                <a href="https://www.fiverr.com/vasanthapriyaramesh" target="_blank" rel="noreferrer" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "1.5rem" }}>Fiverr</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.05); opacity: 0.8; }
          100% { transform: scale(1); opacity: 0.6; }
        }
        ::selection {
          background: #6366f1;
          color: white;
        }

        /* RESPONSIVE STYLES */
        @media (max-width: 768px) {
          .profile-img-container { width: 140px !important; height: 140px !important; }
          .main-container { padding: 40px 15px !important; }
          .card { padding: 20px !important; border-radius: 18px !important; }
          h1 { font-size: 1.8rem !important; }
          .subtitle { font-size: 0.9rem !important; }
          .hire-btn { padding: 12px 24px !important; font-size: 1rem !important; }
        }

        @media (max-width: 480px) {
          .profile-img-container { width: 100px !important; height: 100px !important; }
          .profile-img-container img { width: 100% !important; height: 100% !important; }
          h1 { font-size: 1.4rem !important; }
          .card h2 { font-size: 1.2rem !important; }
          .card p { font-size: 0.9rem !important; }
        }
      `}</style>
    </div>
  );
}

