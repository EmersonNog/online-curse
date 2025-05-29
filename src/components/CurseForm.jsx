import { useState } from "react";
import emailjs from "@emailjs/browser";

export function CurseForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("gonorreia");

  const curseLabels = {
    gonorreia: "Gonorreia",
    dedinho: "Bater o dedinho na quina todo dia",
    corno: "Ser corno",
    termino: "Terminar pelo WhatsApp",
    chulé: "Chulé eterno",
    zica: "Zica reversa (nada dá certo nem errado)",
    caipora: "Perseguir caipora em sonhos",
    reclamacao: "Reclamar e ninguém ouvir",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      curse_type: curseLabels[type],
    };

    emailjs
      .send(
        "service_6zy3tg3",
        "template_z4pny2s",
        templateParams,
        "GjBKk3aZPzypZGuFk"
      )
      .then(() => {
        alert(`Maldição enviada para ${name}`);
        setName("");
        setEmail("");
        setType("gonorreia");
      })
      .catch((error) => {
        console.error("Erro:", error);
        alert("Erro ao enviar maldição.");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "30px",
        backgroundColor: "#111",
        border: "1px solid #550000",
        borderRadius: "10px",
        boxShadow: "0 0 20px #55000066",
        color: "#ddd",
        fontFamily: "'Georgia', serif",
        animation: "fadeIn 2s ease-in",
      }}
    >
      <input
        type="text"
        placeholder="Nome do alvo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#222",
          color: "#fff",
        }}
      />

      <input
        type="email"
        placeholder="Email do alvo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#222",
          color: "#fff",
        }}
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#222",
          color: "#fff",
        }}
      >
        <option value="gonorreia">Gonorreia</option>
        <option value="dedinho">Bater o dedinho na quina todo dia</option>
        <option value="corno">Ser corno</option>
        <option value="termino">Terminar pelo WhatsApp</option>
        <option value="chulé">Chulé eterno</option>
        <option value="zica">Zica reversa (nada dá certo nem errado)</option>
        <option value="sapinho">Pegar sapinho</option>
        <option value="reclamacao">Reclamar e ninguém ouvir</option>
      </select>

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#cc0000",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          textTransform: "uppercase",
          boxShadow: "0 0 10px #cc0000aa",
          animation: "pulse 2s infinite",
        }}
      >
        Enviar Maldição
      </button>
    </form>
  );
}
