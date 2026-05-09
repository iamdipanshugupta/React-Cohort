import React from "https://esm.sh/react@19.0.0";
import ReactDOM from "https://esm.sh/react-dom@19.0.0/client";

const App = () => {
  return React.createElement(
    "div",
    { className: "container" }, // Fixed typo in "container" too!
    React.createElement("h1", null, "Hello World")
  );
};

const container = document.getElementById("root");
// Changed ReactDom to ReactDOM
const root = ReactDOM.createRoot(container); 
root.render(React.createElement(App));
