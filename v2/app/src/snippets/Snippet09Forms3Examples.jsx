import React from "react";
import {SearchForm, RegistrationForm} from "../components/CF09Form3Examples";

const Snippet = () => {
  return (
    <>
      <h1>Formulários em React</h1>
      <SearchForm />
      <RegistrationForm
        user={{
          name: "José da Silva",
          bio: "Descrição ...",
          category: "teacher",
          active: false,
        }}
        onRegistrationSubmit={(params) => {
          console.log("params", params);
        }}
      />
    </>
  );
};

export default Snippet;
