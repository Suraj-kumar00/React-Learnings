const heading = React.createElement(
  "h1",

  {},
  "Namaste React!"
); // here we have 'React' and 'createElement' is an API

heading2 = React.createElement(
  "h2",
  {},

  "Namaste React!"
);

const container = React.createElement(
  "div",
  { id: "container", hello: "suraj" },

  [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
