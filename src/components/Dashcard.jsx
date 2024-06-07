import image15 from "../images/dash img.svg";
import image16 from "../images/dash profile.svg";

function Dashcard() {
  return (
    <>
      <div className="dashbox">
        <div className="dashmini">
          <div className="dashimage">
            <img src={image15} alt="click" />
          </div>
          <div className="dashdata">
            <h3>Data Analysis</h3>
            <div className="dashprofile">
              <img src={image16} alt="click" />
              <p className="dpara">Shivraj Prasad</p>
            </div>
            <p className="dpara rara">30% Completed</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashcard;
