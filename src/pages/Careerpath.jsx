import Navbar from "../components/Navbar";
import Sidebaar from "../components/Sidebaar";
import Careerpathcard from "../components/Careerpathcard";
import image17 from "../images/web development.jpg";
import image18 from "../images/andriod.jpg";
import image19 from "../images/java.jpg";
import image20 from "../images/c++.jpg";
import image21 from "../images/python.jpg";
import image22 from "../images/data str.jpg";
import image23 from "../images/uiux.jpg";
import image24 from "../images/flutter.jpg";
import image25 from "../images/dataany.jpg";

function Careerpath() {
  return (
    <>
      <Navbar />
      <div className="carrerpathcont">
        <Sidebaar />
        <div className="carrerpathbox">
          <p>
            Select your desired <span>Career:</span>
          </p>
          <div className="careerbox">
            <Careerpathcard
              imag={image17}
              h2="Web Development"
              h4="MaterCreating Website the Art of"
            />
            <Careerpathcard
              imag={image18}
              h2="Android Development"
              h4="Android Development for Beginner"
            />
            <Careerpathcard
              imag={image19}
              h2="Java Programming"
              h4="
              Core Java and Advance Java"
            />
            <Careerpathcard
              imag={image20}
              h2="C++ Programming"
              h4="
              OOPS Concepts in C++ "
            />
            <Careerpathcard
              imag={image21}
              h2="Python"
              h4="Machine Learning"
            />
            <Careerpathcard
              imag={image22}
              h2="Data Structure "
              h4="Basics to Advance DSA using C++"
            />
            <Careerpathcard
              imag={image23}
              h2="Ui/Ux"
              h4="Create design"
            />
            <Careerpathcard
              imag={image24}
              h2="Flutter"
              h4="MaterCreating Website the Art of"
            />
            <Careerpathcard
              imag={image25}
              h2="Data Analytic"
              h4="MaterCreating Website the Art of"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Careerpath;
