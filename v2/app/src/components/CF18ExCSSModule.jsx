// CSS Modules: as classes tem escopo local (sem conflitos, melhor para manter)
//- CSS Modules
//	- Um recurso de  CSS scoped
//	- Exclusivo do componente
//	- Nome do arquivo é Componente.module.css
//	- Deve ser importado no componente
//		- import styles from "./Title.module.css"
//		- .... <h1 className={styles.my_title}> .... </h1>

import React from "react";
import styles from "./CF18ExCSSModule.module.css";

const CF18ExCSSModule = () => {
  return <div className={`${styles.tema}`}>CF18ExCSSModule</div>;
};

export default CF18ExCSSModule;
