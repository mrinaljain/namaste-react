import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page </h1>

      <ul className="listing">
        <li>
          <Link to="/counter"> Counter using useState</Link>
        </li>
        <li>
          <Link to="/counter2"> Counter using useReducer</Link>
        </li>
        <li>
          <Link to="/todo"> TODO using useReducer</Link>
        </li>
        <li>
          <Link to="/callback"> React.memo & React.useCallback </Link>
        </li>
        <li>
          <Link to="/useRef">useRef example by input and counter</Link>
        </li>
        <li>
          <Link to="/props">Props inside Functional Component</Link>
        </li>
        <li>
          <Link to="/classComponent">Class Component</Link>
        </li>
        <li>
          <Link to="/controlledInput">Controlled Input</Link>
        </li>
        <li>
          <Link to="/lifecycle">React Component Lifecycle</Link>
        </li>
        <li>
          <Link to="/reduxcounter">Redux Counter App</Link>
        </li>
        <li>
          <Link to="/countryselector">Country Selector Challange</Link>
        </li>
        <li>
          <Link to="/virtualdom">Virtual DOM</Link>
        </li>
        <li>
          <Link to="/importexport">Import / Export</Link>
        </li>
        {/* //renderToString */}
      </ul>
    </div>
  );
}

export default Home;
