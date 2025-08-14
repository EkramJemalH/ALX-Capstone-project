import React, { useEffect, useState } from "react";

export default function QuestionCard({ question, handleAnswer }) {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if (question) {
      const shuffled = [...question.incorrect_answers, question.correct_answer]
        .sort(() => Math.random() - 0.5);
      setAnswers(shuffled);
    }
  }, [question]);

  const decodeHTML = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <div style={{
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "2rem",
      maxWidth: "600px",
      width: "100%",
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
    }}>
      <h2 style={{ marginBottom: "1.5rem" }}>{decodeHTML(question.question)}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {answers.map((answer, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(answer === question.correct_answer)}
            style={{
              padding: "0.5rem",
              borderRadius: "6px",
              border: "1px solid #76A541",
              backgroundColor: "#76A541",
              color: "#fff",
              cursor: "pointer",
              fontWeight: "600"
            }}
          >
            {decodeHTML(answer)}
          </button>
        ))}
      </div>
    </div>
  );
}
