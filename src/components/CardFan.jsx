import { useState, useEffect } from "react";

const CARD_W = 100;
const CARD_H = 140;
const SPREAD = 140;
const N = 12;

const cards = [
  { rank: "2", suit: "♦", color: "#c00", bg: "#fff" },
  { rank: "2", suit: "♣", color: "#111", bg: "#fff" },
  { rank: "2", suit: "♠", color: "#111", bg: "#fff" },
  { rank: "2", suit: "♥", color: "#c00", bg: "#fff" },
  { rank: "★", suit: "JOKER", color: "#c00", bg: "#fff6f4", bigJoker: true },
  { rank: "★", suit: "JOKER", color: "#c00", bg: "#fff6f4", bigJoker: true },
  {
    rank: "☆",
    suit: "JOKER",
    color: "#1a1a80",
    bg: "#f2f4ff",
    smallJoker: true,
  },
  {
    rank: "☆",
    suit: "JOKER",
    color: "#1a1a80",
    bg: "#f2f4ff",
    smallJoker: true,
  },
  { rank: "2", suit: "♥", color: "#c00", bg: "#fff" },
  { rank: "2", suit: "♠", color: "#111", bg: "#fff" },
  { rank: "2", suit: "♣", color: "#111", bg: "#fff" },
  { rank: "2", suit: "♦", color: "#c00", bg: "#fff" },
];

function PlayingCard({ card, angle, zIndex, fanned }) {
  const isJoker = card.bigJoker || card.smallJoker;

  const glowColor = card.bigJoker
    ? "rgba(200,40,0,0.6)"
    : card.smallJoker
      ? "rgba(20,20,200,0.45)"
      : "rgba(212,175,55,0.2)";

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        marginLeft: `-${CARD_W / 2}px`,
        width: `${CARD_W}px`,
        height: `${CARD_H}px`,
        borderRadius: "8px",
        background: isJoker
          ? `linear-gradient(150deg, ${card.bg} 0%, #fff 100%)`
          : "linear-gradient(150deg, #ffffff 0%, #f5f5f5 100%)",
        border: isJoker
          ? `1.5px solid ${card.color}44`
          : "1px solid rgba(0,0,0,0.13)",
        boxShadow: fanned
          ? `0 6px 24px rgba(0,0,0,0.55), 0 0 ${isJoker ? "22px" : "8px"} ${glowColor}`
          : "0 2px 10px rgba(0,0,0,0.4)",
        transform: fanned ? `rotate(${angle}deg)` : "rotate(0deg)",
        transformOrigin: "50% 100%",
        transition: fanned
          ? "transform 0.75s cubic-bezier(0.34, 1.25, 0.64, 1), box-shadow 0.5s ease"
          : "transform 0.6s cubic-bezier(0.55, 0, 0.9, 0.4), box-shadow 0.4s ease",
        zIndex,
        userSelect: "none",
      }}
    >
      {/* 左上角 */}
      <div
        style={{
          position: "absolute",
          top: 5,
          left: 6,
          color: card.color,
          lineHeight: 1.15,
          textAlign: "center",
        }}
      >
        {isJoker ? (
          "JOKER".split("").map((ch, i) => (
            <div
              key={i}
              style={{ fontSize: 9, fontWeight: 700, lineHeight: 1.3 }}
            >
              {ch}
            </div>
          ))
        ) : (
          <>
            <div style={{ fontSize: 15, fontWeight: 700 }}>{card.rank}</div>
            <div style={{ fontSize: 12 }}>{card.suit}</div>
          </>
        )}
      </div>

      {/* 中心内容 */}
      {isJoker ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <div style={{ fontSize: 36, color: card.color, lineHeight: 1 }}>
            {card.rank}
          </div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: card.color,
              letterSpacing: "0.1em",
            }}
          >
            {card.bigJoker ? "大王" : "小王"}
          </div>
        </div>
      ) : (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: 36,
            color: card.color,
            lineHeight: 1,
          }}
        >
          {card.suit}
        </div>
      )}

      {/* 右下角（旋转180°） */}
      <div
        style={{
          position: "absolute",
          bottom: 5,
          right: 6,
          color: card.color,
          lineHeight: 1.15,
          textAlign: "center",
          transform: "rotate(180deg)",
        }}
      >
        {isJoker ? (
          "JOKER".split("").map((ch, i) => (
            <div
              key={i}
              style={{ fontSize: 9, fontWeight: 700, lineHeight: 1.3 }}
            >
              {ch}
            </div>
          ))
        ) : (
          <>
            <div style={{ fontSize: 15, fontWeight: 700 }}>{card.rank}</div>
            <div style={{ fontSize: 12 }}>{card.suit}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default function CardFan() {
  const [fanned, setFanned] = useState(false);

  useEffect(() => {
    let fanInTimer;

    const runCycle = () => {
      setFanned(true);
      fanInTimer = setTimeout(() => setFanned(false), 2800);
    };

    const startTimer = setTimeout(runCycle, 600);
    const interval = setInterval(runCycle, 5000);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(fanInTimer);
      clearInterval(interval);
    };
  }, []);

  const containerW = CARD_W + CARD_H * 2 + 40;
  const containerH = CARD_H + 80;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{ position: "relative", width: containerW, height: containerH }}
      >
        {/* 底部发光 */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: fanned ? 200 : 24,
            height: fanned ? 200 : 24,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)",
            transition: "width 0.85s ease, height 0.85s ease",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {cards.map((card, i) => {
          // 第一张牌在最右侧（最上层），其余依次向左展开
          const angle = SPREAD / 2 - i * (SPREAD / (N - 1));
          const zIndex = N - i;
          return (
            <PlayingCard
              key={i}
              card={card}
              angle={angle}
              zIndex={zIndex}
              fanned={fanned}
            />
          );
        })}
      </div>
    </div>
  );
}
