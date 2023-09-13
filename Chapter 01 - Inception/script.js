//! ============== Hello world using JS =================
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello world!";
// document.querySelector("#root").appendChild(heading)

//! ============== React SuperPowers ===================
// const heading = React.createElement("h1", {id : "heading"}, "Hello world !");
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(heading);

//! Nested HTML
/*
        <div id="parent">
            <div id="child">
                <h1>This is heading 1</h1>
            </div>
        </div>
*/

/*
        <div id="parent">
            <div id="child">
                <h1>This is heading 1</h1>
                <h2>This is heading 2</h2>
            </div>
        </div>
*/

/*
        <div id="parent">
            <div id="child1">
                <h1>This is heading 1</h1>
                <h2>This is heading 2</h2>
            </div>
            <div id="child2">
                <h1>This is heading 1</h1>
                <h2>This is heading 2</h2>
            </div>
        </div>
*/

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div",{ id: "child" }, [
//     React.createElement("h1", {id : "heading"}, "This is heading 1"),
//     React.createElement("h2", {id : "heading"}, "This is heading 2")
// ])
// );

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//     [
//         React.createElement("div",{ id: "child1" }, [
//             React.createElement("h1", {id : "heading"}, "This is heading 1"),
//             React.createElement("h2", {id : "heading"}, "This is heading 2")
//         ]),
//         React.createElement("div",{ id: "child2" }, [
//             React.createElement("h1", {id : "heading"}, "This is heading 1"),
//             React.createElement("h2", {id : "heading"}, "This is heading 2")
//         ])
//     ]
// );

// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(parent)
// console.log(parent)


