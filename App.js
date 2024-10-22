
import React from "react";
import ReactDOM from "react-dom/client";

// react element  react.createelement => object => htmlelement(render)
const heading = React.createElement(
    "hi",
    {id:"heading"}, "namaste react"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
