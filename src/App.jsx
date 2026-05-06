import './App.css'
import { useState } from "react";

import Cabecalho from './components/Cabecalho.jsx'
import BotaoTema from './components/BotaoTema.jsx'
import Menu from './components/Menu'
import Botao from './components/Botao'
import Card from './components/Card'
import Conteudo from './components/Conteudo'
import Rodape from './components/Rodape'


export default function App() {
  const [dark, setDark] = useState(false)
  const [paginaAtual, setPaginaAtual] = useState("inicial")
  const [aluno, setAluno] = useState("")
const [mostrar, setMostrar] = useState(false)


  const estiloPagina = {
    backgroundColor: dark ? "#111" : "#fff",
    color: dark ? "#fff" : "#111",
    minHeight: "100vh",
    padding: "20px"
  }

  // os codigo
const codigos = {
  adriano: `
// -----------------------
// MUITO FÁCIL
// -----------------------
/*
Somar números de 1 até 100 com for
*/
let soma = 0;

for (let i = 1; i <= 100; i++) {
  soma += i;
}


// -----------------------
// MUITO DIFÍCIL
// -----------------------
/*
Dificuldade em interpretar a lógica e usar while
*/
const fiveletras = [];
let i3 = 0;

while (i3 < nomes.length) {
  if (nomes[i3].length <= 5) {
    fiveletras.push(nomes[i3]);
  }
  i3++;
}


// -----------------------
// AJUDOU A ENTENDER MUITA COISA
// -----------------------
/*
Aprendi a usar split e length para contar palavras
*/
function contarPalavrasTravaLingua(c) {
  return travaLinguas[c].split(" ").length;
}


// -----------------------
// NÃO AJUDOU A ENTENDER NADA
// -----------------------
/*
Confuso entender os índices da lista
*/
const ultimo = numeros.length - 1;
const penultimo = numeros.length - 2;
const antepenultimo = numeros.length - 3;

let novaLista = [ultimo, penultimo, antepenultimo];
`,


  ze: `
// -----------------------
// MUITO FÁCIL
// -----------------------
/*
Explicação do Zé
*/
let exemploez = 5;


// -----------------------
// MUITO DIFÍCIL
// -----------------------
/*
Explicação do Zé
*/
// colocar código aqui


// -----------------------
// AJUDOU A ENTENDER MUITA COISA
// -----------------------
/*
Explicação do Zé
*/
// colocar código aqui


// -----------------------
// NÃO AJUDOU A ENTENDER NADA
// -----------------------
/*
Explicação do Zé
*/
// colocar código aqui
`
}

  return (
    <div style={estiloPagina}>

      <Cabecalho
        setPaginaAtual={setPaginaAtual}
      />

      
      {paginaAtual === "inicial" && (
        <>
       <h1 style={{ color: dark ? "#fff" : "#000" }}>
  Vamos criar nosso projeto aqui
</h1>
          <Menu>
            <Botao nome="Adriano" onClick={() => setAluno("adriano")} />
            <Botao nome="ZÉ" onClick={() => setAluno("ze")} />
          </Menu>

   <button onClick={() => setMostrar(!mostrar)}>
        Ver mensagem
      </button>
{mostrar && <p>Negocio arretado pa fazer viu</p>}


         <Card conteudo={codigos[aluno] || "Selecione um aluno"} />
      
   
        </>


      )}

   
      {paginaAtual === "equipe" && (
        <>
          <h3>Sobre a equipe</h3>
          <Conteudo />
        </>
      )}

      <Rodape />

    
      <div style={{ position: "fixed", top: 20, right: 20 }}>
        <BotaoTema dark={dark} setDark={setDark} />
      </div>

    </div>
  )
}