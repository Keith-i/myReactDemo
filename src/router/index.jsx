import React from "react";
import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";
import IndexMain from "../components/IndexMain";
import Home from "../views/Home";
import My from "../views/My";

const routers = createHashRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/",
    element: <IndexMain />,
    children: [
      {
        path: "/home-index",
        element: <Home />,
      },
      {
        path: "/my",
        element: <My />,
      },
    ],
  },
]);

let Router = () => {
  return <RouterProvider router={routers} />;
};

export default Router;
