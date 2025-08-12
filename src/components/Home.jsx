import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    header: {
      backgroundColor: "#2563eb",
      color: "white",
      textAlign: "center",
      padding: "1rem",
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    main: {
      flex: 1,
      display: "flex",
      padding: "4rem 5rem",
    },
    left: {
      flex: 1,
      paddingRight: "2.5rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    right: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "#9ca3af",
      textAlign: "center",
      userSelect: "none",
    },
    heading: {
      fontSize: "3rem",
      fontWeight: "800",
      marginBottom: "1.5rem",
    },
    paragraph: {
      fontSize: "1.125rem",
      color: "#374151",
    },
    button: {
      marginTop: "2.5rem",
      backgroundColor: "#2563eb",
      color: "white",
      border: "none",
      padding: "0.75rem 2rem",
      fontSize: "1rem",
      fontWeight: "600",
      borderRadius: "0.375rem",
      cursor: "pointer",
    },
    questionMark: {
      fontSize: "9rem",
      fontWeight: "900",
      lineHeight: "1",
    },
    label: {
      marginTop: "1rem",
      fontSize: "1.25rem",
    },
  };

  function handleStart() {
    navigate("/category");
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>Quizzy</header>

      <main style={styles.main}>
        <div style={styles.left}>
          <h1 style={styles.heading}>Welcome to Quizzy!</h1>
          <p style={styles.paragraph}>
            Challenge yourself with fun quizzes on various topics. Test your knowledge and learn new facts!
          </p>
          <button style={styles.button} onClick={handleStart}>
            Start
          </button>
        </div>

        <div style={styles.right}>
          <div style={styles.questionMark}>?</div>
          <div style={styles.label}>Question Mark</div>
        </div>
      </main>
    </div>
  );
}
