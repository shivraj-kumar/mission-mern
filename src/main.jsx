import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

let allRoutes = createBrowserRouter(
  [
    {
      path:'/',
      element:<Landing/>
    },
    {
      path:'login',
      element:<Login/>
    },
    {
      path:"register",
      element:<Register/>
    }
  ]
)


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={allRoutes}/>
  </React.StrictMode>
);
