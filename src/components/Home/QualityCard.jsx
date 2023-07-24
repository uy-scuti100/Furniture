import React from "react";

const QualityCard = ({ icon, alt, title, desc }) => {
  return (
    <div className="flex flex-col gap-3 bg-[var(--light-gray)] p-12">
      <img src={icon} alt={alt} className="w-6 h-6" />
      <h4 className="text-xl leading-7">{title}</h4>
      <p className="leading-6">{desc}</p>
    </div>
  );
};

export default QualityCard;
