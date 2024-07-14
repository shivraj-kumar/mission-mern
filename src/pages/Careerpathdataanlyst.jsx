import React from 'react';
import Navbar from '../components/Navbar';
import Sidebaar from '../components/Sidebaar';
import dataimg from '../images/data.jpg';

const Careerpathdataanlyst = () => {
  return (
    <>
    <Navbar />
    <div className="careerpath2">
      <Sidebaar />
      <div className="careerpathbox2">
        <p className="allheading">
          Way to Learn <span className="spa">Data Analyst</span>
          <br />
          (RoadMap){" "}
        </p>
        <div className="waytowebdev">
          <img src={dataimg} alt="click" />
        </div>
      </div>
      <p></p>
    </div>
  </>
  )
}

export default Careerpathdataanlyst
