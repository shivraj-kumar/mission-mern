
import image16 from "../images/dash profile.svg";

function Dashcard(props) {
  return (
    <>
      <div className="dashbox">
        <div className="dashmini">
          <div className="dashimage">
            <img src={props.img} alt="click" />
          </div>
          <div className="dashdata">
          <h3>{props.heading}</h3>
            <div className="dashprofile">
              <img src={image16} alt="click" />
              <p className="dpara">{props.name}</p>
            </div>
            <p className="dpara rara">{props.percent}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashcard;
