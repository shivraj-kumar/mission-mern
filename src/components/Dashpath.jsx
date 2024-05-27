import Dashcard from "./Dashcard";

function Dashpath() {
  return (
    <>
      <div className="dashpathcont">
        <h2>Your selected paths</h2>
       <Dashcard/>
       <Dashcard/>
       <button>See All</button>
      </div>
    </>
  );
}

export default Dashpath;
