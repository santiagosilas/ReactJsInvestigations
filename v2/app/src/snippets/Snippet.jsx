import React from "react";

const CFSnippet = ({title, children}) => {
  return (
    <div className="bg-slate-300 py-4 px-4 my-4">
      <h2 className="font-semibold text-2xl py-2 text-gray-800">{title}</h2>
      {children}
    </div>
  );
};

export default CFSnippet;
