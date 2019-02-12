import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const Card = () => (
  <div className="card">
    <CardBanner />
    <CardContent />
  </div>
);

export default Card;
