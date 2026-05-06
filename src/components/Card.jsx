export default function Card({ conteudo }) {
  return (
    <div style={{
      marginTop: "20px",
      padding: "15px",
      border: "1px solid #2158f0",
      borderRadius: "8px",
      maxWidth: "600px",
      marginLeft: "auto",
      marginRight: "auto"
    }}>
      <h3>Códigos do aluno</h3>

      <pre style={{ whiteSpace: "pre-wrap" }}>
        {conteudo}
      </pre>
    </div>
  );
}