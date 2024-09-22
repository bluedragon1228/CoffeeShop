import { useState } from "react";
import "./MenusMain.css";
import Card from "../commons/Card";
import card1Img from "./verandaBlend.png";
import card2Img from "./coffeeLatte.png";
import card3Img from "./cappuccino.png";
function MenusMain() {
  return (
    <>
      <div className="menus-main main-container">
        <div className="inner-container-normal menus-main-inner">
          <h2 className="menu-main-headline section_heading">
            Menu / Hot Coffees
          </h2>
          <div className="menus-main-wrapper">
            <Card
              cardImage={card1Img}
              cardTitle="Veranda Blend"
              calories="5 Calories"
            />
            <Card
              cardImage={card2Img}
              cardTitle="Coffee Latte"
              calories="7 Calories"
            />
            <Card
              cardImage={card3Img}
              cardTitle="Cappuccino"
              calories="9 Calories"
            />
            <Card
              cardImage={card1Img}
              cardTitle="Veranda Blend"
              calories="5 Calories"
            />
            <Card
              cardImage={card2Img}
              cardTitle="Coffee Latte"
              calories="7 Calories"
            />
            <Card
              cardImage={card3Img}
              cardTitle="Cappuccino"
              calories="9 Calories"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MenusMain;
