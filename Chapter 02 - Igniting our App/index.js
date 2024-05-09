import React from "react";
import ReactDOM from "react-dom/client"

const h1 = React.createElement("h1",{},"Chapter 02 - Igniting our App 🚀")
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(h1)

//! Conclusion
{/* 
    1) npm stands for package manager and not node package manager which manages all the packages(dependencies) inside the package.json

    2) Version of packages are (Major | Minor | Patch)

    3) ^ (caret) specifies to update to the latest minor/patch version within the same major version and ~ (tilde) specifies to update to the latest patch version within the same minor version

    4) vite, parcel, webpack are all bundlers that bundles our app for production ready

    5) package-lock.json contains the exact versions of the dependencies used in the project and package.json keeps the approx versions of the dependencies

    6) There are dependencies we require in our project and that dependency may require other dependency to run and that dependency may require another dependency so this goes on and this chaining of dependencies is known as transitive dependency

    7) Npm knows which packages are required for our project by checking our package.json as it contains the packages used in the project so we just need to install those packages in our project

    8) We always push package.json and package-lock.json in our github but not node_modules as package.json and package-lock.json contains the information about the project and also the packages used in a project so we can definitely install the packages and generate a brand new node_modules whenever we need
*/}