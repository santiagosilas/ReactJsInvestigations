# Context API

**useContext**:

- Hook em React para subscrição a um contexto e obtenção do valor atual
- Para propagar valores globais ou evitar o problema de Prop drilling
  (passar dados ao longo de vários componentes)

## Casos de uso comuns

- Alternar entre temas escuro e claro;
- Armazenar dados de usuário logado;
- Configurações globais para acesso em diferentes componentes;

# Passos necessários:

- Passo 1: Criar o contexto com creacteContext
- Passo 2: Criar um componente Provedor do contexto
- Passo 3: Na raiz da aplicação, importar o Provider
- Passo 4: Consumir o contexto

# Passo 1: Criar o contexto com creacteContext

```js
// Arquivo: context\UmContexto.jsx
import {createContext} from "react";
const UmContexto = createContext();
```

# Passo 2: Criar um componente Provedor do contexto (Para definir o modo como o dado vai ser compartilhado)

```js
// Arquivo: context\UmContexto.jsx
const UmContextoProvider = ({children}) => {
  return (
    // O componente Provider do contexto é usado para fornecer o valor do contexto aos componentes filhos.
    <UmContexto.Provider value={{title: "Context Api", subtitle: "asd"}}>
      {children}
    </UmContexto.Provider>
  );
};
export {UmContexto, UmContextoProvider};
```

# Passo 3: Na raiz da aplicação, importar o Provider:

```js
// Arquivo: App.jsx
import {UmContextoProvider} from "./context/UmContexto";
function App() {
  return (
    <>
      {/* Envolve-se a a aplicação com o Provider */}
      <UmContextoProvider>
        <Home />
      </UmContextoxProvider>
    </>
  );
}
```

# Passo 4: Consumir o contexto

```js
import {useContext} from "react";
import {UmContexto} from "../context/UmContexto";
const HeaderPage = () => {
  // Neste componente, usa-se o useContext para obter o valor atual do contexto
  // BannerTitle - para se subscrever ao contexto "BannerTitle" e obter o valor atual
const HeaderPage = () => {
  // Neste componente, usa-se o useContext para obter o valor atual do contexto
  // BannerTitle - para se subscrever ao contexto "BannerTitle" e obter o valor atual
  const {title, subtitle} = useContext(UmContexto);
  console.log(title);
  return (
    <>
      <h2>{title}</h2>
      <h2>{subtitle}</h2>
    </>
  );
};
```
