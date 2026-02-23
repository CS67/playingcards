import Spline from "@splinetool/react-spline";

export default function Home() {
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
        height: "100vh",
        backgroundColor: "#222222",
        color: "white",
      }}
    >
      <div
        style={{
          width: "60%",
        }}
      >
        <Spline scene="https://prod.spline.design/93hY7GNhHFrnewTp/scene.splinecode" />
      </div>

      <div
        style={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
          }}
        >
          潍坊保皇
        </h1>
        <span
          style={{
            fontSize: "0.7rem",
            marginBottom: "40px",
          }}
        >
          经典山东扑克游戏
        </span>
        <button
          onClick={scrollToNextSection}
          style={{
            border: "1px solid white",
            padding: "15px 40px",
            fontSize: "1.2rem",
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
