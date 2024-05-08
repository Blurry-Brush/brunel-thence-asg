import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Success from "./pages/Success";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/success",
    element: <Success />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

