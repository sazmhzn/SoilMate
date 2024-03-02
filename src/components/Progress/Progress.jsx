import "./Progress.css";

const Progress =() => {
  return (
    <>
        <div className="mt-4 ph-label d-flex justify-content-between">
            <p>pH level</p> 
            <div className="" style={{flex:"1", display:"flex", alignItems:"center", justifyContent:"end"}}> <p> <span>3</span> (Acidic)</p> </div> 
        </div>

        <div className="progressbar-container">
          <div
            className="progressbar-complete"
            style={{ width: "50%" }}
          >
            <div className="progressbar-liquid"></div>
          </div>
          <span className="progress">12%</span>
        </div>

        <div className=" d-flex justify-content-between">
            <p>Acidic</p> 
            <p>Neutral</p> 
            <div className="" > <p>Base</p> </div> 
        </div>
    </>
  );
}

export default Progress;