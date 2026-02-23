export default function Gailv({ setActive }) {
  return (
    <div>
      <div style={{ display: "flex", gap: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "0.8rem",
            fontWeight: "bold",
            width: "40px",
            height: "40px",
            backgroundColor: "#444",
            borderRadius: "20px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
          onClick={() => setActive("")}
        >
          返回
        </div>
        <h2>摸牌概率</h2>
      </div>
      <div
        style={{
          paddingLeft: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <h3>大小王</h3>

        <span>0 张王：16.19834%</span>
        <span>1 张王：33.84111%</span>
        <span>2 张王：29.98580%</span>
        <span>3 张王：14.71001%</span>
        <span>4 张王：4.36704%</span>
        <span>5 张王：0.80288%</span>
        <span>6 张王：0.08921%</span>
        <span>7 张王：0.00547%</span>
        <span>8 张王：0.00014%</span>
        <span>你平均能拿到的大小王：1.6 张</span>
      </div>
      <div
        style={{
          paddingLeft: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h3>点数2</h3>

        <span>0 张 2：2.41009%</span>
        <span>1 张 2：10.61085%</span>
        <span>2 张 2：21.22171%</span>
        <span>3 张 2：25.57848%</span>
        <span>4 张 2：20.78252%</span>
        <span>5 张 2：12.06201%</span>
        <span>6 张 2：5.16943%</span>
        <span>7 张 2：1.66756%</span>
        <span>8 张 2：0.40887%</span>
        <span>9 张 2：0.07639%</span>
        <span>10 张 2：0.01083%</span>
        <span>11 张 2：0.00115%</span>
        <span>12 张 2：0.00009%</span>
        <span>13 张 2：&lt; 0.00001%</span>
        <span>14 张 2：&lt; 0.00001%</span>
        <span>15 张 2：&lt; 0.00001%</span>
        <span>16 张 2：&lt; 0.00001%</span>
        <span>你平均能拿到的数字2：3.2 张</span>
      </div>
    </div>
  );
}
