import React from "react";

export default function GoodsCard({ photo, name, price }) {
  return (
    <div className="goodsCard">
      <img className="goodsImg" src={photo} alt={name} />
      <div className="goodsInfo">
        <div className="goodsName">{name}</div>
        <div className="goodsPrice">{price}</div>
      </div>
    </div>
  );
}
