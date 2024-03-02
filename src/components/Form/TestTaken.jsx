import { React, useState } from "react";

import Card from "../Card/Card";
import N from "../img/n.png";
import P from "../img/p.jpg";
import K from "../img/k.png";

const data = [
  {
    id: 1,
    name: 12,
    description: "Nitrogen",
    img: N,
  },
  {
    id: 1,
    name: 12,
    description: "Phosphorus",
    img: P,
  },
  {
    id: 1,
    name: 12,
    description: "Potassium",
    img: K,
  },
];

function TestTaken(props) {
  const { tested, setTested } = props;
  console.log(tested);

  function handleClick() {
    setTested((p) => !p);
  }

  return (
    <>
    <h1 className="text-light">Your test Results</h1>
      <div className="row mb-4 d-flex align-item-center justify-content-center">
        {data.map((item) => (
          <Card keys={item.id} item={item} />
        ))}
      </div>
      <button 
      className="btn btn-success mt-4 px-4 py-3 fw-bold fs-5" onClick={handleClick} 
      >
        Retest it
      </button>
    </>
  );
}

export default TestTaken;
