import { useState } from "react";
import { usePreventScrolling } from "../../../helper/usePreventScrolling";
import { Search } from "../../global/search";
import { Layout } from "./Layout";
import { Filter } from "../filter";
import { useResize } from "../../../helper/useResize";
import TogleMobile from "./TogleMobile";
import ToggleTablet from "./ToggleTablet";

export const Options = () => {
  const [toggle, setToggle] = useState(false);
  const { documentSize } = useResize();

  const onToggle = () => {
    setToggle(!toggle);
  };

  // custom hook for preventing scrolling
  usePreventScrolling(toggle);

  return (
    <div className="flex gap-3 self-stretch">
      <Search placeholder="Search" />
      {documentSize === "mobile" ? (
        <TogleMobile onToggle={onToggle} />
      ) : (
        <ToggleTablet />
      )}
      <Layout />
      {toggle && <Filter onToggle={onToggle} />}
    </div>
  );
};
