import { useState } from "react";
import { Desktop, Mobile, Tablet } from "./";
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
    <header className="w-full py-3 px-4 flex justify-between items-center tablet:w-[60rem] tablet:py-5 tablet:px-10 desktop:px-20 desktop:w-[90rem] mx-auto">
      {documentSize === "mobile" && (
        <Mobile onClickCart={handleClickCart} cartState={cart} />
      )}
      {documentSize === "tablet" && <Tablet onClickCart={handleClickCart} />}
      {documentSize === "desktop" && <Desktop onClickCart={handleClickCart} />}
      {cart && <Cart onClickCart={handleClickCart} />}
    </header>
  );
};
