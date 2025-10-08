import {useState} from "react";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (text) => {
    setSearch(text);
  };
  const handleSubmit = (e) => {
    // Impede o comportamento padrão do evento submit em formulários
    // (que seria o carregamento da página inteira)
    e.preventDefault();
    console.log("Envio do form ...", search);
  };
  return (
    <div className="bg-gray-100 py-4 px-4 my-4">
      <form onSubmit={handleSubmit}>
        {/* 
         Variação do form SearchForm3, em que se ltera o campo em uma função
         handleSearch, em vez de da função setSearch
        */}
        <label htmlFor="busca">
          <span>Busca: </span>
          <input
            type="text"
            name="busca"
            className="px-4 py-2 border rounded"
            // Função inline para alterar o valor do state com o método set
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="O que procura ?"
          />
        </label>
        <input
          type="submit"
          value="Enviar"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        />
      </form>
      {<p>{search}</p>}
    </div>
  );
};

// Exemplo de form com campo Input:Text, e TextArea e Select and Radio
const RegistrationForm = ({user, onRegistrationSubmit}) => {
  const categories = [
    {code: "student", info: "Estudante"},
    {code: "teacher", info: "Professor"},
    {code: "developer", info: "Desenvolvedor"},
    {code: "manager", info: "Gerente"},
  ];
  const [name, setName] = useState(user ? user.name : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [category, setCategory] = useState(user ? user.category : "");
  const [active, setActive] = useState(user ? user.active : false);
  const handleName = (newName) => {
    setName(newName);
  };
  const handleBio = (newBio) => {
    setBio(newBio);
  };
  const handleCategory = (newCategory) => {
    setCategory(newCategory);
  };
  const handleActive = (isActive) => {
    setActive(isActive);
  };
  const handleSubmit = (e) => {
    // Controlled Inputs (Campos Controlados)
    // Útil em forms de edição quando os dados são fornecidos para carregamento
    // IGuala-se ao valor (value) do state (definido com useState)
    e.preventDefault();
    console.log("Envio do form ...", name, bio, category, active);

    onRegistrationSubmit({name, bio, category, active});

    // Após o processamento, limpa-se os forms
    //setName("");
    //setBio("");
  };

  return (
    <div className="bg-gray-100 py-4 px-4 my-4">
      <form onSubmit={handleSubmit} className="bg-blue-100 p-2 mt-4">
        {/* 
         Variação do form SearchForm3, em que se ltera o campo em uma função
         handleSearch, em vez de da função setSearch
        */}
        <label className="block mb-1">
          <span>Name: </span>
          <input
            className="px-4 py-2 border rounded"
            type="text"
            name="name"
            value={name}
            // Função inline para alterar o valor do state com o método set
            onChange={(e) => handleName(e.target.value)}
            placeholder="Qual o seu nome ?"
          />
        </label>
        <label className="block mb-1">
          <span>Bio:</span>
          <textarea
            className="px-4 py-2 border rounded"
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>

        <label className="block mb-1">
          <span>Category:</span>
          <select
            className="px-4 py-2 border rounded"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            value={category || ""}
          >
            {categories.map((t) => (
              <option key={t.code} value={t.code}>
                {t.info}
              </option>
            ))}
          </select>
        </label>

        <div>
          <label className="block mb-1">
            <input
              className="w-4 h-4"
              onChange={(e) => setActive(e.target.value === "true")}
              value={"true"}
              type="radio"
              name="active"
              id="activeRadio"
              checked={active == true}
            />
            Active
          </label>
          <label className="ml-2">
            <input
              className="w-4 h-4"
              onChange={(e) => setActive(e.target.value === "true")}
              value={"false"}
              type="radio"
              name="active"
              id="activeRadio"
              checked={active == false}
            />
            Archived
          </label>
        </div>

        <input
          className="px-4 py-2 bg-blue-500 text-white rounded"
          type="submit"
          value="Enviar"
        />
      </form>
      {<p>{name}</p>}
    </div>
  );
};

export {SearchForm, RegistrationForm};
