export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f3f4f6",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          border: "2px solid #d1d5db",
          borderRadius: "12px",
          background: "white",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
       
        <div
          style={{
            width: "48px",
            height: "48px",
            border: "4px solid #034527",
            borderTop: "4px solid transparent",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        ></div>

        
        <p
          style={{
            marginTop: "1rem",
            fontSize: "1.1rem",
            fontWeight: 600,
            color: "#4b5563",
            animation: "pulse 1.5s infinite",
          }}
        >
          Loading...
        </p>

        
        <style>
          {`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.5; }
            }
          `}
        </style>
      </div>
    </div>
  );
}
