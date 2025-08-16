import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import generalKnowledgeImg from "../assets/general_knowledge.png";
import scienceAndNatureImg from "../assets/science_and_nature.jpg";
import geographyImg from "../assets/geography.png";
import entertainmentImg from "../assets/entertainment.jpg";
import historyImg from "../assets/history.png";

export default function CategorySelect() {
  const navigate = useNavigate();
  const [selectedDifficulty, setSelectedDifficulty] = useState({});

  const categories = [
    { id: 1, name: "General Knowledge", description: "Fun facts, common knowledge, and everyday trivia.", img: generalKnowledgeImg },
    { id: 2, name: "History", description: "Questions about historical events, figures, and timelines.", img: historyImg },
    { id: 3, name: "Geography", description: "Questions about countries, capitals, landmarks, and maps.", img: geographyImg },
    { id: 4, name: "Science and Nature", description: "Covers biology, chemistry, physics, space, and natural phenomena.", img: scienceAndNatureImg },
    { id: 5, name: "Entertainment: Film", description: "Movie trivia from classics to modern films.", img: entertainmentImg },
  ];

  const handleDifficultyChange = (categoryId, value) => {
    setSelectedDifficulty(prev => ({ ...prev, [categoryId]: value }));
  };

  const startQuiz = (categoryId) => {
    const difficulty = selectedDifficulty[categoryId];
    if (!difficulty) {
      alert("Please select a difficulty level first!");
      return;
    }
    navigate("/quiz", { state: { categoryId, difficulty } });
  };

  const styles = {
    container: {
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    header: {
      backgroundColor: "#76A541",
      color: "white",
      padding: "1rem 2rem",
      fontSize: "1.5rem",
      fontWeight: "400",
      fontFamily: "'Protest Revolution', sans-serif",
      borderBottom: "2px solid #FDF140",
    },
    main: {
      flex: 1,
      padding: "2rem 2rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
      backgroundColor: "#76A541",
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: "400",
      marginBottom: "2rem",
      color: "#ffffff",
      fontFamily: "'Ribeye', serif",
      fontStyle: "normal",
      textAlign: "center",
    },
    categoryGrid: {
      width: "100%",
      maxWidth: "1000px",
      gap: "2rem",
    },
    categoryCard: {
      backgroundColor: "#76A541",
      borderRadius: "8px",
      padding: "1rem",
      width: "100%",
      maxWidth: "220px",
      height: "auto",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      textAlign: "center",
      border: "1px solid #FDF140",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    categoryImg: {
      width: "100%",
      height: "120px",
      objectFit: "cover",
      borderRadius: "6px",
      marginBottom: "1rem",
    },
    categoryName: {
      fontSize: "1.2rem",
      marginBottom: "0.5rem",
      textAlign: "center",
      fontWeight: "700",
    },
    categoryDescription: {
      fontSize: "0.9rem",
      marginBottom: "0.5rem",
    },
    select: {
      width: "100%",
      padding: "0.4rem",
      fontSize: "0.9rem",
      backgroundColor: "#e7e4e4ff",
      color: "#000000",
      fontWeight: "800",
    },
    startBtn: {
      marginTop: "0.5rem",
      padding: "0.4rem 0.6rem",
      backgroundColor: "#034527",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontWeight: "700",
      fontFamily: "'Ribeye', serif",
      fontStyle: "normal",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>Quizzy</header>

      <main style={styles.main}>
        <h1 style={styles.heading}>Quiz Categories</h1>

        <div style={styles.categoryGrid} className="category-grid">
          {categories.map((cat, index) => (
            <div key={cat.id} className={`category-card card-${index + 1}`} style={styles.categoryCard}>
              <img src={cat.img} alt={cat.name} style={styles.categoryImg} />
              <div style={styles.categoryName}>{cat.name}</div>
              <div style={styles.categoryDescription}>{cat.description}</div>
              <select
                style={styles.select}
                value={selectedDifficulty[cat.id] || ""}
                onChange={(e) => handleDifficultyChange(cat.id, e.target.value)}
              >
                <option value="">Difficulty level</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
              <button style={styles.startBtn} onClick={() => startQuiz(cat.id)}>
                Start
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
