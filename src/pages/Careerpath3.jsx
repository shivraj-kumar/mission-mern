import React from 'react'
import Navbar from '../components/Navbar';
import Sidebaar from '../components/Sidebaar';
import imageandroid from '../images/androidroadmap.jpg';
const Careerpath3 =() =>  {
  return (
    <>
      <Navbar />
      <div className="careerpath2">
        <Sidebaar />
        <div className="careerpathbox2">
          <p className="allheading">
            Way to Learn <span className="spa">Android Development</span>
            <br />
            (RoadMap){" "}
          </p>
          <div className="waytowebdev">
            <img src={imageandroid} alt="click" />
          </div>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Careerpath3
