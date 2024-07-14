import Navbar from '../components/Navbar'
import Sidebaar from '../components/Sidebaar'
import img from "../images/careerpath1.svg";
import { FaArrowRightLong } from "react-icons/fa6";

const Careerpath1 = () => {
  return (
    <>
      <Navbar />
      <div className="careerpath1">
        <Sidebaar />
        <div className="careerpath1-content">
            <div className="col1">
                <h1>Way to <span>Web Development</span></h1>
                <div className="img-holder">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="col2">
                <button>See Full RoadMap <FaArrowRightLong className='arrow' /></button>
            </div>
        </div>
        </div>
    </>
  )
}

export default Careerpath1
