import { useEffect } from "react";

export const usePreventScrolling = (screenSize) => {
  useEffect(() => {
    if (screenSize === "mobile" ) {
      // Save the current overflow and height values to restore them later
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalBodyHeight = document.body.style.height;

      // Apply styles to prevent scrolling
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.height = "100%";

      // Cleanup function to restore original styles
      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.height = originalBodyHeight;
      };
    }
  }, [screenSize]);
};
