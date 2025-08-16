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
    <div className="question-card">
      {/* Category */}
      <h2 className="question-category">{decodeHTML(question.category)}</h2>

      {/* Question */}
      <h3 className="question-text">{decodeHTML(question.question)}</h3>

      {/* Answers */}
      <div className="answer-container">
        {answers.map((answer, idx) => (
          <button
            key={idx}
            className={`answer-btn ${selectedAnswer === answer ? "selected" : ""}`}
            onClick={() => handleSelect(answer)}
            disabled={selectedAnswer !== null}
          >
            {decodeHTML(answer)}
          </button>
        ))}
      </div>

      {/* Next / Submit Button */}
      <button
        className="next-btn"
        onClick={onNext}
        disabled={selectedAnswer === null}
      >
        {isLastQuestion ? "Submit" : "Next"}
      </button>
    </div>
  );
}
