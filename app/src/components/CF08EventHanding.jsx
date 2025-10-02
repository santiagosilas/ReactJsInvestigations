// O React usa eventos sintéticos que funcionam em todos os navegadores.
// Os manipuladores de eventos geralmente são escritos inline ou referenciados.

// Eventos comuns em React
// - onClick: Dispara quando um elemento é clicado;
// - onChange: Dispara quando o valor de um campo de entrada muda;
// - onSubmit: Dispara quando um forulário é submetido;

import {React, useState} from "react";

const CF08EventHanding = () => {
  const [search, setSearch] = useState("");

  // Named function handler
  const handleClick = () => {
    alert("Clicked!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(search);
  };
  return (
    <div className="bg-gray-200 py-4 px-4 my-4">
      <h2>Lidando com Eventos</h2>
      <div>
        <button
          className="bg-yellow-900 text-white px-3 my-1"
          onClick={() => alert("Clicked!")}
        >
          Click me
        </button>
      </div>
      <div>
        <button
          className="bg-blue-500 text-white px-3"
          onClick={() => {
            handleClick();
          }}
        >
          Click
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Search
          <input
            className="border"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-blue-500 text-white  px-3" type="submit">
            Search
          </button>
        </label>
      </form>
    </div>
  );
};

export default CF08EventHanding;
