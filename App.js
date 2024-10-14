/** 
 * <div id="parent">
 *     <div id="child">
 *         <h1>I am a child in h1 tag</h1>
 *         <h2>I am a child in h1 tag</h2>
 *     </div>
 *  *  <div id="child2">
 *         <h1>I am a child in h1 tag</h1>
 *         <h2>I am a child in h1 tag</h2>
 *     </div>
 * </div>
 * 
*/
import React from "react";
import ReactDOM from "react-dom/client";

const div = React.createElement("div", { id: "parent" },
        React.createElement("div", { id: "child" },
        [
            React.createElement("h1", {}, "I am a child in h1 tag"),
            React.createElement("h2", {}, "I am a child in h2 tag"),
        ], 
        React.createElement("div", { id: "child2" },
            [
                React.createElement("h1", {}, "I am a child in h1 tag"),
                React.createElement("h2", {}, "I am a child in h2 tag"),
            ], 
        )
    )
);

// const h1 = React.createElement("h1", { id: "heading" }, "Hello World from React!");
// // console.log(h1) // this returns object
const root = ReactDOM.createRoot(document.getElementById("root")); // to create root we use reactdom
console.log(div);
root.render(div);
