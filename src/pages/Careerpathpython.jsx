import React from 'react'
import Navbar from '../components/Navbar';
import Sidebaar from '../components/Sidebaar';
import pythonimg from '../images/pythonmap.jpg';

const Careerpathpython = () => {
  return (
    <>
    <Navbar />
    <div className="careerpath2">
      <Sidebaar />
      <div className="careerpathbox2">
        <p className="allheading">
          Way to Learn <span className="spa">Python</span>
          <br />
          (RoadMap){" "}
        </p>
        <div className="waytowebdev">
          <img src={pythonimg} alt="click" />
        </div>
      </div>
      <p></p>
    </div>
  </>
  )
}

export default Careerpathpython
