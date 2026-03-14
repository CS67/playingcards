import { useState, useEffect } from "react";
import CardFan from "./CardFan";

const floatingSymbols = [
  {
    symbol: "♠",
    left: "4%",
    delay: "0s",
    duration: "16s",
    size: "2.8rem",
    color: "#ccc",
  },
  {
    symbol: "♥",
    left: "12%",
    delay: "4s",
    duration: "13s",
    size: "2rem",
    color: "#cc3333",
  },
  {
    symbol: "♦",
    left: "22%",
    delay: "8s",
    duration: "19s",
    size: "2.4rem",
    color: "#cc3333",
  },
  {
    symbol: "♣",
    left: "33%",
    delay: "2s",
    duration: "15s",
    size: "3.2rem",
    color: "#ccc",
  },
  {
    symbol: "♠",
    left: "44%",
    delay: "10s",
    duration: "12s",
    size: "1.6rem",
    color: "#ccc",
  },
  {
    symbol: "♥",
    left: "55%",
    delay: "6s",
    duration: "18s",
    size: "3.6rem",
    color: "#cc3333",
  },
  {
    symbol: "♦",
    left: "64%",
    delay: "1s",
    duration: "14s",
    size: "2rem",
    color: "#cc3333",
  },
  {
    symbol: "♣",
    left: "74%",
    delay: "7s",
    duration: "20s",
    size: "2.8rem",
    color: "#ccc",
  },
  {
    symbol: "♠",
    left: "83%",
    delay: "3s",
    duration: "17s",
    size: "2.2rem",
    color: "#ccc",
  },
  {
    symbol: "♥",
    left: "91%",
    delay: "11s",
    duration: "16s",
    size: "1.8rem",
    color: "#cc3333",
  },
  {
    symbol: "王",
    left: "8%",
    delay: "13s",
    duration: "22s",
    size: "1.8rem",
    color: "#D4AF37",
  },
  {
    symbol: "皇",
    left: "68%",
    delay: "5s",
    duration: "24s",
    size: "1.8rem",
    color: "#D4AF37",
  },
];

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [btnHover, setBtnHover] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        minHeight: "100vh",
        background:
          "radial-gradient(ellipse at 60% 40%, #1a1205 0%, #0d0d0d 60%, #000 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 浮动牌面符号背景 */}
      {floatingSymbols.map((item, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: item.left,
            bottom: "-80px",
            fontSize: item.size,
            color: item.color,
            animation: `floatUp ${item.duration} ${item.delay} linear infinite`,
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
            filter: "blur(0.5px)",
          }}
        >
          {item.symbol}
        </span>
      ))}

      {/* 顶部金色分隔线 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, #D4AF37 30%, #FFD700 50%, #D4AF37 70%, transparent)",
          animation: "lineFade 3s ease-in-out infinite",
          zIndex: 2,
        }}
      />

      {/* 扑克牌扇形动画 */}
      <div
        style={{
          width: isMobile ? "100%" : "60%",
          height: isMobile ? "55vw" : "100vh",
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          scale: isMobile ? "1" : "1.5",
        }}
      >
        <CardFan />
      </div>

      {/* 右侧内容 */}
      <div
        style={{
          width: isMobile ? "100%" : "40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: isMobile ? "2rem 1rem" : "clamp(20px, 3vw, 40px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* 装饰性花样 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
            marginBottom: "1.2rem",
            opacity: 0.7,
          }}
        >
          <span style={{ color: "#cc3333", fontSize: "1.2rem" }}>♥</span>
          <div
            style={{
              width: "60px",
              height: "1px",
              background: "linear-gradient(to right, transparent, #D4AF37)",
            }}
          />
          <span
            style={{
              color: "#D4AF37",
              fontSize: "1rem",
              letterSpacing: "0.2em",
            }}
          >
            保皇
          </span>
          <div
            style={{
              width: "60px",
              height: "1px",
              background: "linear-gradient(to left, transparent, #D4AF37)",
            }}
          />
          <span style={{ color: "#cc3333", fontSize: "1.2rem" }}>♦</span>
        </div>

        {/* 主标题 */}
        <h1
          style={{
            fontSize: isMobile ? "2.8rem" : "clamp(2.5rem, 4.5vw, 5rem)",
            fontWeight: 900,
            textAlign: "center",
            background:
              "linear-gradient(135deg, #FFD700 0%, #D4AF37 40%, #FFF8DC 60%, #D4AF37 80%, #B8860B 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation:
              "goldGlow 3s ease-in-out infinite, shimmer 4s linear infinite",
            fontFamily: "'Noto Serif SC', serif",
            letterSpacing: "0.1em",
          }}
        >
          潍坊保皇
        </h1>

        {/* 副标题 */}
        <span
          style={{
            fontSize: "0.75rem",
            marginBottom: isMobile ? "0.6rem" : "1rem",
            color: "#aaa",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          经典山东扑克游戏
        </span>

        {/* 牌型装饰行 */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginBottom: isMobile ? "2rem" : "3rem",
            fontSize: "1.4rem",
          }}
        >
          <span style={{ color: "#888" }}>♠</span>
          <span style={{ color: "#cc3333" }}>♥</span>
          <span style={{ color: "#cc3333" }}>♦</span>
          <span style={{ color: "#888" }}>♣</span>
        </div>

        {/* 按钮 */}
        <button
          onClick={scrollToNextSection}
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          style={{
            border: "1px solid #D4AF37",
            padding: isMobile ? "0.8rem 2.5rem" : "1rem 3rem",
            fontSize: isMobile ? "1rem" : "1.1rem",
            background: btnHover
              ? "linear-gradient(135deg, #D4AF37, #B8860B)"
              : "transparent",
            color: btnHover ? "#000" : "#D4AF37",
            borderRadius: "40px",
            cursor: "pointer",
            transition: "all 0.35s ease",
            letterSpacing: "0.2em",
            fontFamily: "'Noto Serif SC', serif",
            fontWeight: 700,
            boxShadow: btnHover
              ? "0 0 20px rgba(212,175,55,0.5), 0 0 40px rgba(212,175,55,0.2)"
              : "0 0 8px rgba(212,175,55,0.2)",
          }}
        >
          玩法规则
        </button>

        {/* 底部小装饰 */}
        <div
          style={{
            marginTop: isMobile ? "1.5rem" : "2.5rem",
            fontSize: "0.65rem",
            color: "#555",
            letterSpacing: "0.15em",
          }}
        >
          ✦ 五人扑克 &nbsp;·&nbsp; 二阵营对决 ✦
        </div>
      </div>

      {/* 底部金色分隔线 */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, #D4AF37 30%, #FFD700 50%, #D4AF37 70%, transparent)",
          animation: "lineFade 3s ease-in-out infinite",
          animationDelay: "1.5s",
          zIndex: 2,
        }}
      />
    </main>
  );
}
