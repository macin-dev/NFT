import { useEffect, useState } from "react";
import UnorderedList from "./UnorderedList";

const DisplayMobileMenu = () => {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTransition(true);
  }, []);

  return (
    <section
      className={`${
        transition ? "transition-menu right-0" : ""
      } w-full bg-white flex items-end flex-col py-4 absolute z-30 top-14 -right-full bottom-0 overflow-auto duration-700`}
    >
      <UnorderedList />
    </section>
  );
};

export default DisplayMobileMenu;
