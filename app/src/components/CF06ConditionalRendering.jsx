import React from "react";

// O React permite renderizar condicionalmente partes da interface do usuário
// usando expressões JavaScript, como instruções if ou operadores ternários.

export default function CF() {
  const flag = true;
  function ConditionalRendering({isLoggedIn}) {
    if (isLoggedIn) return <p>Seja bem vindo!</p>;
    else return <p>Faça o Login</p>;
  }
  return (
    <div className="bg-gray-200 py-4 px-4 my-4 h-48">
      <h2>Renderização Condicional</h2>
      <div>{ConditionalRendering(true)}</div>
      <div>{flag ? <p>Usuário Logado!</p> : <p>Usuário não logado!</p>}</div>
      <div>{flag == true && <p>Usuário Logado!</p>}</div>
    </div>
  );
}
