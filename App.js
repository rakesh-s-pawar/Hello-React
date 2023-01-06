import React from "react";
import ReactDOM from "react-dom/client";

// This is known as a React Element
const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <h1>This is functional component</h1>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing a react element inside the root
root.render(<HeaderComponent />);
