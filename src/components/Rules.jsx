import { useState, useEffect } from "react";
import Content from "./Content";

export default function Rules() {
  const [activeSection, setActiveSection] = useState("摸牌");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sections = ["摸牌", "阵营", "出牌", "规则", "上贡", "技巧"];

  const content = {
    摸牌: {
      title: "摸牌规则",
      description: "了解如何发牌和开始游戏",
    },
    阵营: {
      title: "阵营介绍",
      description: "了解不同阵营的角色和目标",
    },
    出牌: {
      title: "出牌规则",
      description: "掌握出牌的基本规则",
    },

    规则: {
      title: "打法规则",
      description: "学习基本打法",
    },

    上贡: {
      title: "上贡规则",
      description: "了解上贡机制",
    },
    技巧: {
      title: "进阶技巧",
      description: "提升你的游戏水平",
    },
  };

  return (
    <main
      style={{
        background: "linear-gradient(135deg, #7c7373, #2a2a2a, #1a1a1a)",
        backgroundSize: "200% 200%",
        animation: "gradientShift 8s ease infinite",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        height: "100vh",
      }}
    >
      {/* 左侧导航栏 */}
      <aside
        style={{
          backgroundColor: "#1a1a1a",
          padding: isMobile ? "1rem" : "clamp(20px, 3vw, 40px)",
          margin: isMobile
            ? "1rem"
            : "clamp(20px, 4vw, 60px) clamp(10px, 2vw, 20px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: isMobile ? "row" : "column",
          gap: isMobile ? "0.5rem" : "1rem",
          borderRadius: isMobile ? "10px" : "20px",
          overflowX: isMobile ? "auto" : "visible",
          flexWrap: isMobile ? "wrap" : "nowrap",
        }}
      >
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            style={{
              padding: isMobile ? "0.6rem 1rem" : "1rem 1.5rem",
              backgroundColor:
                activeSection === section ? "#444444" : "transparent",
              color: "white",
              border: "1px solid #444444",
              borderRadius: isMobile ? "10px" : "20px",
              fontSize: isMobile ? "0.9rem" : "1.1rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              textAlign: "left",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              if (activeSection !== section) {
                e.target.style.backgroundColor = "#333333";
              }
            }}
            onMouseLeave={(e) => {
              if (activeSection !== section) {
                e.target.style.backgroundColor = "transparent";
              }
            }}
          >
            {section}
          </button>
        ))}
      </aside>

      {/* 右侧内容区域 */}
      <section
        style={{
          flex: 1,
          padding: isMobile
            ? "1.5rem 1rem"
            : "clamp(30px, 5vw, 60px) clamp(40px, 6vw, 80px)",
          color: "white",
          overflowY: "auto",
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "2rem" : "clamp(2rem, 3vw, 3rem)",
            fontWeight: "bold",
            marginBottom: isMobile ? "1rem" : "1.5rem",
          }}
        >
          {content[activeSection].title}
        </h1>
        <p
          style={{
            fontSize: isMobile ? "1rem" : "1.2rem",
            color: "#aaaaaa",
            marginBottom: isMobile ? "1.5rem" : "2.5rem",
          }}
        >
          {content[activeSection].description}
        </p>
        <div>
          <Content type={activeSection} />
        </div>
      </section>
    </main>
  );
}
