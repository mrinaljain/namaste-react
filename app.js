import React from "react";
import ReactDOM from "react-dom/client";

let root = document.getElementById("root");

let span = React.createElement("span", {}, "span text");
const element = React.createElement(
   'h1',
   null,
   'Hello My name is ',
   React.createElement('span', null, 'Mrinal'),
   ' Jain'
);
let headingOne = React.createElement("h1", {}, "Hello world...!");
let headingTwo = React.createElement("h2", {}, "Hello world once again");

let div = React.createElement("div", { className: "halwa", id: "puri" }, [headingOne, headingTwo, element]);

let dom = ReactDOM.createRoot(root);

dom.render(div);