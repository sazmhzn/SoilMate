import "../Card/CropCard.css";
import React, { useState } from "react";
import FiddleLeaf from "../img/fiddleLeaf.jpg";
import cropData from "../CropData";
import Card from "./Card";
import fiddleLeaf from "../img/fiddleLeaf.jpg";
import tomato from "../img/Tomato.jpg";
import potato from "../img/potato.jpeg";
import chilies from "../img/chilies.jpg";
import pota from "../img/potato.jpeg";

function CropCard() {
    const data = [
    {
      id: 1,
      name: "Potapo",
      description: "Fiddle fern is a something that .....",
      img: potato,
    },
    {
      id: 2,
      name: "Green color chilles",
      description: "Fiddle fern is a something that .....",
      img: chilies,
    },
    {
      id: 3,
      name: "Tomato",
      description: "Fiddle fern is a something that .....",
      img: tomato,
    },
    {
      id: 4,
      name: "Dhaniya",
      description: "Fiddle fern is a something that .....",
      img: fiddleLeaf,
    },
  ];

  // const [crop, setCrop] = useState(cropData);

  return (
    <>
    {
      data.map((item) => 
      <Card 
      key={item.id} 
      item={item} 
      /> 
      )
    }
      {/* <Card /> */}
    </>
  );
}

export default CropCard;
