import { useEffect } from "react";

export const usePreventScrolling = (isActive) => {
  useEffect(() => {
    const defaultHeight = "auto";
    const defaultPosition = "static";
    const defaultOverflow = "auto";

    if (isActive) {
      document.body.style.height = "100vh";
      document.body.style.position = "relative";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = defaultHeight;
      document.body.style.position = defaultPosition;
      document.body.style.overflow = defaultOverflow;
    }

    return () => {
      document.body.style.height = defaultHeight;
      document.body.style.position = defaultPosition;
      document.body.style.overflow = defaultOverflow;
    };
  }, [isActive]);
};
