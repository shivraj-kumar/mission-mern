import React from 'react'
import Navbar from '../components/Navbar'
import Sidebaar from '../components/Sidebaar'
import imagecpp from '../images/cpp.jpg'

const Careerpathcpp = () => {
  return (
    <>
    <Navbar />
    <div className="careerpath2">
      <Sidebaar />
      <div className="careerpathbox2">
        <p className="allheading">
          Way to Learn <span className="spa">C++ Programming</span>
          <br />
          (RoadMap){" "}
        </p>
        <div className="waytowebdev">
          <img src={imagecpp} alt="click" />
        </div>
      </div>
      <p></p>
    </div>
  </>
  );
}
export default Careerpathcpp
