import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const {pathname} = useLocation();

  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
    </Provider>
  )
}

export default App
