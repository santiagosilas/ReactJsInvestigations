import React from "react";

function CF04aPropsSimple({titulo, color}) {
  return (
    <div
      // As chaves {} são necessárias por estar pondo uma expressão JS dentro do JSX
      className={`bg-${color}-200 border border-${color}-400 text-${color}-700  py-4 px-4 my-4 rounded`}
    >
      {titulo}
    </div>
  );
}

export default CF04aPropsSimple;
