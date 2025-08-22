import React from "react";

const Result = ({ score, total, onPlayAgain, onReturnHome }) => {
  return (
    <div className="result-container" style={{ textAlign: "center", padding: "20px" }}>
      <div className="result-card" style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "20px" }}>
        <h2>Quiz Completed!</h2>
        <p>
          You scored <strong>{score}</strong> out of <strong>{total}</strong>
        </p>
        <div style={{ marginTop: "20px" }}>
          <button 
            onClick={onPlayAgain} 
            style={{ margin: "10px", padding: "10px 20px", borderRadius: "8px", cursor: "pointer" }}
          >
            Play Again
          </button>
          <button 
            onClick={onReturnHome} 
            style={{ margin: "10px", padding: "10px 20px", borderRadius: "8px", cursor: "pointer" }}
          >
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
