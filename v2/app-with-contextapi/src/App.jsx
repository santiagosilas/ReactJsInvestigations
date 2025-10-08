import "./App.css";

import {BannerTitleProvider} from "./context/BannerContext";
import Home from "./pages/Home";

function App() {
  return (
    <>
      {/* Envolve-se a a aplicação com o Provider */}
      <BannerTitleProvider>
        <Home />
      </BannerTitleProvider>
    </>
  );
}

export default App;
