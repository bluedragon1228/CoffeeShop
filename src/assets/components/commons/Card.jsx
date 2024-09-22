import { useState, props } from "react";
import "./card.css";
function Card(props) {
  return (
    <>
      <article className="card-item card-type">
        <div className="card-image-wrapper">
          <picture>
            <img src={props.cardImage} alt={props.cardTitle} />
          </picture>
        </div>
        <div className="card-content-wrapper">
          <h3 className="card-title">
            {props.cardTitle}
            <sup className="reg-symbl">&#174;</sup>
          </h3>
          <p className="card-subtitle">
            <small>{props.calories}</small>
          </p>
          <div className="card-btn">
            <button
              onClick={() => {
                alert(`You Added ${props.cardTitle} to Orders`);
              }}
              className="btn add-order-btn"
            >
              Add to Order
            </button>
          </div>
        </div>
      </article>
    </>
  );
}

export default Card;
