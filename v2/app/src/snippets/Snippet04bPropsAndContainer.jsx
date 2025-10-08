import React from "react";
import CF from "../components/CF04bPropsAndContainer";

const Snippet = (props) => {
  const {infoTitle, infoColor} = props;
  return (
    <>
      <CF title={infoTitle} color={infoColor}>
        {/* Ctrl + K +C  */}
        <p>algum texto aqui {infoTitle}</p>
        <p>mais algum texto aqui</p>
      </CF>
    </>
  );
};

export default Snippet;
