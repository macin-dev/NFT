import { useEffect, useState } from "react";

const getScreenSize = () => {
  if (window.innerWidth < 960) return "mobile";
  if (window.innerWidth < 1440) return "tablet";
  if (window.innerWidth >= 1440) return "desktop";
};

export const useResize = () => {
  const [documentSize, setDocumentSize] = useState(getScreenSize);

  useEffect(() => {
    const handleResize = () => {
      if (getScreenSize() === "mobile") setDocumentSize("mobile");
      if (getScreenSize() === "tablet") setDocumentSize("tablet");
      if (getScreenSize() === "desktop") setDocumentSize("desktop");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [documentSize]);

  return {
    documentSize,
  };
};
