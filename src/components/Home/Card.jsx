import React from "react";

const Card = ({ icon, alt, title, price }) => {
  return (
    <div className="flex flex-col gap-3">
      <img src={icon} alt={alt} className="object-cover" />

      <h4 className="text-xl leading-7">{title}</h4>
      <p className="leading-6">{price}</p>
    </div>
  );
};

export default Card;
