import { useState } from "react";

const estilos = {
  cabecalho: {
    margin: "0px 0px 20px 0px",
    backgroundColor: "#222",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  botao: {
    backgroundColor: "#248",
    color: "#ddd",
    borderRadius: "5px",
    padding: "10px",
    margin: "5px",
  }
}

export default function Cabecalho({ paginaInicial, paginaEquipe, mudarPagina }) {
  const [selecionado, setSelecionado] = useState("inicial")

  return (
    <div style={estilos.cabecalho}>
      <button 
        style={{
          ...estilos.botao,
          backgroundColor: selecionado === "inicial" ? "#248" : "#777"
        }} 
        onClick={() => {
          setSelecionado("inicial")
          mudarPagina(paginaInicial)
        }}
      >
        Página inicial
      </button>

      <button
        style={{
          ...estilos.botao,
          backgroundColor: selecionado === "equipe" ? "#248" : "#777"
        }}  
        onClick={() => {
          setSelecionado("equipe")
          mudarPagina(paginaEquipe)
        }}
      >
        Sobre a equipe
      </button>
    </div>
  )
}