// O Hook `useEffect` no React é usado para lidar com efeitos colaterais
// em componentes funcionais, como busca de dados, assinaturas ou alteração manual do DOM.
// Ele é executado após cada renderização por padrão, incluindo a renderização inicial.
// Esse comportamento o torna útil para executar a lógica que deve ocorrer após a renderização
// de um componente. O primeiro argumento é uma função (o efeito) e o segundo é um array de dependências opcional. Se nenhuma dependência for fornecida, o efeito é executado após cada renderização. É essencial entender essa estrutura básica antes de nos aprofundarmos em usos mais avançados.

// useEffect é usado para executar efeitos colaterais em componentes funcionais,
// como buscar dados, configurar assinaturas ou alterar manualmente o DOM.

import React from "react";
import {useState, useEffect} from "react";

const CF = () => {
  const [count, setCount] = useState(0);

  // Effect
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  // Effect com array de dependências
  useEffect(() => {
    console.log(`Count: ${count}`);
  }, [count]);

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
