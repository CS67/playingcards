export default function Guize() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h2>规则</h2>
          <span>
            侍卫牌 {">"} 大王 {">"} 小王 {">"} 2 {">"} A {">"} K {">"} Q {">"} J{" "}
            {">"} 10
            {">"} 9 {">"} 8 {">"} 7 {">"} 6 {">"} 5 {">"} 4 {">"} 3
          </span>
          <span>
            出牌可以是单张，也可以是多张点数相同的牌。大牌压小牌，且张数必须相同。
          </span>
          <span>3张2能打1张大王，4张2能打侍卫牌。</span>
          <span>
            大王、小王、侍卫牌能挂在其他牌型上，作为任意牌组成牌型。但是挂上后的这张牌需要用更大的牌或多张2来打。
          </span>
          <span>
            每人1张3，没有3需要用1张2买其他人多余的3，没有2则免费拿走。
          </span>
          <span>
            3最后出。
            按照出完3的顺序，每个人的头衔依次叫做头科、二科、三科、二落(lá)、大落。
            如果手中只剩1张3出不出去，称为被闷，直接为大落，第二个被闷的人为二落。
          </span>
          <span>
            进阶玩法--炸弹：4张及以上同点数的牌为炸弹，炸弹可大过任何非炸弹牌型。张数越多炸弹越大
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h2>输赢判断</h2>
          <span style={{ fontSize: "0.7rem", color: "gray" }} s>
            技巧：只需要记住保皇阵营的两种平局情况，保皇若优于两种情况则保皇胜利，否则保皇失败。
          </span>
          <h3>保皇阵营角度：</h3>
          <span>平局</span>
          <span style={{ paddingLeft: "20px" }}>头科/大落、二科/二落</span>
          <span>保皇胜利</span>
          <span style={{ paddingLeft: "20px" }}>
            头科/二科、头科/三科、头科/二落、二科/三科
          </span>
          <span>保皇失败</span>
          <span style={{ paddingLeft: "20px" }}>
            二科/大落、三科/二落、三科/大落、四科/大落
          </span>
          <h3>平民阵营角度：</h3>
          <span>平局</span>
          <span style={{ paddingLeft: "20px" }}>
            二科/三科/四科、头科/三科/大落
          </span>
          <span>平民失败</span>
          <span style={{ paddingLeft: "20px" }}>
            三科/二落/大落、二科/二落/大落、二科/三科/大落、头科/二落/大落
          </span>
          <span>平民胜利</span>
          <span style={{ paddingLeft: "20px" }}>
            头科/三科/二落、头科/二科/大落、头科/二科/二落、头科/二科/三科
          </span>
        </div>
      </div>
    </div>
  );
}
