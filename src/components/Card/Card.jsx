import "../Card/CropCard.css";
import React from "react";

const Card = (props) => {
  // const data = [
  //   {
  //     name: "Potapo",
  //     description: "Fiddle fern is a something that .....",
  //     img: potato,
  //   },
  //   {
  //     name: "Green color chilles",
  //     description: "Fiddle fern is a something that .....",
  //     img: chilies,
  //   },
  //   {
  //     name: "Tomato",
  //     description: "Fiddle fern is a something that .....",
  //     img: tomato,
  //   },
  //   {
  //     name: "Dhaniya",
  //     description: "Fiddle fern is a something that .....",
  //     img: FiddleLeaf,
  //   },
  // ];

  const { img, name, description } = props.item;
  console.log(props.name);

  return (
    <>
      <div className="col-3 m-4">
        <div className="card">
          <div className="card-image"
          style={{
            minHeight:"200px",
            maxHeight:"200px"
          }}>

            <img
              src={img}
              className="card-img-top"
              alt="a plant"
            />
          </div>

          <div className="card-body">
            <h4>{name}</h4>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
