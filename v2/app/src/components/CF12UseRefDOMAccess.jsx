// useRef Hook
/**
 
useRef retorna um objeto ref mutável cuja propriedade .current é inicializada 
com o argumento passado.
É útil para acessar elementos DOM ou preservar valores entre renderizações.

 */

import React from "react";
import {useRef, useEffect} from "react";

const CF = () => {
  // cria-se uma referência
  const inputRef = useRef();
  const contadorRef = useRef(0);

  useEffect(() => {
    //
    inputRef.current.value = "Algum texto";
    inputRef.current.focus();
  }, []);

  function handleClick() {
    contadorRef.current = contadorRef.current + 1;
    console.log(`clicks: ${contadorRef.current}`);
    // não renderiza o componente
  }

  return (
    <div className="bg-gray-200 py-4 px-4 my-4 flex justify-around items-center">
      <div>
        <input ref={inputRef} />
      </div>
      <div>
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white p-2 m-2 rounded"
        >
          Clique aqui!
        </button>
      </div>
    </div>
  );
};

export default CF;
