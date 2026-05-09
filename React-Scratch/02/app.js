import React from "https://esm.sh/react@19.0.0";
import ReactDOM from "https://esm.sh/react-dom@19.0.0/client";




const chai = (props) => {
    return React.createElement(
        "dic",
        {},
        [
            React.createElement("h1", null, props.name || "chai"),
            React.createElement("p", null, props.desc || "demo component")
        ]
    )
}


const App = () => {
    return React.createElement(
        "div",
        { className: "container" },
        React.createElement("h1", null, "Hello React"),
        React.createElement(chai,  {
            name:"Masala Chai",
            desc:"A simple react component"
        })
    );
};

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
