import { CurseForm } from "../components/CurseForm";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#cc0000",
        fontFamily: "Georgia, serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          marginBottom: "20px",
          fontSize: "2rem",
          textShadow: "0 0 10px #cc0000aa",
        }}
      >
        🔮 Maldição Online
      </h1>

      <CurseForm />
    </div>
  );
}
