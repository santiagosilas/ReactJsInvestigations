//Lifecycle Methods in Class Components

// Métodos de Ciclo de Vida em Componentes de Classe
// Componentes de classe usam métodos de ciclo de vida como componentDidMount,
// componentDidUpdate e componentWillUnmount para lidar com efeitos colaterais.

import React from "react";

class ClassComp0 extends React.Component {
  render() {
    const par = <p>Parágrafo</p>;
    return (
      <div className="bg-gray-200 py-4 px-4 my-4 flex justify-around items-center">
        <h2>Exemplo de Componente Classe</h2>
        {par}
      </div>
    );
  }
}

// componente DidMount
class ClassComp1 extends React.Component {
  componentDidMount() {
    console.log("Mounted");
  }
  render() {
    return (
      <div className="bg-gray-200 py-4 px-4 my-4 flex justify-around items-center">
        <p>Class Component - Lifecycle</p>
      </div>
    );
  }
}

// componente DidUpdate
class ClassComp2 extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.count !== this.props.count) {
      console.log("Count updated");
    }
  }
  render() {
    return (
      <div className="bg-gray-200 py-4 px-4 my-4 flex justify-around items-center">
        <p>Class Component - {this.props.count}</p>
      </div>
    );
  }
}

export {ClassComp0, ClassComp1, ClassComp2};
