export default function BotaoContador({ contador, setContador }) {
  return (
    <button
      onClick={() => setContador(contador + 1)}
      style={{
        backgroundColor: contador % 2 === 0 ? "lightblue" : "lightgreen",
        color: "#111",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}
    >
      Você clicou {contador} {contador === 1 ? "vez" : "vezes"}
    </button>
  );
}