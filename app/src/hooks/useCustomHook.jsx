// https://obilo.io/react-cheat-sheet
// Custom Hooks
// Hooks personalizados permitem que você extraia a lógica do componente em
// funções reutilizáveis​ iniciado com 'use'.

import {useState} from "react";

// useInput custom hook
export default function useLowerCaseInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) =>
    setValue(e.target.value.toLowerCase().split(" ").join(""));
  return {value, onChange: handleChange};
}
