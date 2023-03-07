import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../views/Home";

const routers = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
]);

let Router = () => {
  return <RouterProvider router={routers} />;
};

export default Router;
