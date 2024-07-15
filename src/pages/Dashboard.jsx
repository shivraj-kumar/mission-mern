import Navbar from "../components/Navbar";
import Sidebaar from "../components/Sidebaar";
import Dashcard from "../components/Dashcard";
import dashimage from "../images/dashweb.svg";
import dashimage1 from "../images/dashandroide.svg";
import dashimage2 from "../images/dashcloud.svg";
import dashimage3 from "../images/dashc++.svg";
import dashimage4 from "../images/dashui.svg";
import dashimage5 from "../images/trending.svg";
import dashimage6 from "../images/progress.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token == undefined) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="dascont">
        <Sidebaar />
        <div className="reco">
          <p>Recommendations</p>
          <div className="dashcard">
            <Dashcard
              img={dashimage}
              heading="Web Development"
              percent="30% Completed"
              name="Shivraj Prasad"
            />
            <Dashcard
              img={dashimage1}
              heading="Web Development"
              percent="40% Completed"
              name="Rishu kumar"
            />
            <Dashcard
              img={dashimage2}
              heading="Web Development"
              percent="20% Completed"
              name="Vaibhav"
            />
            <Dashcard
              img={dashimage3}
              heading="Web Development"
              percent="30% Completed"
              name="Yashwant"
            />
            <Dashcard
              img={dashimage4}
              heading="Web Development"
              percent="30% Completed"
              name="Shivraj Prasad"
            />
          </div>
        </div>
        <div className="dashbor-contanire">
          <div className="dashbor-contanire-box">
            <img src={dashimage5} alt="click" />
          </div>
          <div className="dashbor-contanire-box2">
            <img src={dashimage6} alt="click" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
