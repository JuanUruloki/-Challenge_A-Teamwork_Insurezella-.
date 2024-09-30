/**
 * The `Header` component in this JavaScript code is responsible for rendering a responsive navigation
 * bar with links and contact information.
 * @returns The `Header` component is being returned. It consists of a responsive header section with
 * navigation links, contact information, and a mobile menu toggle button. The header includes a logo,
 * contact details (email and phone), navigation links for Home, Find Insurance, Learn, and About, and
 * a "Call Us Now" button with an arrow icon. The mobile menu is displayed when the toggle button is
 * clicked
 */
"use client";
import Link from "next/link";
import { FaEnvelope, FaLongArrowAltRight, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  return (
    <div className="flex flex-col w-full h-auto font-texts relative z-10">
      <div className="flex flex-row h-24 2xl:h-16 px-4 bg-lightBlue justify-evenly items-center text-white 2xl:px-48">
        <div className="flex items-center text-xs md:text-base  2xl:text-xl 3xl:text-2xl relative">
          <div
            className="absolute 2xl:hidden w-36 h-36 mt-16  bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/logo.png)" }}
          />
          <button
            onClick={navbarToggleHandler}
            aria-label="Mobile Menu"
            className="flex flex-col ml-44 2xl:hidden items-center gap-1.5 p-2"
          >
            <div
              className={`w-10 h-1.5 bg-white rounded-full transition-transform duration-300 ${
                navbarOpen ? "rotate-45 translate-y-3" : ""
              }`}
            />
            <div
              className={`w-10 h-1.5 bg-white rounded-full transition-opacity duration-300 ${
                navbarOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`w-10 h-1.5 bg-white rounded-full transition-transform duration-300 ${
                navbarOpen ? "-rotate-45 -translate-y-3" : ""
              }`}
            />
          </button>
          <p className="ml-8 2xl:ml-0 2xl:mr-5">Want to Connect with us?</p>
        </div>
        <div className="flex text-xs font-textRegular 2xl:text-xl items-center justify-evenly">
          <FaEnvelope className=" hidden lg:block pr-2 text-xs md:text-base  xl:text-xl 3xl:text-2xl" />
          <p className="pr-6 2xl:text-xl">Mail us: support@insurzella.com</p>
          <FaPhoneAlt className="hidden lg:block pr-2 text-xs md:text-base  xl:text-xl 2xl:text-2xl" />
          <p className="xl:text-xl">Call us: (877) 227 0774</p>
        </div>
      </div>

      <div className="hidden 2xl:flex h-20 w-full bg-white justify-evenly items-center flex-wrap">
        <div
          className="w-16 h-16 rounded-xl bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/logo.png)" }}
        />
        <div className="flex w-1/2 md:w-1/3 justify-evenly">
          <Link
            href="/"
            className="hover:underline hover:underline-offset-4 hover:text-midBlue"
          >
            Home
          </Link>
          <p>|</p>
          <Link
            href="/"
            className="hover:underline hover:underline-offset-4 hover:text-midBlue"
          >
            Find Insurance
          </Link>
          <p>|</p>
          <Link
            href="/"
            className="hover:underline hover:underline-offset-4 hover:text-midBlue"
          >
            Learn
          </Link>
          <p>|</p>
          <Link
            href="/"
            className="hover:underline hover:underline-offset-4 hover:text-midBlue"
          >
            About
          </Link>
        </div>
        <button className="flex items-center justify-evenly h-14 w-40 bg-midBlue rounded-full shadow-button 2xl:text-base text-white font-texts hover:bg-lightBlue">
          Call Us Now
          <FaLongArrowAltRight />
        </button>
      </div>

      <div
        className={`absolute flex flex-col ml-56 mt-24 w-max border-8 border-lightBlue bg-lightBlue 2xl:hidden ${
          navbarOpen ? "block" : "hidden"
        } bg-lightBlue`}
      >
        <Link
          href="/"
          className="py-2 px-4 hover:bg-darkBlue text-white"
          onClick={closeNavbar}
        >
          Home
        </Link>
        <Link
          href="/"
          className="py-2 px-4 hover:bg-darkBlue text-white"
          onClick={closeNavbar}
        >
          Find Insurance
        </Link>
        <Link
          href="/"
          className="py-2 px-4 hover:bg-darkBlue text-white"
          onClick={closeNavbar}
        >
          Learn
        </Link>
        <Link
          href="/"
          className="py-2 px-4 hover:bg-darkBlue text-white"
          onClick={closeNavbar}
        >
          About
        </Link>
      </div>

      <div className="h-4 hidden 2xl:flex w-full bg-blue-50" />
    </div>
  );
};

export default Header;
