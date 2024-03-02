import "../Card/CropCard.css";
import React, { useState } from "react";
import Card from "./Card";
import coffeeImage from "../../images/crop/coffee.png"
import cottonImage from "../../images/crop/cotton.png"
import grapesImage from "../../images/crop/grape.png"
import juteImage from "../../images/crop/jute.jpg"
import { cropData } from "../../Data/Crop";

function CropCard() {
  console.log(cropData);

  const data = [
    {
      id: "1",
      name: "Coffee Crop",
      img: coffeeImage,
      description:
        "The traditional method of planting coffee is to place 20 seeds in each hole at the beginning of the rainy season. This method loses about 50% of the seeds' potential, as about half fail to sprout. A more effective process of growing coffee, used in Brazil, is to raise seedlings in nurseries that are then planted outside at six to twelve months. Coffee is often intercropped with food crops, such as corn, beans, or rice during the first few years of cultivation as farmers become familiar with its requirements. Coffee plants grow within a defined area between the tropics of Cancer and Capricorn, termed the bean belt or coffee belt.",
    },
    {
      id: "2",
      name: "Cotton Crop",
      img: cottonImage,
      description:
        "Successful cultivation of cotton requires a long frost-free period, plenty of sunshine, and a moderate rainfall, usually from 60 to 120 cm (24 to 47 in)[citation needed]. Soils usually need to be fairly heavy, although the level of nutrients does not need to be exceptional. In general, these conditions are met within the seasonally dry tropics and subtropics in the Northern and Southern hemispheres, but a large proportion of the cotton grown today is cultivated in areas with less rainfall that obtain the water from irrigation. Production of the crop for a given year usually starts soon after harvesting the preceding autumn.",
    },
    {
      id: "3",
      name: "Grapes Crop",
      img: grapesImage,
      description:
        "Harvesting period for grapes, generally starts 30-70 days after fruit set, by the time berries change color from green to yellow (for white varieties), or red-purple (for red varieties). During this stage, we normally have an increase in sugars and a decrease in acids inside the fruits. In general, in the northern hemisphere, most varieties mature from August since November, while in the southern hemisphere from March to August.",
    },
    {
      id: "4",
      name: "Jute Crop",
      img: juteImage,
      description:
        "To grow jute, farmers scatter the seeds on cultivated soil. When the plants are about 15–20 cm tall, they are thinned out. About four months after planting, harvesting begins. The plants are usually harvested after they flower, before the flowers go to seed. The stalks are cut off close to the ground. The stalks are tied into bundles and soaked in water for about 20 days. This process softens the tissues and breaks the hard [pectin] bond between the bast and [Jute hurd] (inner woody fiber stick) and the process permits the fibres to be separated. The fibres are then stripped from the stalks in long strands and washed in clear, running water.",
    },
  ];

  const { img, name, description } = cropData;

  return (
    <>
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
      {/* <Card /> */}
    </>
  );
}

export default CropCard;
