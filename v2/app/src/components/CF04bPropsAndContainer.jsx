import React from "react";

function CF({title, color, children}) {
  return (
    <div>
      <div
        // As chaves {} são necessárias por estar pondo uma expressão JS dentro do JSX
        className={`bg-${color}-200 border border-${color}-400 text-${color}-700  py-4 px-4 my-4 rounded`}
      >
        <h1 className="text-2xl font-bold">{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default CF;
