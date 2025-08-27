export default function Error({ message = "Something went wrong!", onRetry }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#fff4f4", // light red background
      }}
    >
      <div
        style={{
          textAlign: "center",
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          border: "2px solid #f87171", // red border
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#dc2626", // red
            marginBottom: "1rem",
          }}
        >
          ⚠️ Error
        </h2>
        <p
          style={{
            color: "#374151", // dark gray
            marginBottom: "1.5rem",
          }}
        >
          {message}
        </p>
        {onRetry && (
          <button
            onClick={onRetry}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#034527", // blue
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
              transition: "background-color 0.2s ease-in-out",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#3b82f6")}
          >
            Retry
          </button>
        )}
      </div>
    </div>
  );
}
