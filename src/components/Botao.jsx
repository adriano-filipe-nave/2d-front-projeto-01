export default function Botao({ nome, onClick }) {
  return (
    <button onClick={onClick}>
      {nome}
    </button>
  );
}