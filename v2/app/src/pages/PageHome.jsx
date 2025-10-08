import React from "react";

import Snippet from "../snippets/Snippet";
import Snippet01 from "../snippets/Snippet01";
import Snippet02 from "../snippets/Snippet02";
import Snippet03 from "../snippets/Snippet03ContainerChildren";
import Snippet04a from "../snippets/Snippet04aPropsSimple";
import Snippet04b from "../snippets/Snippet04bPropsAndContainer";
import Snippet05a from "../snippets/Snippet05UseStateEx1";
import Snippet05b from "../snippets/Snippet05UseStateEx2";
import Snippet06 from "../snippets/Snippet06ConditionalRendering";
import Snippet07a from "../snippets/Snippet07aListsAndKeys";
import Snippet07b from "../snippets/Snippet07bListsAndKeys";
import Snippet08 from "../snippets/Snippet08EventHanding";
import Snippet09a from "../snippets/Snippet09Forms1ControlledInput";
import Snippet09b from "../snippets/Snippet09Forms2FormSubmit";
import Snippet09c from "../snippets/Snippet09Forms3Examples";
import Snippet10 from "../snippets/Snippet10HookUseEffect";

import {
  ClassComp0,
  ClassComp1,
  ClassComp2,
} from "../components/CF11ClassComponent";

import CF12UseRefDOMAccess from "../components/CF12UseRefDOMAccess";

import CF14HOCUse from "../components/CF14HOCUse";

import {LoginButton, LoginForm} from "../components/CF15UseNavigate";

import StateLiftEx1 from "../components/CF16StateLiftSyncAmongSiblings";

import CF17ExUsingOwnCSS from "../components/CF17ExUsingOwnCSS";

import CF18ExUsingCSSModule from "../components/CF18ExCSSModule";

import CF19UsingCustomHooks from "../components/CF19UsingCustomHooks";

const PageHome = () => {
  return (
    <div>
      <h1>Snippets</h1>
      <Snippet01 />
      <Snippet02 />
      <Snippet03 />
      <Snippet04a infoTitle="Props Simple" infoColor="slate" />
      <Snippet04b infoTitle="Props e Container" infoColor="slate" />
      <Snippet05a />
      <Snippet05b />
      <Snippet06 />
      <Snippet07a />
      <Snippet07b />
      <Snippet08 />
      <Snippet09a />
      <Snippet09b />
      <Snippet09c />
      <Snippet10 />
      <Snippet title="Componentes de Classe">
        <ClassComp0 />
      </Snippet>
      <Snippet title="Componentes de Classe">
        <ClassComp1 />
      </Snippet>
      <Snippet title="Componentes de Classe">
        <ClassComp2 />
      </Snippet>

      <Snippet title="CF12UseRefDOMAccess">
        <CF12UseRefDOMAccess />
      </Snippet>

      <Snippet title="HOC">
        <CF14HOCUse />
      </Snippet>

      <Snippet title="UseNavigate">
        <LoginButton />
        <LoginForm />
      </Snippet>

      <Snippet title="State Lift">
        <StateLiftEx1 />
      </Snippet>

      <Snippet title="Own CSS">
        <CF17ExUsingOwnCSS />
        <br />
        <div className="tema">Temp Comp</div>
      </Snippet>

      <Snippet title="Own CSS">
        <CF18ExUsingCSSModule />
      </Snippet>

      <Snippet title="Custom Hooks">
        <CF19UsingCustomHooks />
      </Snippet>
    </div>
  );
};

export default PageHome;
