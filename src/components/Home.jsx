import React from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();

  const styles = {
    container: {
      minHeight: "100vh",
      width:"100%",
      margin:0,
      padding:0,
      display: "flex",
      flexDirection: "column",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    header: {
      backgroundColor: "#76A541",
      borderBottom:"2px solid #FDF140",
      color: "white",
      textAlign: "left",
      padding: "1rem",
      paddingLeft:"2rem",
      fontSize: "1.5rem",
      fontWeight: "400",
      fontFamily: "'Protest Revolution', sans-serif",
      fontStyle: "normal",
    },
    main: {
      flex: 1,
      display: "flex",
      padding: "4rem 5rem",
      backgroundColor:"#76A541",
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
      color: "#ffffff",
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
      color: "#ffffff",
    },
    button: {
      marginTop: "2.5rem",
      backgroundColor: "#034527",
      color: "white",
      border: "none",
      padding: "0.75rem 2rem",
      fontSize: "1rem",
      fontWeight: "600",
      borderRadius: "0.375rem",
      cursor: "pointer",
      fontFamily: "'Ribeye', serif",
  fontWeight: "400",
  fontStyle: "normal",
    },
    questionMark: {
      fontSize: "32rem",
      fontWeight: "900",
      lineHeight: "1",
     color: "#034527",
  textShadow: "6px 6px 0 #FDF140", 
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
      <header className="home-header" style={styles.header}>Quizzy</header>

      <main className="home-main" style={styles.main}>
        <div className="home-left" style={styles.left}>
          <h1 className="home-heading" style={styles.heading}>Welcome to Quizzy</h1>
          <p className="home-p" style={styles.paragraph}>
            Test your knowledge across different topics with Quizzy .
Whether you're learning something new or just want to challenge yourself, each question helps you sharpen your mind .
<br></br>
one click at a time!

          </p>
          <button style={styles.button} onClick={handleStart}>
            Begin Quiz
          </button>
        </div>

        <div className="home-right" style={styles.right}>
          <div className="home-question" style={styles.questionMark}>?</div>
        </div>
      </main>
    </div>
  );
}
