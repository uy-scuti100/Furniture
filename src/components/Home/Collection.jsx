import React from "react";

const Collection = () => {
  return (
    <div className="py-7 md:px-20 px-6 flex flex-col gap-5 md:flex-row ">
      <div className="flex gap-16 flex-col pt-10 px-16 pb-0 bg-[var(--primary-color)] basis-1/2 ">
        <div>
          <h4 className="pb-3 text-xl md:text-4xl leading-10 text-[var(--white)]">
            It started with a small idea
          </h4>
          <p className="md:text-lg text-sm md:leading-6 leading-[21px] text-[var(--white)]">
            A global brand with local beginnings, our story begain in a small
            studio in South London in early 2014
          </p>
        </div>
        <div className="flex items-center">
          {" "}
          <button className="py-4 px-8 bg-[var(--light-gray)] text-[var(--light-blue)] hover:text-[var(--light-gray)] mt-8 hover:bg-[var(--primary-color)] hover:border border-[var(--light-gray)] hover:scale-[1.1] transition-all duration-500 ease">
            View collection
          </button>{" "}
        </div>
      </div>
      <div className="basis-1/2 ">
        <img
          src="/images/CollectionImage.png"
          alt=""
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Collection;
