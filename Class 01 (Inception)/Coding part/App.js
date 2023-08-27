//* this is how we write h1 and and value in Js, like program in js

/* 
      const heading = document.createElement("h1");
      heading.innerHTML = " Hello Suraj";
      const root = document.getElementById("root");
      root.appendChild(heading);
    
    */

// what is the react element at the end of the day? = it is an object

// so the below thing is not developer friendly that's why JSX came into picture

const heading = React.createElement("h1", {}, "Namaste React!");

// here if  we console this heading we get the object of this react element const

heading2 = React.createElement("h2", {}, "Namaste React!");

const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);

// if we have to paas multiple childeran we use array here

const root = ReactDOM.createRoot(document.getElementById("root"));

// below is, passing the a react element inside the root root.render(container);

// here basically i'm putting container inside my root

// if we do innerHTML here, yes it will change the heading !

// doesn't matter how big the applicaiton is we just have "one root element " and " one render method"

// the beauty of react is that we can use it for only one section in out website like we want to impliment react to our existing project and in searchbar so we just have to do is to write search bar in react
