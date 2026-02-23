import { useState, useEffect } from "react";

export default function Chupai() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "1rem" : "1.5rem",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
            }}
          >
            <span>5人游戏，使用4副54张的牌(52张正牌+大小王)，共216张。</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
          }}
        >
          <h2>首局：</h2>
          <span>摸到正面朝上的牌的人，先出牌。</span>
          <span>随后逆时针出牌。</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
          }}
        >
          <h2>后续：</h2>
          <span>由上一局的皇帝先出牌。</span>
          <span>随后逆时针出牌。</span>
        </div>
      </div>
    </div>
  );
}
