// https://obilo.io/react-cheat-sheet
// No React, os formulários são manipulados usando componentes controlados onde
// os dados do formulário são gerenciados pelo estado do React.

// Formulários no React
// - Uso da tag <form>;
// - Atributo htmlFor para os labels dos inputs;
// - Processamento assíncrono - não se usa o atributo action;
// - Envio do form onSubmit - atenção: preventDefault para parar a submissão;
// Nesta etapa, são feitas validações, envio do form ao servidor, reset do form e etc;

import {useState} from "react";

// Entrada controlada (Controlled input)

const CF = () => {
  const [text, setText] = useState("");
  return (
    <div className="bg-gray-100 py-4 px-4 my-4">
      <div>
        here:
        <input
          className="border border-gray-300 rounded"
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default CF;
