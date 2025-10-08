import {useState} from "react";

const CF = () => {
  const cidades = [
    {codigo: 1, nome: "Aracati"},
    {codigo: 2, nome: "Russas"},
    {codigo: 3, nome: "Jaguaruana"},
    {codigo: 4, nome: "Fortaleza"},
  ];
  const [codigoCidadeSelec, setCidadeSelec] = useState(2);
  const cidadeSelec = cidades.find((c) => {
    return c.codigo == parseInt(codigoCidadeSelec);
  });
  return (
    <div className="bg-gray-200 py-4 px-4 my-4 h-48">
      <h2>Map List And Keys</h2>
      <select
        value={codigoCidadeSelec}
        onChange={(e) => {
          setCidadeSelec(e.target.value);
        }}
      >
        <option value="">Selecione a cidade</option>
        {cidades.map((cidade) => (
          <option key={cidade.codigo} value={cidade.codigo}>
            {cidade.nome}
          </option>
        ))}
      </select>
      {cidadeSelec != undefined ? (
        <p>{cidadeSelec.nome}</p>
      ) : (
        <p>Selecione a cidade.</p>
      )}
    </div>
  );
};
export default CF;
