import React from "react";
import ReactDOM from "react-dom/client";

// create react element

var heading = React.createElement("h1", {}, "Mrinal is here");

var root = ReactDOM.createRoot(document.getElementById("root"));

var headingNew = <h1 id="id"> I am new </h1>;

const FunctionalComponent = () => <h1>hello</h1>;

console.log(<FunctionalComponent />);

root.render(<FunctionalComponent />);
