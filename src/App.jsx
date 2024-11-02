import { Menu } from "./components/global";
import { Footer } from "./components/global/footer";
import { CollectionProvider } from "./context/CollectionProvider";
import { ScrollToTop } from "./helper/ScrollToTop";

import "./index.css";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <CollectionProvider>
      <ScrollToTop />
      <Menu />
      <Outlet />
      <Footer />
    </CollectionProvider>
  );
}
