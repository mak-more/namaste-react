import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => Object => HTML Element - Renders
const heading = React.createElement(
  "h4",
  { id: "title" },
  "Hello Makarand from React!"
);

//JSX => Babel transpiles it to React.createElement => React Element - JS Object => HTML Element - Renders
const jsxHeading = ( //React Element
  <h4 className="title">Persons:</h4>
);

const javaScript = (1000); //javascript

//Two types of React Component:
//Class based Component - OLD
//Functional Compnent - NEW
const FunctComponent1 = () => (
  <h2 className="heading">Hi Mak</h2>
);

const FunctComponent2 = () => (
  <div className="container">
    <FunctComponent1 /> {/* Component into Component is called as 'Component Composition' */}

    <h3>Total: {javaScript}</h3> {/* Insert javaScript into the JSX Functional Component */}

    {jsxHeading} {/* Insert ReactElement into the JSX Functional Component */}

    <h5 className="title">01. Jack</h5>
  </div> 
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading); //Render React Element
root.render(<FunctComponent2 />) //Render React Functional Component

console.log([heading,jsxHeading]);
