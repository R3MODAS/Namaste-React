import { lazy } from "react";

const Home = lazy(() => import("./Home"))
const Checkout = lazy(() => import("./Checkout"))
const Menu = lazy(() => import("./Menu"))

export { Home, Checkout, Menu }