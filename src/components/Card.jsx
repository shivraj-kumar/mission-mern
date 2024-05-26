import image7 from "../images/boymoji.svg";

function Card() {
  return (
    <>
      <div className="card">
        <img src={image7} alt="click" />
        <p className="cardpara">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          condimentum velit egestas rutrum purus Id in faucibus consequat
          hendrerit scelerisque maecenas massa, quis. “ - Customer
        </p>
      </div>
    </>
  );
}

export default Card;
