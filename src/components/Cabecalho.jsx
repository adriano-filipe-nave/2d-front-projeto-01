import { useState } from "react";

export default function Cabecalho({ setPaginaAtual }) {
  const [selecionado, setSelecionado] = useState("inicial");

  return (
    <div>
      <button
        onClick={() => {
          setSelecionado("inicial");
          setPaginaAtual("inicial");
        }}
      >
        Página inicial
      </button>

      <button
        onClick={() => {
          setSelecionado("equipe");
          setPaginaAtual("equipe");
        }}
      >
        Sobre a equipe
      </button>
    </div>
  );
}