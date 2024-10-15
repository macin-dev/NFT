import { Menu } from "./components/global";
import { Footer } from "./components/global/footer";
import { ScrollToTop } from "./helper/ScrollToTop";

import "./index.css";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <>
      <ScrollToTop />
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
}
