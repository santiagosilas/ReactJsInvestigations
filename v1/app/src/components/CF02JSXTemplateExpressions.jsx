import React from "react";

// Fragmentos permitem que você agrupe uma lista
// de filhos sem adicionar nós extras ao DOM.
// via <>..</> ou <React.Fragment>...</React.Fragment>

export default function CF02JSXTemplateExpressions() {
  const name = "Fulano";
  const info = {message: "algum texto"};
  return (
    <>
      <div className="bg-gray-100 py-4 px-4 my-4">
        <h1>Template Expressions</h1>
        <p>Olá, {name}</p>
        <p>{2 + 2}</p>
        <p>{info.message.toLowerCase()}</p>
      </div>
    </>
  );
}
