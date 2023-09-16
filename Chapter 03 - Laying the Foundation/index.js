import React from "react";
import ReactDOM from "react-dom/client";

// const h1 = React.createElement("h1",{}, "Chapter 03 - Laying the Foundation 🚀");

//! Welcome to JSX
// const h1 = <h1>Chapter 03 - Laying the Foundation 🚀</h1>;
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(h1);

//! React Component -> Class Based and Functional Component

//! Functional Component
// const HeadingComponent = () => {
//     return <h1>Namaste React Functional Component</h1>;
// }

// const TitleComponent = () => (
//     <h1>This is the Title</h1>
// )

const title = <h1>Title</h1>;
const HeadingComponent = () => (
    <>
        {/* <TitleComponent /> */}
        {title}
        <h1>Namaste React Functional Component</h1>
    </>
)

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<HeadingComponent />);
