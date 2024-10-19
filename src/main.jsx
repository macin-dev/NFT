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
import { Header } from "./components/collections/header/Header.jsx";
import { Layout } from "./components/user/Layout.jsx";
import { Details } from "./pages/details/Details.jsx";
import { Main } from "./pages/create/index.js";
import { Profile } from "./pages/profile/Profile.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="explore" element={<NFT />}></Route>
        <Route path="collection" element={<Header />} />
        <Route path="user/:userID" element={<Layout />} />
        <Route path="nft-detail/:itemID" element={<Details />} />
        <Route path="create" element={<Main />} />
        <Route path="profile-settings" element={<Profile />} />
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
