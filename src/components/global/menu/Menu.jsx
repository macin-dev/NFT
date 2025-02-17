import { useState } from "react";
import { MobileMenu } from "./";
import { usePreventScrolling } from "../../../helper/usePreventScrolling";
import { useResize } from "../../../helper/useResize";
import Header from "./Header.jsx";
import TabletMenu from "./TabletMenu.jsx";

export const Menu = () => {
  const [cart, setCart] = useState("");
  const { documentSize } = useResize();

  const onClickCart = () => {
    if(!cart) {
      setCart("mobile");
    } else {
      setCart("");
    }
  };

  usePreventScrolling(cart);

  return (
      <Header>
          {documentSize !== "mobile" ? <TabletMenu onClickCart={onClickCart} /> : <MobileMenu onClickCart={onClickCart} />}
      </Header>
  );
};
