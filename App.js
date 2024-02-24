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


//React.createElement =>Object =>HTMLElement(render)

const heading=React.createElement(
    "h1",
    {id:"heading",xyz:"abc"},
    "Hello World from React!"
    );
//we are using ractdom because we have to manipulaate dom
//beause we are dealing with browser
const jsxheading =(<h1 id="heading" className="head" tabIndex="1"> Namaste Rohan from jsx</h1>);

//React Functional Component
// These both are the syntax of functional component
const Title = () =>
(
    <h1>Hello from Title Component</h1>
);
const Heading =()=>
(
    <div>
        <Title/>
         {/* this is a javacript  jsxheading */}
        {jsxheading}
    <h1>Hello from functional Component</h1>
    </div>
);
const HeadingComponent =() =>
{
    
    return (<h1  id="heading" className="heading">Namaste Rohan From Functional Component</h1>);
};
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading/>);