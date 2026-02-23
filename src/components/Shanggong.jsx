export default function Shanggong() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <span>先进闷供，再进落供。</span>
            <span>若明保，所有进贡翻倍。</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h2>闷供：</h2>
          <span>
            如果一方出牌导致另一方最后1张3出不出去，则称为被闷。被闷方需要向闷方上供。闷供需要上自己最大的牌。
          </span>
          <span>有大王进大王，无大王进小王，无小王进2，无2不进贡。</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h2>落供</h2>
          <span>
            输方进贡，保皇阵营：皇帝进2张，侍卫进1张，平民阵营：各自一张。
          </span>
          <span>进2，无2不进贡。</span>
        </div>
      </div>
    </div>
  );
}
