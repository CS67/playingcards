import Spline from "@splinetool/react-spline";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        minHeight: "100vh",
        backgroundColor: "#222222",
        color: "white",
      }}
    >
      <div
        style={{
          width: isMobile ? "100%" : "60%",
          height: isMobile ? "50vh" : "100vh",
        }}
      >
        <Spline scene="https://prod.spline.design/93hY7GNhHFrnewTp/scene.splinecode" />
      </div>

      <div
        style={{
          width: isMobile ? "100%" : "40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: isMobile ? "2rem 1rem" : "clamp(20px, 3vw, 40px)",
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "2.5rem" : "clamp(2rem, 4vw, 4rem)",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          潍坊保皇
        </h1>
        <span
          style={{
            fontSize: "0.7rem",
            marginBottom: isMobile ? "1.5rem" : "2.5rem",
          }}
        >
          经典山东扑克游戏
        </span>
        <button
          onClick={scrollToNextSection}
          style={{
            border: "1px solid white",
            padding: isMobile ? "0.8rem 2rem" : "1rem 2.5rem",
            fontSize: isMobile ? "1rem" : "1.2rem",
            backgroundColor: "transparent",
            color: "white",
            borderRadius: "40px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "white";
            e.target.style.color = "black";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "white";
          }}
        >
          查看规则
        </button>
      </div>
    </main>
  );
}
