// Um componente de ordem superior (HOC) é uma função que recebe um componente
// e retorna um novo componente com propriedades ou comportamentos adicionais.

import {useEffect} from "react";

// Função HOC que recebe um componente e retorna um componente com propriedades adicionais
export default function withLogger(WrappedComponent) {
  // retorna um novo componente
  return function (props) {
    // novos comportamentos
    useEffect(() => {
      console.log("Props recebidas:", props);
    }, [props]);
    // Adiciona propriedades adicionais
    return (
      <div>
        <h1>Logged!</h1>
        <WrappedComponent {...props} />
      </div>
    );
  };
}
