import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page </h1>

      <div className="listing flex flex-col gap-5">
        <Link to="/counter">Counter using useState</Link>

        <Link to="/counter2"> Counter using useReducer</Link>

        <Link to="/todo"> TODO using useReducer</Link>

        <Link to="/callback"> React.memo & React.useCallback </Link>

        <Link to="/useRef">useRef example by input and counter</Link>

        <Link to="/props">Props inside Functional Component</Link>

        <Link to="/classComponent">Class Component</Link>

        <Link to="/controlledInput">Controlled Input</Link>

        <Link to="/lifecycle">React Component Lifecycle</Link>

        <Link to="/reduxcounter">Redux Counter App</Link>

        <Link to="/countryselector">Country Selector Challange</Link>

        <Link to="/virtualdom">Virtual DOM</Link>

        <Link to="/importexport">Import / Export</Link>

        <Link to="/hooks">React Hooks</Link>

        <Link to="/childprops">Children Props in React</Link>

        <Link to="/portal">Portals in react</Link>

        <Link to="/todoapp">TODO App</Link>
        <Link to="/reactcontext">React Context API</Link>
        <Link to="/lazycomponent">Lazy Component</Link>
        <Link to="/hocomponent">Higher Order Component</Link>
        <Link to="/timer">Timer</Link>

        {/* //renderToString */}
      </div>
    </div>
  );
}

export default Home;
