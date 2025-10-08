import {useState} from "react";

const DisplayInfo = ({content}) => {
  return <div>{content || "Select an option."} </div>;
};

const ChangeInfo = ({handleInfo}) => {
  return (
    <div>
      <button
        className="bg-blue-500 text-white px-3"
        onClick={() => handleInfo("A")}
      >
        A
      </button>
      <button
        className="bg-blue-500 text-white px-3"
        onClick={() => handleInfo("B")}
      >
        B
      </button>
      <button
        className="bg-blue-500 text-white px-3"
        onClick={() => handleInfo("C")}
      >
        C
      </button>
    </div>
  );
};

/*
- State Lift: Para elevar o estado de um componente filho para um componente pai
- Conceito usado quando dois ou mais componentes precisam compartilhar ou sincronizar dados
*/
const StateLiftEx1 = () => {
  const [info, setInfo] = useState("");
  return (
    <div>
      <DisplayInfo content={info} />
      <ChangeInfo handleInfo={setInfo} />
    </div>
  );
};

export default StateLiftEx1;
