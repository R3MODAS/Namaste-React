import { lazy } from "react";

const Home = lazy(() => import("./Home"))
const Menu = lazy(() => import("./Menu"))
import Checkout from "./Checkout";

export { Home, Checkout, Menu }