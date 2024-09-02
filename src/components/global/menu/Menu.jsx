import { useEffect, useState } from "react";
import { Desktop, Mobile, Tablet } from "./";

let initialValue = "";

if (window.innerWidth < 960) {
  initialValue = "mobile";
} else if (window.innerWidth < 1440) {
  initialValue = "tablet";
} else {
  initialValue = "desktop";
}

export const Menu = () => {
  const [menu, setMenu] = useState(initialValue);

  useEffect(() => {
    let size = 0;

    const handleResize = () => {
      size = window.innerWidth;

      if (size < 960) {
        setMenu("mobile");
      } else if (size < 1440) {
        setMenu("tablet");
      } else {
        setMenu("desktop");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full py-3 px-4 flex justify-between items-center target:py-5 tablet:px-10 desktop:px-20">
      {menu === "mobile" ? (
        <Mobile />
      ) : menu === "tablet" ? (
        <Tablet />
      ) : (
        <Desktop />
      )}
    </div>
  );
};
