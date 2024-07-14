import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Landing from "./pages/Landing.jsx";
// import Login from "./pages/Login.jsx";
// import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CoursePage from "./pages/CoursePage.jsx";
import Careerpath from "./pages/Careerpath.jsx";
import OneShot from "./pages/OneShot.jsx";
import Freecourses from "./pages/Freecourses.jsx";
import Paidcourses from "./pages/Paidcourses.jsx";
import Careerpath1 from "./pages/Careerpath1.jsx";

let allRoutes = createBrowserRouter(
  [
    {
      path:'/',
      
      // element:<Landing/>
      element:<Dashboard/>
    },
    {
      path:'/course',
      element:<CoursePage/>
    },
    {
      path:'/careerpath',
      element:<Careerpath/>
    },
    {
      path:'/oneshot',
      element:<OneShot/>
    },
    {
      path:'/freecources',
      element:<Freecourses/>
    },
    {
      path:'/paidcources',
      element:<Paidcourses/>
    },
    {
      path:'/careerpath1',
      element:<Careerpath1/>
    },
    // {
    //   path:'/careerpath1',
    //   element:<Careerpath1/>
    // },

    // {
    //   path:'login',
    //   element:<Login/>
    // },
    // {
    //   path:"register",
    //   element:<Register/>
    // }
  ]
)


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={allRoutes}/>
  </React.StrictMode>
);
