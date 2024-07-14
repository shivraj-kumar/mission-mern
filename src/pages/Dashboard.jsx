import Navbar from "../components/Navbar";
import Sidebaar from "../components/Sidebaar";
import Dashpath from "../components/Dashpath";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="dascont">
        <Sidebaar />
        <div className="Dashpathcont">
          <Dashpath />
          <Dashpath />
        </div>
        <div className="reco">
          <p>Recommendations</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
