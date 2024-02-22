/**
 * 
 * <div id="parent">
 *    <div id="child">
 *     <h1>I am h1 tag</h1>
 * </div>
 * </div>
 * ReactElement(Object) => HTML(Browser Understands)
 */
//parent is just an javacript object and react element
// const parent=React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         React.createElement("h1",{},"I'm an h1 tag")

//     )
// );
import React from "react";
import ReactDOM from "react-dom/client";
const parent=React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id:"child"},[
        React.createElement("h1",{},"I'm an h1 tag"),
        React.createElement("h2",{},"I am a h2 tag"),
        ]
    )
);



const heading=React.createElement(
    "h1",
    {id:"heading",xyz:"abc"},
    "Hello World from React!"
    );

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);