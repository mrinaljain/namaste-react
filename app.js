import React from "react";
import ReactDOM from "react-dom/client";

const rootDiv = document.getElementById("root");

const rootElement = ReactDOM.createRoot(rootDiv);

// React Element
const headerElement = <h1> Hello World..! I am Inevitable</h1>;

// React Component
const HeaderComponent = function () {
  return <h1>This is a React Componenet in multiple lines of code </h1>;
};

//! component composition
const WebsiteBody = () => {
  return (
    <div>
      {/* Three ways of rendering componnents */}
      <HeaderComponent></HeaderComponent>
      {HeaderComponent()}
      <HeaderComponent />
      <p> Paragraph belo composition component </p>
    </div>
  );
};

//! rendering react element
// rootElement.render(headerElement);

//! rendering react component
rootElement.render(<WebsiteBody />);

//! JSX work flow
// JSX => Babel converts to React.creatElement => Becomes React Element(which is a Javascript Object) => Rendered as a HTML element by react DOM
