import React from "react";
import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";
import IndexMain from "@/components/IndexMain";
import Home from "@/views/Home";
import My from "@/views/My";
import List from "@/views/List";
import ToolList from "@/views/ToolList";
import ColorBoard from "@/views/ColorBoard";

const routers = createHashRouter([
  {
    path: "/",
    element: <Navigate to="/home-index" />,
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
        path: "/list",
        element: <List />,
      },
      {
        path: "/my",
        element: <My />,
      },
      {
        path: "/tool-list",
        element: <ToolList />,
      },
      {
        path: "/color-board",
        element: <ColorBoard />,
      },
    ],
  },
  {
    path: "*",
    element: <div>页面不存在</div>,
  },
]);

let Router = () => {
  return <RouterProvider router={routers} />;
};

export default Router;
