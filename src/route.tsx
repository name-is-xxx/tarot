import React, { Suspense } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import Layout from "@/components/Layout";

const Home = React.lazy(() => import("@/page/home"));
const Blog = React.lazy(() => import("@/page/blog"));

const route: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Layout />
      </Suspense>
    ),
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
