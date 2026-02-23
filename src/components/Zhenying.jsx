export default function Zhenying() {
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
            <h2>皇帝</h2>
            <span
              style={{
                fontSize: "0.7rem ",
                color: "gray",
              }}
            >
              保皇阵营
            </span>
            <span>
              摸到皇帝牌的人，如果手中有至少三张花色和点数一样的牌，
              那么可以公布自己的皇帝身份(登基)，或让位。
            </span>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "20px",
                fontSize: "0.8rem",
                gap: "5px",
              }}
            >
              <h3>登基和侍卫</h3>
              <span>
                皇帝公布三张花色和点数一样的牌，拿到第四张一样的牌的人，就是侍卫(也叫保子、腿子)，这张牌称为侍卫牌。
              </span>
              <span>如果皇帝手里有第四张一样的牌，称为独保。</span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "20px",
                fontSize: "0.8rem",
                gap: "5px",
              }}
            >
              <h3>让位</h3>
              <span>
                如果主动让位，或手里没有三张花色和点数一样的牌：
                将皇帝牌让位给上一家(顺时针)。
              </span>
              <span>
                如果从第二个人开始，依然没有至少三张花色和点数一样的牌，需要将皇帝牌和手中的一张2让给上一家。第三个人仍然没有的话，需要把前面两个人让的牌和自己的一张2让给上一家。以此类推，直到有人拿到皇帝牌，并且至少有三张花色和点数一样的牌，顺利登基。
              </span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <h2>侍卫 </h2>
            <span
              style={{
                fontSize: "0.7rem ",
                color: "gray",
              }}
            >
              保皇阵营
            </span>
            <span>侍卫得知自己的身份后，可以选择自己是明保或暗保。</span>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "20px",
                fontSize: "0.8rem",
                gap: "5px",
              }}
            >
              <h3>明保</h3>
              <span>
                直接公布自己是侍卫身份，胜利后或失败后，收供或上贡都翻倍。
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "20px",
                fontSize: "0.8rem",
                gap: "5px",
              }}
            >
              <h3>暗保</h3>
              <span>不公布自己的侍卫身份，正常收供或上贡。</span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <h2>平民</h2>
            <span
              style={{
                fontSize: "0.7rem ",
                color: "gray",
              }}
            >
              平民阵营
            </span>
            <span>剩余3人为平民。</span>
          </div>
        </div>
      </div>
    </div>
  );
}
