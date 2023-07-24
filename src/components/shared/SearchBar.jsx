import React from "react";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="my-[1px] border-[var(--primary-color)] border w-full h-[50px] p-3 bg-[var(--white)] px-1 flex gap-5 justify-between items-center ">
      <input
        type="text"
        className="flex-1 bg-transparent p-2 text-[var(--nav-color)] outline-none placeholder:text-[var(--nav-color)]"
        placeholder="Search for products"
      />
      <img
        src="/images/CloseIcon.png"
        alt="close-icon"
        className="cursor-pointer"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
