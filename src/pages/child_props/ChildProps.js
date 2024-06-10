import React from "react";
import Children from "./Children";

function ChildProps() {
  return (
    <div className="bg-gray-300 w-[300] h-[300] p-3">
      <h2>Parent Section</h2>
      <Children>
        <p className="text-green-400">
          This <b>paragraph tag</b> was sent from parent to the child as a prop
        </p>
      </Children>
    </div>
  );
}

export default ChildProps;
