import { useState, useEffect } from "react";
import Gailv from "./Gailv";

export default function Jiqiao() {
  const [active, setActive] = useState("");
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
    <div>
      {active === "" && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "0.8rem",
            fontWeight: "bold",
            width: isMobile ? "80px" : "100px",
            height: isMobile ? "35px" : "40px",
            backgroundColor: "#444",
            borderRadius: isMobile ? "15px" : "20px",
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
