import { Menu } from "./components/global";
import { Footer } from "./components/global/footer";
import { CartProvider } from "./context/CartProvider";
import { CollectionProvider } from "./context/CollectionProvider";
import { FilterMenuProvider } from "./context/FilterMenuContext";
import { ScrollToTop } from "./helper/ScrollToTop";

import "./index.css";
import { Outlet } from "react-router-dom";

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
