import { Outlet } from "react-router-dom";
import { CartProvider } from "./context/CartProvider";
import { CollectionProvider } from "./context/CollectionProvider";
import { FilterMenuProvider } from "./context/FilterMenuContext";
import { ScrollToTop } from "./helper/ScrollToTop";
import Menu from "./components/common/menu/Menu.jsx";
import Footer from "./components/common/footer/Footer.jsx";

import "./index.css";

export function App() {
  return (
    <CollectionProvider>
      <CartProvider>
        <FilterMenuProvider>
          <ScrollToTop />
          <Menu />
          <Outlet />
          <Footer />
        </FilterMenuProvider>
      </CartProvider>
    </CollectionProvider>
  );
}
