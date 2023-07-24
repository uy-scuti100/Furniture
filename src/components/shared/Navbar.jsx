import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { navItems } from "../../utils/NavItems";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const handleSearch = () => {
    setIsSearchBarOpen((prev) => !prev);
    setIsMobileNavOpen(false);
  };
  const toggle = () => {
    setIsMobileNavOpen((prev) => !prev);
    setIsSearchBarOpen(false);
  };
  return (
    <nav>
      <div className="w-full bg-[var(--white)] hidden md:block pb-[2px]">
        <div className="p-6 justify-between items-center flex  ">
          <span>
            <img
              src="/images/SearchIcon.png"
              alt="search=icon"
              onClick={handleSearch}
              className="pulse transition-all duration-500 ease-in-out"
            />
          </span>
          <Link to="/">
            <span className="cursor-pointer text-[24px leading-[30px]">
              {" "}
              Avion
            </span>
          </Link>
          <span className="flex gap-5">
            <img src="/images/CartIcon.png" alt="cart-icon" />
            <img src="/images/UserIcon.png" alt="user-icon" />
          </span>
        </div>
        <hr className="mx-6 my-1" />

        <div className="flex justify-center gap-[44px] items-center text-[var(--nav-color)] py-4">
          {navItems.map((nav, i) => (
            <li
              className="list-none hover:text-[var(--primary-color)] hover:-translate-y-[3px] translation-all duration-300 ease-in-out"
              key={i}
            >
              <Link to="/">{nav}</Link>
            </li>
          ))}
        </div>
        <div className="hidden md:block">
          {isSearchBarOpen && (
            <SearchBar
              handleSearch={handleSearch}
              isSearchBarOpen={isSearchBarOpen}
            />
          )}
        </div>
      </div>
      {/* mobile nav */}

      <div>
        <div className="w-full bg-[var(--white)] h-[69px] md:hidden p-6 flex items-center justify-between">
          <Link to="/">
            <span className="cursor-pointer  text-[24px leading-[30px]">
              {" "}
              Avion
            </span>
          </Link>
          <span className="flex items-center gap-5">
            <img
              src="/images/SearchIcon.png"
              alt="seearch-icon"
              className="cursor-pointer"
              onClick={handleSearch}
            />
            <img
              src={
                isMobileNavOpen
                  ? "/images/CloseIcon.png"
                  : "/images/MenuIcon.png"
              }
              alt="menu-icon"
              className="cursor-pointer"
              onClick={toggle}
            />
          </span>
        </div>
        {isMobileNavOpen && (
          <div
            className={
              isMobileNavOpen
                ? "w-full mobile-link translate-y-0 p-6 flex flex-col gap-8 bg-[var(--light-gray)] tracking-[1px] text-[var(--nav-color)] mt-[1px]"
                : "h-0 opacity-0 -translate-y-[1000px] duration-300"
            }
          >
            {navItems.map((nav, i) => (
              <li
                className="list-none hover:text-[var(--primary-color)] hover:translate-x-[3px] translation-all duration-300 ease-in-out"
                key={i}
              >
                <Link to="/">{nav}</Link>
              </li>
            ))}
          </div>
        )}

        <div className="md:hidden">
          {isSearchBarOpen && <SearchBar handleSearch={handleSearch} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
