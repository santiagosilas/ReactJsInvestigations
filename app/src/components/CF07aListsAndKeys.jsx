const CF = () => {
  const names = ["A", "B", "C"];
  return (
    <div className="bg-gray-100 py-4 px-4 my-4">
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CF;

// Mapeamento com índice como chave (não recomendado)
//{
//  names.map((name, index) => <li key={index}>{name}</li>);
//}
