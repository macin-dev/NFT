import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import { useResize } from "../../../helper/useResize";
import {usePreventScrolling} from "../../../helper/index.js";
import { MobileMenu } from "./";
import TabletMenu from "./TabletMenu.jsx";
import {Cart} from "../../cart/index.js";
import Header from "./Header.jsx";

export const Menu = () => {
  const [cart, setCart] = useState(false);
    const [menu, setMenu] = useState(false);
    const { documentSize } = useResize();
    const location = useLocation();
    const preventScroll = cart || menu;
    usePreventScrolling(preventScroll);

    const handleToggleMenu = () => {
        setMenu(prev => !prev);
    };

  const onClickCart = () => {
    setCart(prev => !prev);
    if(!cart) setMenu(false);
  };

    useEffect(() => {
        setMenu(false);
    }, [location]);

  return (
      <>
        <Header>
          {documentSize !== "mobile" ? <TabletMenu onClickCart={onClickCart} /> : <MobileMenu onClickCart={onClickCart} handleToggleMenu={handleToggleMenu} menu={menu} />}
        </Header>
        {cart ? <Cart onClickCart={onClickCart} /> : null }
      </>

  );
};
