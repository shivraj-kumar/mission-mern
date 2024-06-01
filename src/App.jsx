import "./App.css";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OneShot from "./pages/OneShot";
import Careerpath from "./pages/Careerpath";
import Careerpath2 from "./pages/Careerpath2";
import Freecourses from "./pages/Freecourses";
import Paidcourses from "./pages/Paidcourses";

function App() {
  return (
    <>
       <Landing />
      <Dashboard />
      <Careerpath />
      <Login />
      <Register />
      <OneShot />
      <Careerpath2 /> 
      <Freecourses />
      <Paidcourses/>
    </>
  );
}

export default App;
