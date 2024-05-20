let root = document.getElementById("root");


let headingOne = React.createElement("h1", {}, "Hello world...!");
let headingTwo = React.createElement("h2", {}, "Hello world once again");

let div = React.createElement("div", { class: "halwa", id: "puri" }, [ headingOne, headingTwo,]);
console.log(div);
let dom = ReactDOM.createRoot(root);

dom.render(div);