import React from "react";
import QualityCard from "./QualityCard";

const QualityAssurance = () => {
  return (
    <div className="px-6 py-12 md:px-20 md:py-20">
      <h3 className="text-xl md:text-2xl leading-8 md:text-center pb-9 ">
        What makes our brand different
      </h3>
      <div className="flex flex-col gap-5 md:flex-row ">
        <QualityCard
          icon="/images/DeliveryIcon.png"
          alt="delivery-icon"
          title="Next day as standard"
          desc="Order before 3pm and get your order the next day as standard"
        />
        <QualityCard
          icon="/images/CheckmarkIcon.png"
          alt="checkmark-icon"
          title="Made by true artisans"
          desc="Handmade crafted goods made with real passion and craftmanship"
        />
        <QualityCard
          icon="/images/creditCard.png"
          alt="checkmark-icon"
          title="Unbeatable prices"
          desc="For our materials and quality you won’t find better prices anywhere"
        />
        <QualityCard
          icon="/images/SproutIcon.png"
          alt="sprout-icon"
          title="Recycled packaging"
          desc="We use 100% recycled to ensure our footprint is more manageable"
        />
      </div>
    </div>
  );
};

export default QualityAssurance;
