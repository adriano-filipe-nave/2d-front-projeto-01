// src/components/BotaoTema.jsx
import React from "react";

export default function BotaoTema({ dark, setDark }) {
  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? "Modo Escuro 🌙" : "Modo Claro ☀️"}
    </button>
  );
}