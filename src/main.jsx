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
import Careerpath2 from "./pages/Careerpath2.jsx";
import Careerpath3 from "./pages/Careerpath3.jsx";
import Carerpathjava from "./pages/Carerpathjava.jsx";
import Careerpathpython from "./pages/Careerpathpython.jsx";
import Careerpathcpp from "./pages/Careerpathcpp.jsx";
import Careerpathdsa from "./pages/Careerpathdsa.jsx";
import Careerpathuiux from "./pages/Careerpathuiux.jsx";
import Careerpathflutter from "./pages/Careerpathflutter.jsx";
import Careerpathdataanlyst from "./pages/Careerpathdataanlyst.jsx";
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
    {
       path:'/careerpath-roadmap',
     element:<Careerpath2/>
    },
    {
      path:'/app-dev-roadmap',
    element:<Careerpath3/>
   },
   {
    path:'/java-roadmap',
  element:<Carerpathjava/>
 },
 {
  path:'/cpp-roadmap',
element:<Careerpathcpp/>
},
{
  path:'/python-roadmap',
element:<Careerpathpython/>
},
{
  path:'/data-structure-roadmap',
element:<Careerpathdsa/>
},
{
  path:'/ui-ux-roadmap',
element:<Careerpathuiux/>
},
{
  path:'/flutter-roadmap',
element:<Careerpathflutter/>
},
{
  path:'/data-analytics-roadmap',
element:<Careerpathdataanlyst/>
},
    {
      path:'login',
      element:<Login/>
    },
    {
         path:"register",
      element:<Register/>
    },
    {
      path: '/dashboard',
      element:<Dashboard />
    }
   
  ]
)


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={allRoutes}/>
  </React.StrictMode>
);
