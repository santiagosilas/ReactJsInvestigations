import React from "react";
import {useState} from "react";

const CF = () => {
  // com useState, o estado é mantido entre as renderizações.
  const [flag, setFlag] = useState(false);
  const [likes, setLikes] = useState(0);
  const [history, setHistory] = useState([]);
  return (
    <div className="bg-gray-200 py-4 px-4 my-4 h-48 overflow-y-auto">
      <h2>State Example</h2>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => {
          const newFlag = !flag,
            newLikes = likes + 1;
          setFlag(newFlag);
          setLikes(newLikes);
          setHistory([...history, {flag: newFlag, likes: newLikes}]);
        }}
      >
        Like!
      </button>
      <p>
        {flag ? "On" : "Off"} - {likes} likes!
      </p>
      <p>
        {flag ? "On" : "Off"} - {likes} likes!
      </p>
      <div>
        {/* Curto-circuito lógico */}

        {history.length > 0 && (
          <ul>
            {history.map((item, index) => (
              <li key={index}>
                {item.flag ? "On" : "Off"} - {item.likes} likes!
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CF;
