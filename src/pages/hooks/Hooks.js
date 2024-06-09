import React from "react";
import { Link, Outlet } from "react-router-dom";

function Hooks() {
  return (
    <div>
      <ul className="flex justify-between w-full">
        <li>
          <Link to="usememo"> useMemo</Link>
        </li>
        <li>
          <Link to="usecallback"> useCallback</Link>
        </li>
        <li>
          <Link to="usestate"> useState</Link>
        </li>
        <li>
          <Link to="useeffect"> useEffect</Link>
        </li>
        <li>
          <Link to="useref">useRef</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Hooks;
