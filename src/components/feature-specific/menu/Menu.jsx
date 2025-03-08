import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import { useResize } from "../../../helper/useResize.js";
import {usePreventScrolling} from "../../../helper/index.js";
import {Cart} from "../cart/index.js";
import Header from "./Header.jsx";
import TabletMenu from "./tablet/TabletMenu.jsx";
import MobileMenu from "./mobile/MobileMenu.jsx";

const Menu = () => {
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

export default Menu;
