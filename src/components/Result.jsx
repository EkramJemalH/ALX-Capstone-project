import React, { useState, useEffect } from "react";

const Result = ({ score, totalQuestions, onPlayAgain, onReturnHome }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isAboveAverage = score >= totalQuestions / 2;
  const message = isAboveAverage
    ? `Bravo, You got ${score} out of ${totalQuestions}!\nYou really know your stuff!`
    : `Oh no, You got ${score} out of ${totalQuestions}!\nDon't give up! Try again and improve!`;

  const isMobile = windowWidth < 768; // tablet or mobile
  const flexDirection = isMobile ? "column" : "row-reverse"; 

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "90vh",
        background: "#76A541",
        padding: "20px",
      }}
    >
      <header
        style={{
          backgroundColor: "#76A541",
          color: "white",
          padding: "0.5rem 1rem",
          fontSize: "1.5rem",
          width: "100%",
          fontWeight: "400",
          fontFamily: "'Protest Revolution', sans-serif",
          borderBottom: "2px solid #FDF140",
          textAlign: "left",
        }}
      >
        Quizzy
      </header>

      
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          marginBottom: "12px",
          flexDirection: flexDirection,
        }}
      >
        {!isMobile && (
          <div
            style={{
              fontSize: "24rem",
              fontFamily: '"Peralta", serif',
              fontWeight: 400,
              fontStyle: "normal",
              color: "#034527",
              textShadow: "0 0 0px #FDF140, 0 0 20px #FDF140",
            }}
          >
            ?
          </div>
        )}

        {/* Result Card */}
        <div
          style={{
            background: "#e4e3e3ff",
            borderRadius: "12px",
            padding: "60px 70px",
            textAlign: "center",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            maxWidth: "300px",
            marginTop:"12px",
          }}
        >
          <h2
            style={{
              marginBottom: "12px",
              color: "#034527",
              fontSize: "2.5rem",
              fontFamily: "'Ribeye', serif",
            }}
          >
            Quiz Completed!
          </h2>
          <p
            style={{
              fontSize: "1.5rem",
              color: "#374151",
              whiteSpace: "pre-line",
            }}
          >
            {message}
          </p>
        </div>
      </div>

      {/* Buttons: stacked on mobile */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "20px",
          marginTop: isMobile ? "20px" : "-40px",
        }}
      >
        <button
          onClick={onPlayAgain}
          style={{
            padding: "12px 24px",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            background: "#034527",
            color: "white",
            transition: "background 0.2s ease, transform 0.2s ease",
          }}
          onMouseOver={(e) => (e.target.style.background = "#FDF140")}
          onMouseOut={(e) => (e.target.style.background = "#034527")}
        >
          ▶ Play Again
        </button>

        <button
          onClick={onReturnHome}
          style={{
            padding: "12px 24px",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            background: "#034527",
            color: "white",
            transition: "background 0.2s ease, transform 0.2s ease",
          }}
          onMouseOver={(e) => (e.target.style.background = "#FDF140")}
          onMouseOut={(e) => (e.target.style.background = "#034527")}
        >
          ⬅ Return Home
        </button>
      </div>
    </div>
  );
};

export default Result;
