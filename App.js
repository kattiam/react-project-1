import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{id : "heading"},"react is working!!");

// const parent = React.createElement("div",{id:"parent"},
//     [
//         React.createElement("div",{id:"child1"}, 
//             [React.createElement("h2", {id:"heading1"}, "This is heading 1"),
//             React.createElement("h2", {id:"heading2"}, "This is heading 2")]
//         ),
//         React.createElement("div",{id:"child2"}, 
//             [React.createElement("h2", {id:"heading3"}, "This is heading 1"),
//             React.createElement("h2", {id:"heading4"}, "This is heading 2")]
//         )
//     ]
// );

const Heading = () => (<h1>this is react element</h1>);

const Body = () => (
    <div>
        <Heading/>
        <h2>This is subtitle</h2>
        <p>This is functional react component</p>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Body/>);