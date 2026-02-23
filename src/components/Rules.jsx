import { useState } from "react";
import Content from "./Content";

export default function Rules() {
  const [activeSection, setActiveSection] = useState("摸牌");

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
        height: "100vh",
      }}
    >
      {/* 左侧导航栏 */}
      <aside
        style={{
          backgroundColor: "#1a1a1a",
          padding: "40px",
          margin: "60px 20px ",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "15px",
          borderRadius: "20px",
        }}
      >
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            style={{
              padding: "15px 25px",
              backgroundColor:
                activeSection === section ? "#444444" : "transparent",
              color: "white",
              border: "1px solid #444444",
              borderRadius: "20px",
              fontSize: "1.1rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              textAlign: "left",
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
          padding: "60px 80px",
          color: "white",
          overflowY: "auto",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          {content[activeSection].title}
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#aaaaaa",
            marginBottom: "40px",
          }}
        >
          {content[activeSection].description}
        </p>
        <div style={{ overflow: "auto" }}>
          <Content type={activeSection} />
        </div>
      </section>
    </main>
  );
}
