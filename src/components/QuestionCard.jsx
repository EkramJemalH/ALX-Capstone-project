import React, { useEffect, useState } from "react";

export default function QuestionCard({ question, handleAnswer, isLastQuestion, onNext }) {
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    if (question) {
      const shuffled = [...question.incorrect_answers, question.correct_answer].sort(
        () => Math.random() - 0.5
      );
      setAnswers(shuffled);
      setSelectedAnswer(null); // reset selection for new question
    }
  }, [question]);

  const decodeHTML = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  const handleSelect = (answer) => {
    setSelectedAnswer(answer);
    handleAnswer(answer === question.correct_answer);
  };

  return (
    <div
      style={{
        backgroundColor: "rgba(224, 224, 224, 0.9)", // light gray + transparency
        borderRadius: "8px",
        padding: "2rem",
        maxWidth: "600px",
        width: "100%",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        backdropFilter: "blur(5px)", // optional blur for better see-through effect
      }}
    >
      {/* Category */}
      <h2 style={{ marginBottom: "1rem", color: "#034527", fontWeight: "700" , fontFamily: "'Ribeye', serif" , fontSize:"2rem"}}>
        {decodeHTML(question.category)}
      </h2>

      {/* Question */}
      <h3 style={{ marginBottom: "0.95rem", color: "#034527" }}>{decodeHTML(question.question)}</h3>

      {/* Answers (2x2 grid) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        {answers.map((answer, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(answer)}
            disabled={selectedAnswer !== null}
            style={{
              padding: "0.5rem",
              borderRadius: "6px",
              border: selectedAnswer === answer ? "2px solid #FDF140" : "1px solid #FDF140",
              backgroundColor: selectedAnswer === answer ? "#76A541" : "#fff",
              color: selectedAnswer === answer ? "#fff" : "#413a3aff",
              cursor: selectedAnswer ? "default" : "pointer",
              fontWeight: "600",
            }}
          >
            {decodeHTML(answer)}
          </button>
        ))}
      </div>

      {/* Next / Submit Button */}
      <button
        onClick={onNext}
        disabled={selectedAnswer === null}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#034527",
          color: "#fff",
          border: "none",
          fontWeight:"700",
          borderRadius: "4px",
          cursor: selectedAnswer === null ? "not-allowed" : "pointer",
        }}
      >
        {isLastQuestion ? "Submit" : "Next"}
      </button>
    </div>
  );
}
