import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";

function CatCard({ card }) {
  return (
    <Link to={`/gigs?cat=${card.cat}`}>
      <div className="catCard">
        <img src={card.img} alt="" />
        <div className="card-info">
          <span className="desc">{card.desc}</span>
          <span className="title">{card.title}</span>
        </div>
      </div>
    </Link>
  );
}

export default CatCard;
