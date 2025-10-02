import React from "react";
import CF01HelloWorld from "../components/CF01HelloWorld";
import withLogger from "../components/CF14HOCHigherOrderComps";

function UserSite({name, age, email}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Idade: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

const CF14HOCUse = () => {
  // Usage
  const LoggedUserSite = withLogger(UserSite);
  return (
    <div>
      <LoggedUserSite name="Zé" age={33} email="ze@gmail.com" />
    </div>
  );
};

export default CF14HOCUse;
