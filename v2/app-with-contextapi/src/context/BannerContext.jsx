// useContext: Hook em React para subscrição a um contexto e obtenção do valor atual

// Um contexto para armazenar informações específicas sobre algo
import {createContext} from "react";

// Passo 1 - Criar o contexto com creacteContext
// a variável bannerTitle tem tudo que é preciso para criar um contexto
const BannerTitle = createContext();

// Passo 2: Criar um componente Provedor do contexto - Define o modo como o dado vai ser compartilhado
const BannerTitleProvider = ({children}) => {
  return (
    // O componente Provider do contexto é usado para fornecer o valor do contexto aos componentes filhos.
    <BannerTitle.Provider value={{title: "Context Api"}}>
      {children}
    </BannerTitle.Provider>
  );
};
export {BannerTitle, BannerTitleProvider};

// Passo 3: Na raiz da aplicação, importar o BannerTitleProvider - no App.jsx:
//      import {BannerTitleProvider} from "./context/BannerContext";
//      <BannerTitleProvider><+/BannerTitleProvider>

// Passo 4: Consumir o contexto
