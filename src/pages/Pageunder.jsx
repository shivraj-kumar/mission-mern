import React from 'react';
import Navbar from '../components/Navbar';
import Sidebaar from '../components/Sidebaar';
import img from '../images/const.png';
import imagepage from '../images/page.png';

const Pageunder = () => {
  return (
    <>
       <Navbar />
        <div className="box1">
        <Sidebaar />
            <div className="box2">
                <div className="construct">
                    <img src={img} alt="click" />
                </div>
                <div className="construct2">
                    <img src={imagepage} alt="click" />
                </div>
            </div>
      
        </div>
    </>
  )
}

export default Pageunder;
