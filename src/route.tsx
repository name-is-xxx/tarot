import React, { Suspense } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import Layout from "@/components/Layout";

const Home = React.lazy(() => import("@/page/home"));
const Blog = React.lazy(() => import("@/page/blog"));
const AddBlog = React.lazy(() => import("@/page/addBlog"));

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
      {
        path: "/add",
        element: <AddBlog />,
      },
    ],
  },
];

const router = createBrowserRouter(route, { basename: "/tarot" });

export default router;
