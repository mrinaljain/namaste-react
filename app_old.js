import React from "react";
import ReactDOM from "react-dom/client";

// STEP 1. Find the root element on the DOM where you want to run the React library 
let root = document.getElementById("root");

// STEP 2. Create a HTML element dynamically and store it in a var
// createElement takes 2 
let span = React.createElement("span", {id:"halwa", key:"ij"}, "span text");

const element = React.createElement(
  "h1",
  null,
  "Hello My name is ",
  React.createElement("span", null, "Mrinal"),
  " Jain"
);
let headingOne = React.createElement("h1", {}, "Hello world...!");
let headingTwo = React.createElement("h2", {}, "Hello world once again");

// Example for createElement
let div = React.createElement("div", { className: "halwa", id: "puri" }, [
  headingOne,
  headingTwo,
  element,
]);

// STEP : Tell react about your react ROOT on DOM
let dom = ReactDOM.createRoot(root);

dom.render(span);




var image = React.createElement("img");