import React from "react";
//AOS imports
import "aos/dist/aos.css";
//rrd imports
import ReactDOM from "react-dom/client";
//css file
import "./index.css";
//components imports
import App from "./App";
import Home from "./Home";
import NotFound from "./NotFound";
import BirdDetails from "./BirdDetails";
import Bird from "./Bird";
//bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

//react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/birds",
        element: <Bird />,
      },
      {
        path: "/bird/:id",
        element: <BirdDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
