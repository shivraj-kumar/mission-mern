import React from 'react'
import Navbar from '../components/Navbar';
import Sidebaar from '../components/Sidebaar';
import dsaimg from '../images/DSAroadmap.jpg';

const Careerpathdsa = () => {
  return (
    <>
    <Navbar />
    <div className="careerpath2">
      <Sidebaar />
      <div className="careerpathbox2">
        <p className="allheading">
          Way to Learn <span className="spa">Data Structure and Algorithm</span>
          <br />
          (RoadMap){" "}
        </p>
        <div className="waytowebdev">
          <img src={dsaimg} alt="click" />
        </div>
      </div>
      <p></p>
    </div>
  </>
  );  
}

export default Careerpathdsa
