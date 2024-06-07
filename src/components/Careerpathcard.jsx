function Careerpathcard(props) {
  return (
    <>
      <div className="carrpath">
        <div className="carrimage">
          <a href="">
            <img src={props.imag} alt="click" />
          </a>
        </div>
        <h2>{props.h2}</h2>
        <h4>{props.h4} </h4>
      </div>
    </>
  );
}

export default Careerpathcard;
