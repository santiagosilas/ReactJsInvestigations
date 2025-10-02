/* O React Router é uma biblioteca de roteamento padrão para 
aplicativos React que permite a navegação entre visualizações 
em um aplicativo de página única (ref: https://obilo.io/react-cheat-sheet)
*/

// Comando para Instalação
// npm install react-router-dom
// Usa o pacote https://www.npmjs.com/package/react-router-dom

// Arquivo de Configuração de Rotas

import {Routes, Route} from "react-router-dom";
import PageLayout from "./pages/PageLayout";
import PageHome from "./pages/PageHome";
import PageAbout from "./pages/PageAbout";
import PageNotFound from "./pages/PageNotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<PageHome />} />
        <Route path="home" element={<PageHome />} />
        <Route path="about" element={<PageAbout />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}
