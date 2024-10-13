import { useEffect } from "react";

export const usePreventScrolling = (isActive) => {
  useEffect(() => {
    const originalStyle = document.body.style.height;

    if (isActive) {
      document.body.style.height = "90vh";
    } else {
      document.body.style.height = originalStyle;
    }

    return () => {
      document.body.style.height = originalStyle;
    };
  }, [isActive]);
};
