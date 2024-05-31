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
      </ul>
    </div>
  );
}

export default Home;