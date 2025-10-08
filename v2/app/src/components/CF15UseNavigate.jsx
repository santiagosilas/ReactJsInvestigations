// O hook useNavigate permite navegação programática no React Router v6+.

// Navigating programmatically
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function LoginButton() {
  const navigate = useNavigate();
  return (
    <button
      className="bg-blue-500 text-white px-3"
      onClick={() => navigate("/about")}
    >
      Sobre
    </button>
  );
}

// Redirecionamento após o login
function LoginForm() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleSubmit = () => {
    // Simula o login bem sucedido
    navigate("/about");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border border-gray-300 rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-3" type="submit">
        Submit
      </button>
    </form>
  );
}

export {LoginButton, LoginForm};
