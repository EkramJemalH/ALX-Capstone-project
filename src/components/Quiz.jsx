import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QuestionCard from "./QuestionCard";

export default function Quiz() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get category & difficulty from state or fallback to localStorage
  let { categoryId, difficulty } = location.state || {};
  if (!categoryId || !difficulty) {
    categoryId = localStorage.getItem("quizCategory");
    difficulty = localStorage.getItem("quizDifficulty");
  }

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuestions = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=5&category=${categoryId}&difficulty=${difficulty}&type=multiple`
      );
      const data = await res.json();

      if (!data.results || data.results.length === 0) {
        setError("No questions available for this category/difficulty.");
        setQuestions([]);
        return;
      }

      setQuestions(data.results);
    } catch (err) {
      setError("Failed to fetch questions. Please try again.");
      setQuestions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!categoryId || !difficulty) {
      navigate("/category-select");
      return;
    }

    // Save current quiz selection
    localStorage.setItem("quizCategory", categoryId);
    localStorage.setItem("quizDifficulty", difficulty);

    fetchQuestions();
  }, [categoryId, difficulty, navigate]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    fetchQuestions();
  };

  if (loading) {
    return <div style={{ color: "#fff" }}>Loading questions...</div>;
  }

  if (error) {
    return (
      <div style={{ color: "#fff", textAlign: "center" }}>
        {error}
        <button
          onClick={restartQuiz}
          style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
        >
          Retry
        </button>
      </div>
    );
  }

  if (!questions.length) {
    return (
      <div style={{ color: "#fff", textAlign: "center" }}>
        No questions to display.
        <button
          onClick={restartQuiz}
          style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
        >
          Retry Quiz
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "2rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#76A541",
      }}
    >
      <QuestionCard
  question={questions[currentIndex]}
  handleAnswer={handleAnswer}
  isLastQuestion={currentIndex + 1 === questions.length}
  onNext={() => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      alert(`Quiz finished! Your score: ${score} / ${questions.length}`);
      localStorage.removeItem("quizCategory");
      localStorage.removeItem("quizDifficulty");
      navigate("/category-select");
    }
  }}
/>

      {currentIndex + 1 === questions.length && (
        <button
          onClick={restartQuiz}
          style={{
            marginTop: "2rem",
            padding: "0.5rem 1rem",
            backgroundColor: "#034527",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Restart Quiz
        </button>
      )}
    </div>
  );
}
