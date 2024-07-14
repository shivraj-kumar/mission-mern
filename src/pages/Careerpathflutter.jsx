import React from 'react';
import Navbar from '../components/Navbar';
import Sidebaar from '../components/Sidebaar';
import flutterimg from '../images/Flutterroadmap.jpg';

const Careerpathflutter = () => {
  return (
    <>
    <Navbar />
    <div className="careerpath2">
      <Sidebaar />
      <div className="careerpathbox2">
        <p className="allheading">
          Way to Learn <span className="spa">Flutter Developer</span>
          <br />
          (RoadMap){" "}
        </p>
        <div className="waytowebdev">
          <img src={flutterimg} alt="click" />
        </div>
      </div>
      <p></p>
    </div>
  </>
  );
}
export default Careerpathflutter
