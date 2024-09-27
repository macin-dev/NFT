import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "./components/homepage/Home.jsx";
import { NFT } from "./components/explore/nft/index.js";
import { Wallet } from "./components/connectWallet/login/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="explore" element={<NFT />}></Route>
      </Route>
      <Route path="sing-up" element={<Wallet />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
