import { Menu } from "./components/global";
import { Footer } from "./components/global/footer";

import "./index.css";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
}
