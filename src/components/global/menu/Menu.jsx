import { useState } from "react";
import { DesktopMenu, MobileMenu, TabletMenu } from "./";
import { usePreventScrolling } from "../../../helper/usePreventScrolling";
import { Cart } from "../../cart";
import { useResize } from "../../../helper/useResize";

export const Menu = () => {
  const [cart, setCart] = useState(false);
  const { documentSize } = useResize();

  const handleClickCart = () => {
    setCart(!cart);
  };

  usePreventScrolling(cart);

  return (
    <header>
      {documentSize === "mobile" && (
        <MobileMenu onClickCart={handleClickCart} cartState={cart} />
      )}
      {documentSize === "tablet" && (
        <TabletMenu onClickCart={handleClickCart} />
      )}
      {documentSize === "desktop" && (
        <DesktopMenu onClickCart={handleClickCart} />
      )}
      {cart && <Cart onClickCart={handleClickCart} />}
    </header>
  );
};
