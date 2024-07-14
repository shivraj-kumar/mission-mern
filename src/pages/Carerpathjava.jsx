import React from 'react'
import Navbar from '../components/Navbar';
import Sidebaar from '../components/Sidebaar';
import javaimg from '../images/java roadmap.jpg';
const Carerpathjava = () => {
  return (
    <>
    <Navbar />
    <div className="careerpath2">
      <Sidebaar />
      <div className="careerpathbox2">
        <p className="allheading">
          Way to Learn <span className="spa">JAVA Programming</span>
          <br />
          (RoadMap){" "}
        </p>
        <div className="waytowebdev">
          <img src={javaimg} alt="click" />
        </div>
      </div>
      <p></p>
    </div>
  </>
  );
  
}

export default Carerpathjava
