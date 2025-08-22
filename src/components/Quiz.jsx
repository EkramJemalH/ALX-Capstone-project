import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QuestionCard from "./QuestionCard";
import Loader from "./Loader";
import Error from "./Error";
import Result from "./Result"; // ✅ import Result

export default function Quiz() {
  const navigate = useNavigate();
  const location = useLocation();

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
  const [showResult, setShowResult] = useState(false); // ✅ new state

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

    localStorage.setItem("quizCategory", categoryId);
    localStorage.setItem("quizDifficulty", difficulty);

    fetchQuestions();
  }, [categoryId, difficulty, navigate]);

  // ✅ only update score here
  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false); // reset to quiz
    fetchQuestions();
  };

  if (loading) return <Loader />;
  if (error) return <Error message={error} onRetry={restartQuiz} />;
  if (!questions.length)
    return <Error message="No questions to display." onRetry={restartQuiz} />;

  // ✅ Show result page
  if (showResult) {
    return (
      <Result
        score={score}
        totalQuestions={questions.length}
        onPlayAgain={restartQuiz}
        onReturnHome={() => {
          localStorage.removeItem("quizCategory");
          localStorage.removeItem("quizDifficulty");
          navigate("/"); // back to home
        }}
      />
    );
  }

 
  return (
    <div
      style={{
        paddingTop: "1rem", // space from top
    paddingLeft: "0",   // remove left padding
    paddingRight: "0",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#76A541",
      }}
    >
      {/* Top-left nav-style header */}
     <div style={{ width: "100%" }}>
        <div
          style={{
            backgroundColor: "#76A541",
            color: "white",
            padding: "0.5rem 1rem",
            fontSize: "1.5rem",
            fontWeight: "400",
            fontFamily: "'Protest Revolution', sans-serif",
            borderBottom: "2px solid #FDF140",
            textAlign: "left",
          }}
        >
          Quizzy
        </div>
      </div>
      <QuestionCard
        question={questions[currentIndex]}
        handleAnswer={handleAnswer}
        isLastQuestion={currentIndex + 1 === questions.length}
        onNext={() => {
          if (currentIndex + 1 < questions.length) {
            setCurrentIndex((prev) => prev + 1);
          } else {
            setShowResult(true); // ✅ switch to result page
          }
        }}
      />
    </div>
  );
}
