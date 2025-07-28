// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello worlddd from react, im soo excited, screaming actually"
// );

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hii im h1 tag"),
    React.createElement("h2", {}, "hii im h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hii im h1 tag"),
    React.createElement("h2", {}, "hii im h2 tag"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
