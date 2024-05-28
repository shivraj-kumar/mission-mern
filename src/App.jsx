import "./App.css";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OneShot from "./pages/OneShot"

function App() {
  return (
    <>
      <Landing />
      <Dashboard/>
      <Login />
      <Register />
      <OneShot />
    </>
  );
}

export default App;
