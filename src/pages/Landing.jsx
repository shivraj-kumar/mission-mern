import image4 from "../images/testimonials.svg";
import image5 from "../images/Award.svg";
import image6 from "../images/memoji.svg";
import image7 from "../images/talk.svg";
import Header from "../components/Header";
import Herosection from "../components/Herosection";
import Card from "../components/Card";
function Landing() {
  return (
    <>
      <Header />
      <Herosection />
      <div className="testimonial">
        <div className="testi">
          <img src={image4} alt="click" />
        </div>
      </div>
      <div className="maincont">
        <div className="minicont">
          <img src={image5} alt="click" />
        </div>
        <div className="minicont2">
          <div className="timg">
            <img src={image6} alt="" />
          </div>
          <p className="tpara">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            condimentum velit egestas rutrum purus Id in faucibus consequat
            hendrerit scelerisque maecenas massa, quis. “ - Customer
          </p>
        </div>
      </div>
      <div className="maincont2">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="maincont3">
        <div className="pagl">
          <img src={image7} alt="click" />
        </div>
        <div className="testibutton">
          <button className="herobutton">Start your learning journey</button>
        </div>
      </div>
    </>
  );
}

export default Landing;
