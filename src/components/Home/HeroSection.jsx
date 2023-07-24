import React from "react";

const HeroSection = () => {
  return (
    <section className="md:hero-section md:h-screen relative ">
      {/* DESKTOP HERO SECTION*/}
      <div className="hidden max-w-[630px] max-h-[444px] absolute md:flex flex-col justify-between pt-12 pr-[51px] pl-[61px] bg-[var(--white)] bottom-[18.9%] top-[18.9%] right-[6.4%]">
        <div className="flex flex-col gap-10">
          <p className="text-[2rem] leading-[44.8px] text-[#22202E]">
            Luxury homeware for people who love timeless design quality
          </p>
          <p className="leading-[27px] text-lg text-[var(----light-blue)]">
            Shop the new Spring 2022 collection today
          </p>
        </div>
        <button
          className="mb-[46px]
        py-4 px-8  bg-[var(--light-gray)]  text-[var(--primary-color)] w-[200px]"
        >
          {" "}
          View collection
        </button>
      </div>

      {/* MOBILE HERO SECTION */}
      <div className="md:hidden">
        <div className="px-6 pt-[47px]">
          <h1 className="text-[1.5rem] text-[var(--primary-color)] leading-[29.52px] text-[#22202E] pb-3">
            Luxury homeware for people who love timeless design quality
          </h1>
          <p className="leading-[21.6px] ">
            With our new collection, view over 400 bespoke pieces from homeware
            through to furniture today
          </p>
          <div>
            <button className="w-full py-4 px-8 bg-[var(--light-gray)] text-[var(--light-blue)] my-8 hover:text-[var(--white)] hover:bg-[var(--primary-color)] transition-colors duration-500 ease">
              View collection
            </button>
          </div>
        </div>
        <div className="w-full ">
          <img
            src="/images/HeroheroSectionSmall.png"
            alt="mobile-hero-image"
            className="object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
