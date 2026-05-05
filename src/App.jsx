import './App.css'
import { useState } from "react";
import Cabecalho from './components/Cabecalho.jsx'
import BotaoTema from './components/BotaoTema.jsx'
import BotaoContador from './components/BotaoContador.jsx'

export default function App() {
  const [dark, setDark] = useState(false)
  const [contador, setContador] = useState(0)
  const [paginaAtual, setPaginaAtual] = useState("inicial")

  const estiloPagina = {
    backgroundColor: dark ? "#111" : "#fff",
    color: dark ? "#fff" : "#111",
    minHeight: "100vh",
    padding: "20px"
  }

  return (
    <div style={estiloPagina}>

      <Cabecalho
        paginaAtual={paginaAtual}
        setPaginaAtual={setPaginaAtual}
      />

    
      {paginaAtual === "inicial" && <h1>Vamos criar nosso projeto aqui</h1>}
      {paginaAtual === "equipe" && <h3>Sobre a equipe em construção</h3>}

      
      {paginaAtual === "inicial" && (
        <BotaoContador contador={contador} setContador={setContador} />
      )}

    
      <div style={{ position: "fixed", top: 20, right: 20 }}>
        <BotaoTema dark={dark} setDark={setDark} />
      </div>
    </div>
  )
}