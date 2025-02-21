import { useState } from "react";
import { MobileMenu } from "./";
import { usePreventScrolling } from "../../../helper/usePreventScrolling";
import { useResize } from "../../../helper/useResize";
import Header from "./Header.jsx";
import TabletMenu from "./TabletMenu.jsx";
import {Cart} from "../../cart/index.js";

export const Menu = () => {
  const [cart, setCart] = useState(false);
  const { documentSize } = useResize();

  const onClickCart = () => {
    setCart(!cart);
  };

  usePreventScrolling(cart);

  return (
      <>
        <Header>
          {documentSize !== "mobile" ? <TabletMenu onClickCart={onClickCart} /> : <MobileMenu onClickCart={onClickCart} />}
        </Header>
        {cart ? <Cart onClickCart={onClickCart} /> : null }
      </>

  );
};
