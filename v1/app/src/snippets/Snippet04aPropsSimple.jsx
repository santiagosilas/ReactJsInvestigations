import React from "react";
import CF04aPropsSimple from "../components/CF04aPropsSimple";

const Snippet04aPropsSimple = (props) => {
  const {infoTitle, infoColor} = props;
  return (
    <>
      <CF04aPropsSimple titulo={infoTitle} color={infoColor} />
    </>
  );
};

export default Snippet04aPropsSimple;
