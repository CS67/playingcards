import { useState } from "react";
import Gailv from "./Gailv";
export default function Jiqiao() {
  const [active, setActive] = useState("");
  return (
    <div>
      {active === "" && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "0.8rem",
            fontWeight: "bold",
            width: "100px",
            height: "40px",
            backgroundColor: "#444",
            borderRadius: "20px",
            cursor: "pointer",
          }}
          onClick={() => setActive("摸牌概率")}
        >
          摸牌概率
        </div>
      )}
      {active === "摸牌概率" && <Gailv setActive={setActive} />}
    </div>
  );
}
