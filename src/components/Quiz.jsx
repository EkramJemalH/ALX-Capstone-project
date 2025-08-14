import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QuestionCard from "./QuestionCard";

export default function Quiz() {
  const navigate = useNavigate();
  const location = useLocation();
  const { categoryId, difficulty } = location.state || {};

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!categoryId || !difficulty) {
      navigate("/category-select"); // redirect if no data
      return;
    }

    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${difficulty}&type=multiple`
        );
        const data = await res.json();
        if (data.response_code !== 0) throw new Error("No questions found");
        setQuestions(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [categoryId, difficulty, navigate]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(prev => prev + 1);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      alert(`Quiz finished! Your score: ${isCorrect ? score + 1 : score} / ${questions.length}`);
      navigate("/category-select");
    }
  };

  if (loading) return <div style={{ color: "#fff" }}>Loading questions...</div>;
  if (error) return <div style={{ color: "#fff" }}>Error: {error}</div>;

  return (
    <div style={{ padding: "2rem", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#76A541" }}>
      <QuestionCard question={questions[currentIndex]} handleAnswer={handleAnswer} />
    </div>
  );
}
