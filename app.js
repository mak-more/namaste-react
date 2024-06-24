const heading = React.createElement(
  "h4",
  { id: "title" },
  "Hello Makarand from React!"
);

const parent = React.createElement(
  "div",
  { id: "parent" },[
    React.createElement("div", { id: "child" },[
    React.createElement("h4", { id:"subTitle" }, "I am a h4 tag"),
    React.createElement("h5", { id:"subTitle" }, "I am a h5 tag")
    ])
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// root.render([heading,parent]);

console.log([heading,parent]);
