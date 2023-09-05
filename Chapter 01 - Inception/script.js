//! ============== Hello world using JS =================
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello world!";
// document.querySelector("#root").appendChild(heading)

//! ============== React SuperPowers ===================
const heading = React.createElement("h1", {id : "heading"}, "Hello world !");
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(heading);

