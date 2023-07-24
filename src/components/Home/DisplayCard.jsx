import React from "react";
import Card from "./Card";

const DisplayCard = () => {
  return (
    <div className="py-7 md:px-20 px-6">
      <div className="flex flex-col gap-5 md:flex-row ">
        <Card
          icon="/images/DandyChair.png"
          alt="DandyChair-image"
          title="The Dandy Chair"
          price="$250"
        />
        <Card
          icon="/images/RusticVaseSet.png"
          alt="RusticVaseSet-image"
          title="Rustic Vase Set"
          price="$155"
        />
        <Card
          icon="/images/TheSilkyVase.png"
          alt="TheSilkyVase-image"
          title="The Silky Vase"
          price="$125"
        />
        <Card
          icon="/images/TheLucyLamp.png"
          alt="TheLucyLamp-image"
          title="The Lucy Lamp"
          price="$399"
        />
      </div>
      <div className="flex justify-center items-center">
        {" "}
        <button className="py-4 px-8 bg-[var(--light-gray)] text-[var(--light-blue)] my-8 hover:text-[var(--white)] hover:bg-[var(--primary-color)] transition-colors duration-500 ease">
          View collection
        </button>{" "}
      </div>
    </div>
  );
};

export default DisplayCard;
