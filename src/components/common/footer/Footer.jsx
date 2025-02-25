import Explore from "./Explore.jsx";
import BottomBar from "./BottomBar.jsx";
import Subscribe from "./Subscribe.jsx";

const Footer = () => {
  return (
    <footer className="flex flex-col w-mobile py-6 px-4 gap-10 items-start bg-white tablet:w-tablet tablet:py-6 tablet:px-10 tablet:gap-6 desktop:w-desktop desktop:py-[3.75rem] desktop:px-10 desktop:gap-10 mx-auto">
      <Explore />
      <Subscribe />
      <BottomBar />
    </footer>
  );
};

export default Footer;