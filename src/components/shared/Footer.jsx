import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer flex justify-center flex-col md:items-center items-start px-6 w-full text-[var(--white)] py-10 md:py-0 md:h-[444px]">
        <h2 className="md:text-[2rem] md:leading-[44.8px] text-2xl ">
          Join the club and get the benefits
        </h2>
        <p className="md:leading-[27px] md:text-center md:text-[18px] text-sm leading-[21px]">
          Sign up for our newsletter and receive exclusive offers on{" "}
          <br className="hidden md:block" /> new ranges, sales, pop up stores
          and more
        </p>
        <div className="flex flex-col md:flex-row gap-9 ">
          <span className="flex gap-2 items-center">
            <img src="/images/CheckmarkIcon.png" alt="checkmark-icon" />
            <p className="leading-6">Exclusive offers </p>
          </span>
          <span className="flex gap-2 items-center">
            <img src="/images/CheckmarkIcon.png" alt="checkmark-icon" />
            <p className="leading-6">Free events </p>
          </span>
          <span className="flex gap-2 items-center">
            <img src="/images/CheckmarkIcon.png" alt="checkmark-icon" />
            <p className="leading-6">Large discounts </p>
          </span>
        </div>
        <div className="flex gap-8 bg-white w-full md:w-[472px]">
          <input
            type="email"
            placeholder="your@email.com"
            className="bg-transparent flex-1 p-3 outline-none"
          />
          <button className="btn-small bg-[var(--primary-color)]">
            {" "}
            Sign up
          </button>
        </div>
      </div>
      <div className="bg-[var(--primary-color)] md:px-20 gap-10 px-6 flex-wrap pt-[58px] pb-[25px] flex justify-between">
        <div className="flex flex-col gap-5 text-[var(--white)] order-2 md:order-1">
          <h4 className="leading-[19.68px]">Menu</h4>
          <p className="leading-[18.9px] text-sm">New arrivals</p>
          <p className="leading-[18.9px] text-sm">Best Sellers</p>
          <p className="leading-[18.9px] text-sm">Recently Viewed</p>
          <p className="leading-[18.9px] text-sm">Popular this week</p>
          <p className="leading-[18.9px] text-sm">All products</p>
        </div>
        <div className="flex flex-col gap-5 text-[var(--white)] order-1 md:order-2">
          <h4 className="leading-[19.68px]">Categories</h4>
          <p className="leading-[18.9px] text-sm">Crockery</p>
          <p className="leading-[18.9px] text-sm">Furniture</p>
          <p className="leading-[18.9px] text-sm">Homeware</p>
          <p className="leading-[18.9px] text-sm">Plant pots</p>
          <p className="leading-[18.9px] text-sm">Chairs</p>
        </div>
        <div className="flex flex-col gap-5 text-[var(--white)] order-3 md:order-3">
          <h4 className="leading-[19.68px]">Our company</h4>
          <p className="leading-[18.9px] text-sm">About us</p>
          <p className="leading-[18.9px] text-sm">Vacancies</p>
          <p className="leading-[18.9px] text-sm">Contact us</p>
          <p className="leading-[18.9px] text-sm">Privacy</p>
          <p className="leading-[18.9px] text-sm">Returns policy</p>
        </div>
        <div className="flex flex-col gap-8 order-4">
          <h4 className=" text-[var(--white)] leading-[19.68px]">
            Join our mailing list
          </h4>
          <div className="flex gap-8 bg-[var(--accent-color)] w-full md:w-[472px]">
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-transparent flex-1 p-3 outline-none text-white"
            />
            <button className="btn-small bg-[var(--white)] text-[var(--primary-color)]">
              {" "}
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[var(--primary-color)] md:px-20 px-6">
        <hr className="border-[var(--accent-color)] border mb-3" />
        <div className="flex justify-center md:justify-between items-center text-[var(--white)] pb-10 ">
          <p>copyright 2023 Avion Limited</p>
          <div className="md:flex items-center justify-between gap-5 hidden ">
            <img src="/images/LinkedinIcon.png" alt="linkedin-icon" />
            <img src="/images/FacebookIcon.png" alt="facebook-icon" />
            <img src="/images/Instagram.png" alt="instagram-icon" />
            <img src="/images/SkypeIcon.png" alt="skype-icon" />
            <img src="/images/TwitterIcon.png" alt="twitter-icon" />
            <img src="/images/PinterestIcon.png" alt="pinterest-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
