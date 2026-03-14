import { useState, useEffect } from "react";
import Content from "./Content";

const sectionMeta = {
  摸牌: { icon: "♦", title: "摸牌规则", description: "了解如何发牌和开始游戏" },
  阵营: { icon: "👑", title: "阵营介绍", description: "了解不同阵营的角色和目标" },
  出牌: { icon: "♠", title: "出牌规则", description: "掌握出牌的基本规则" },
  规则: { icon: "♣", title: "打法规则", description: "学习基本打法" },
  上贡: { icon: "♥", title: "上贡规则", description: "了解上贡机制" },
  技巧: { icon: "★", title: "进阶技巧", description: "提升你的游戏水平" },
};

const sections = Object.keys(sectionMeta);

export default function Rules() {
  const [activeSection, setActiveSection] = useState("摸牌");
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main
      style={{
        background: "linear-gradient(160deg, #0f0a00 0%, #1a1208 30%, #0d0d0d 70%, #080808 100%)",
        backgroundSize: "200% 200%",
        animation: "gradientShift 10s ease infinite",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* 顶部装饰线 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent, #D4AF37 30%, #FFD700 50%, #D4AF37 70%, transparent)",
          animation: "lineFade 3s ease-in-out infinite",
          zIndex: 2,
        }}
      />

      {/* 左侧导航栏 */}
      <aside
        style={{
          background: "linear-gradient(180deg, #111008 0%, #0a0a08 100%)",
          border: "1px solid rgba(212,175,55,0.15)",
          padding: isMobile ? "1rem" : "clamp(20px, 3vw, 40px)",
          margin: isMobile
            ? "1.2rem"
            : "clamp(20px, 4vw, 60px) clamp(10px, 2vw, 20px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: isMobile ? "row" : "column",
          gap: isMobile ? "0.5rem" : "0.8rem",
          borderRadius: isMobile ? "12px" : "16px",
          overflowX: isMobile ? "auto" : "visible",
          flexWrap: isMobile ? "wrap" : "nowrap",
          boxShadow: "0 0 30px rgba(0,0,0,0.5)",
          flexShrink: 0,
        }}
      >
        {/* 导航标题 */}
        {!isMobile && (
          <div
            style={{
              color: "#D4AF37",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              marginBottom: "0.5rem",
              opacity: 0.7,
            }}
          >
            ✦ 规则导航 ✦
          </div>
        )}

        {sections.map((section) => {
          const isActive = activeSection === section;
          const isHovered = hovered === section;
          const meta = sectionMeta[section];
          return (
            <button
              key={section}
              className={isActive ? "nav-btn-active" : ""}
              onClick={() => setActiveSection(section)}
              onMouseEnter={() => setHovered(section)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: isMobile ? "0.55rem 0.9rem" : "0.9rem 1.4rem",
                background: isActive
                  ? "linear-gradient(135deg, rgba(212,175,55,0.18), rgba(212,175,55,0.06))"
                  : isHovered
                  ? "rgba(212,175,55,0.07)"
                  : "transparent",
                color: isActive ? "#D4AF37" : isHovered ? "#c8a830" : "#999",
                border: isActive
                  ? "1px solid rgba(212,175,55,0.6)"
                  : "1px solid rgba(255,255,255,0.08)",
                borderRadius: isMobile ? "10px" : "12px",
                fontSize: isMobile ? "0.9rem" : "1rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                textAlign: "left",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "'Noto Serif SC', serif",
                fontWeight: isActive ? 700 : 400,
                width: isMobile ? "auto" : "100%",
              }}
            >
              <span
                style={{
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  opacity: isActive ? 1 : 0.5,
                }}
              >
                {meta.icon}
              </span>
              {section}
            </button>
          );
        })}

        {/* 底部装饰 */}
        {!isMobile && (
          <div
            style={{
              marginTop: "0.8rem",
              display: "flex",
              gap: "0.5rem",
              opacity: 0.3,
              fontSize: "0.8rem",
            }}
          >
            <span style={{ color: "#888" }}>♠</span>
            <span style={{ color: "#cc3333" }}>♥</span>
            <span style={{ color: "#cc3333" }}>♦</span>
            <span style={{ color: "#888" }}>♣</span>
          </div>
        )}
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
          minWidth: 0,
        }}
      >
        {/* 内容头部 */}
        <div style={{ marginBottom: isMobile ? "1.5rem" : "2.5rem" }}>
          {/* 图标 + 标题行 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              marginBottom: "0.6rem",
            }}
          >
            <span
              style={{
                fontSize: isMobile ? "1.8rem" : "2.2rem",
                filter: "drop-shadow(0 0 8px rgba(212,175,55,0.5))",
              }}
            >
              {sectionMeta[activeSection].icon}
            </span>
            <h1
              style={{
                fontSize: isMobile ? "2rem" : "clamp(1.8rem, 3vw, 2.8rem)",
                fontWeight: 900,
                background: "linear-gradient(135deg, #FFD700, #D4AF37, #FFF8DC)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "'Noto Serif SC', serif",
              }}
            >
              {sectionMeta[activeSection].title}
            </h1>
          </div>

          {/* 金色分隔线 */}
          <div
            style={{
              height: "1px",
              background: "linear-gradient(90deg, rgba(212,175,55,0.6), rgba(212,175,55,0.1) 60%, transparent)",
              marginBottom: "0.8rem",
            }}
          />

          <p
            style={{
              fontSize: isMobile ? "0.9rem" : "1rem",
              color: "#888",
              letterSpacing: "0.05em",
            }}
          >
            {sectionMeta[activeSection].description}
          </p>
        </div>

        {/* 内容主体 */}
        <div>
          <Content type={activeSection} />
        </div>
      </section>
    </main>
  );
}
