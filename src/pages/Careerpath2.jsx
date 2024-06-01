import React from 'react'
import Navbar from '../components/Navbar'
import Sidebaar from '../components/Sidebaar'
import image26 from "../images/careerpath2.svg";

function Careerpath2() {
  return (
    <>
    <Navbar/>
    <div className="careerpath2">
        <Sidebaar/>
        <div className="careerpathbox2">
            <p className='allheading'>Way to <span className='spa'>Web Development</span><br/>(RoadMap) </p>
            <div className="waytowebdev"><img src={image26} alt="click" /></div>
        </div>
        <p></p>
    </div>
    </>
  )
}


export default Careerpath2