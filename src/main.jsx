import React from "react";
import { createRoot } from "react-dom/client";
import { ConnectWallet } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ConnectWallet />
  // {/* </React.StrictMode> */}
);
