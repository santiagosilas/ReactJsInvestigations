// Hooks
//- Hooks -> Ganchos -> Significad de "ficar fisgado";
//- Funções do React para conectar-se (no sentido de anexar uma funcionalidade ao componente) ao ciclo de vida da aplicação;
//- São Recursos para permitir o gerenciamento de estado, ciclo de vida do componente, etc;

// useState
// - Para gerenciar o estado de uma informação
// - Com useState, o estado é mantido entre as renderizações.

import React from "react";
import {useState} from "react";

const CF = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-gray-200 py-4 px-4 my-4 flex justify-around items-center">
      <p className="font-bold">{count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        +
      </button>
      <button
        onClick={() => setCount(0)}
        className="px-4 py-2 bg-gray-500 text-white rounded"
      >
        #
      </button>
    </div>
  );
};

export default CF;

// Atualizando o estado com base no valor anterior
// setCount((prev) => prev + 1);
