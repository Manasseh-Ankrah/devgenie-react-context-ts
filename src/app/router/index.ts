import { createBrowserRouter } from "react-router-dom";
import { Header } from "../components";
import { Home, About, NotFound } from "../pages";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(Header),
    errorElement: React.createElement(NotFound),
    children: [
      {
        path: "/",
        element: React.createElement(Home),
      },
      {
        path: "/about",
        element: React.createElement(About),
      },
    ],
  },
]);

export default router;
