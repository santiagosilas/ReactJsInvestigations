import {Outlet, Link} from "react-router-dom";

import ReactLogo from "../assets/react.svg";
import ViteLogo from "/vite.svg";

export default function PageLayout() {
  return (
    <>
      <nav className="flex justify-between items-center font-semibold bg-slate-200 py-1">
        <div className="flex justify-center items-center font-semibold">
          <Link to="/">
            <h1 className="text-2xl px-4">Snippets</h1>
          </Link>
          <Link to="/">
            <img src={ReactLogo} className="w-[40px]" />
          </Link>
          <Link to="/">
            <img src={ViteLogo} className="w-[40px]" />
          </Link>
        </div>
        <div>
          <div className="px-4">
            <Link to="/" className="px-2">
              Home
            </Link>
            <Link to="/about" className="px-2">
              Sobre
            </Link>
          </div>
        </div>
      </nav>
      {/* Rotas filhas Aqui */}
      <div className="m-2">
        <Outlet />
      </div>
    </>
  );
}
