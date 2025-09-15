import { createBrowserRouter, RouteObject } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/page/home";
import Blog from "@/page/blog";

const route: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
];

const router = createBrowserRouter(route, { basename: "/tarot" });

export default router;
