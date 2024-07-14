import React from 'react'
import Navbar from '../components/Navbar';
import Sidebaar from '../components/Sidebaar';
import uiuximg from '../images/uiroadmap.jpg';

const Careerpathuiux = () => {
  return (
    <>
    <Navbar />
    <div className="careerpath2">
      <Sidebaar />
      <div className="careerpathbox2">
        <p className="allheading">
          Way to Learn <span className="spa">Ui/Ux Design</span>
          <br />
          (RoadMap){" "}
        </p>
        <div className="waytowebdev">
          <img src={uiuximg} alt="click" />
        </div>
      </div>
      <p></p>
    </div>
  </>
  );
  
}

export default Careerpathuiux
