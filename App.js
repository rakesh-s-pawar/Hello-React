import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Namaste React"
);

const heading2 = (<h1 id="title" key="h1">Namaste React</h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing a react element inside the root
root.render(heading);
