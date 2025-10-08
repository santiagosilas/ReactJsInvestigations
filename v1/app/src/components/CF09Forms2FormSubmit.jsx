// https://obilo.io/react-cheat-sheet
// No React, os formulários são manipulados usando componentes controlados onde
// os dados do formulário são gerenciados pelo estado do React.

import {useState} from "react";

// Entrada controlada (Controlled input)

const CF = () => {
  const [text, setText] = useState("");
  return (
    <div className="bg-gray-100 py-4 px-4 my-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(text);
        }}
      >
        <input
          className="border border-gray-300 rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CF;
