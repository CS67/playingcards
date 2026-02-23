import { useState, useEffect } from "react";

export default function Mopai() {
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
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? "1rem" : "2rem",
        alignItems: isMobile ? "flex-start" : "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "1rem" : "1.5rem",
          flex: 1,
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
            <span>去除11张3，保留5张3。共205张，每人41张牌。</span>
            <span>从大王中选出1张牌，用显眼的标记，标记为皇帝。</span>
            <span>将洗好后的牌，全部反面摊开，等待摸牌。</span>
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
          <span>由任意一人从牌中间摸一张牌，正面朝上放回原位。</span>
          <span>
            从此人开始，逆时针数人数，当数到刚才摸出的点数时，该人即为“首局”起始摸牌玩家。
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
          }}
        >
          <h2>后续：</h2>
          <span>由上一局皇帝的侍卫从中间掰开牌，将后面的一摞放在前面。</span>
          <span>皇帝摸首张牌。随后逆时针摸牌。</span>
          <span style={{ fontSize: "0.7rem", color: "gray" }}>
            注意：最后一张牌，总是由皇帝的上一家摸取。
          </span>
        </div>
      </div>
      <img
        src="/fapai.png"
        alt="发牌示意图"
        style={{
          width: isMobile ? "100%" : "200px",
          maxWidth: "200px",
          height: "auto",
        }}
      />
    </div>
  );
}
