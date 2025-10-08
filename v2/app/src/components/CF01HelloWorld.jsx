// Componentes são trechos de código independentes e
// reutilizáveis ​​que retornam
// um elemento React. Eles podem ser funcionais ou
// baseados em classes.

// Componente Funcional
export default function CF01HelloWorld() {
  // Algum comentário
  return (
    <div className="bg-gray-100 py-4 px-4 my-4">
      {/* Um comentário JSX */}
      <h1>Hello World 2</h1>
      {/* Um comentário JSX */}
      <p id="vermelho">Um texto qualquer</p>
      <p className="verde">Outro texto qualquer</p>
    </div>
  );
}
