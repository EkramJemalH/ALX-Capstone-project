import React from "react";
import { useNavigate } from "react-router-dom";
import generalKnowledgeImg from "../assets/general_knowledge.png";
import scienceAndNatureImg from "../assets/science_and_nature.jpg";
import geographyImg from "../assets/geography.png";
import entertainmentImg from "../assets/entertainment.jpg";
import historyImg from "../assets/history.png"; // make sure this file exists

export default function CategorySelect() {
  const navigate = useNavigate();

const categories = [
  { id: 1, name: "General Knowledge", description: "Fun facts, common knowledge, and everyday trivia.", img: generalKnowledgeImg },
  { id: 2, name: "Science and Nature", description: "Covers biology, chemistry, physics, space, and natural phenomena.", img: scienceAndNatureImg },
  { id: 3, name: "History", description: "Questions about historical events, figures, and timelines.", img: historyImg },
  { id: 4, name: "Geography", description: "Questions about countries, capitals, landmarks, and maps.", img: geographyImg },
  { id: 5, name: "Entertainment: Film", description: "Movie trivia from classics to modern films.", img: entertainmentImg },
];


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
      padding: "2rem 5rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
      backgroundColor:"#76A541",
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: "400",
      marginBottom: "2rem",
      color: "#ffffff",
      fontFamily: "'Ribeye', serif",
  fontStyle: "normal",
    },
    categoryGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "2rem",
      justifyItems: "center",
      width: "100%",
      maxWidth: "1000px",
    },
    categoryCard: {
      backgroundColor: "#76A541",
      borderRadius: "8px",
      padding: "1rem",
      width: "220px",
      height:"350px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      textAlign: "center",
      border:"1px solid #FDF140",
    },
    categoryImg: {
      width: "100%",
      height: "120px",
      objectFit: "cover",
      borderRadius: "6px",
      marginBottom: "2.5rem",
    },
    categoryName: {
      fontSize: "1.2rem",
      marginBottom: "0.9rem",
      textAlign:"center",
    },
    categoryDescription: {
      fontSize: "0.9rem",
      marginBottom: "0.9rem",
    },
    select: {
      width: "100%",
      padding: "0.4rem",
      fontSize: "0.9rem",
      backgroundColor:"#e7e4e4ff",
      color:"#000000",
      fontWeight:"800",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>Quizzy</header>

      <main style={styles.main}>
        <h1 style={styles.heading}>Quiz Categories</h1>

        <div style={styles.categoryGrid}>
          {categories.map((cat) => (
            <div key={cat.id} style={styles.categoryCard}>
              <img src={cat.img} alt={cat.name} style={styles.categoryImg} />
              <div style={styles.categoryName}>{cat.name}</div>
              <div style={styles.categoryDescription}>{cat.description}</div>
              <select style={styles.select}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
