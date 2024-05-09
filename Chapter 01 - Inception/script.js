//! ==============  Vanilla JS =================
// const heading = document.createElement("h1")
// heading.innerText = "Hello World!"
// document.querySelector("#root").appendChild(heading)

//! ============== React SuperPowers ===================
// const heading = React.createElement("h1", {id: "heading"}, "Hello World!")
// const root = ReactDOM.createRoot(document.querySelector("#root"))
// root.render(heading)

// console.log(heading);
// console.log(typeof heading);

//! ============== Rendering Nested React Elements ==============
{/* 
    <div id="parent">
        <div id="child">
            <h1>This is a heading</h1>
        </div>
    </div> 
*/}

// const parent = React.createElement("div", {id: "parent"}, 
//     React.createElement("div", {id: "child"}, 
//         React.createElement("h1", {id: "heading"}, "This is a Nested React Element")
//     )
// )
// const root = ReactDOM.createRoot(document.querySelector("#root"))
// root.render(parent)

{/* 
    <div id="parent">
        <div id="child">
            <h1>This is a heading 1</h1>
            <h2>This is heading 2</h2>
        </div>
    </div> 
*/}

// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" }, [
//         React.createElement("h1", { className: "common-heading" }, "This is heading 1"),
//         React.createElement("h2", { className: "common-heading" }, "This is heading 2")
//     ])
// )
// const root = ReactDOM.createRoot(document.querySelector("#root"))
// root.render(parent)

{/* 
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
*/}

// const parent = React.createElement("div", {id: "parent"}, [
//     React.createElement("div", {id: "child1"}, [
//         React.createElement("h1", {}, "This is heading 1 of child 1"),
//         React.createElement("h2", {}, "This is heading 2 of child 1")
//     ]),
//     React.createElement("div", {id: "child2"}, [
//         React.createElement("h1", {}, "This is heading 1 of child 2"),
//         React.createElement("h2", {}, "This is heading 2 of child 2")
//     ])
// ])
// const root = ReactDOM.createRoot(document.querySelector("#root"))
// root.render(parent)

{/* Conclusion */}
{/* 
    1) React.createElement helps to create elements in the DOM using React and the output is React Element which is nothing but an normal Javascript Object.
    2) ReactDOM.createRoot() specifies where to do all the DOM operations for react
    3) To create nested elements in react, use Array [] to create elements in nested way
    4) Crossorigin specifies the resources sharing between different domains and it can be publicly available or authenticated as well as it handles the CORS request
*/}