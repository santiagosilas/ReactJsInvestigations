import React from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

import {BannerTitle} from "../context/BannerContext";
import {useContext} from "react"; // para consumir o BannerTitle

const HeaderPage = () => {
  // Neste componente, usa-se o useContext para obter o valor atual do contexto
  // BannerTitle - para se subscrever ao contexto "BannerTitle" e obter o valor atual
  const {title} = useContext(BannerTitle);
  console.log(title);
  return (
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h2>{title}</h2>
    </div>
  );
};

export default HeaderPage;
