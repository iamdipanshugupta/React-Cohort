import React from "react";

export default function App(){
    return React.createElement(
        'div',
        [
            React.createElement("div",{style:{color:"red"},[
                React.createElement("h1",{key:"h1"},"Hello World"),
                React.createElement("p",{key:"p"}, "Hello paraGra"),
                "ul",
                {key:"ul"},
                teas.map(tea)
            ]})
        ]
    )
}