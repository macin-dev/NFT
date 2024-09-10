import { useEffect, useState } from "react";
import { CardContainer, TableContainer } from "./items";
import { TabContainer } from "./TabContainer";

let initialValue = "";

if (window.innerWidth < 960) {
  initialValue = "mobile";
} else if (window.innerWidth < 1440) {
  initialValue = "tablet";
} else {
  initialValue = "desktop";
}

export const Container = () => {
  const [resize, setResize] = useState(initialValue);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 960) {
        setResize("mobile");
      } else if (window.innerWidth < 1440) {
        setResize("tablet");
      } else {
        setResize("desktop");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-start tablet:w-[60rem] tablet:p-10 tablet:gap-10 desktop:w-[90rem] desktop:p-20">
      <TabContainer />
      {resize === "mobile" ? (
        <CardContainer />
      ) : resize === "tablet" ? (
        <TableContainer />
      ) : (
        <div className="flex gap-8 self-stretch">
          <TableContainer />
          <TableContainer />
        </div>
      )}
    </div>
  );
};
