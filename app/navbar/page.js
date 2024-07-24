"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowLeft,
  faArrowRight,
  faCartArrowDown,
  faEnvelope,
  faHeart,
  faMagnifyingGlass,
  faPersonBreastfeeding,
  faPhone,
  faTrademark,
  faInstagram,
  faLocationDot,
  faPlane,
  faPaperPlane,
  faSortDown,
  faStar,
  faTimes,
  faSearch,
  faA,
  faBars,
  faCartShopping,
  faCaretDown,
  faEye,
  faComment,
  faCommentDots,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Login from "../login/page";

const Navbar = () => {
  const [advertisementText, setAdvertisementText] = useState(
    "SALE: Get 20% off on selected items!"
  );

  useEffect(() => {
    const advertisementTexts = [
      "SALE: Get best Discount on selected items!",
      "Limited Time Offer: Shop now and save!",
    ];

    let currentIndex = 0;
    // Rotate the advertisement text every 2 seconds
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % advertisementTexts.length;
      setAdvertisementText(advertisementTexts[currentIndex]);
    }, 4000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const [first, setfirst] = useState(false);

  const openLogin = () => {
    setfirst(!first);
  };

  return (
    <nav className="bg-white border border-gray-100 dark:bg-gray-900 fixed top-0 w-full z-10 font">
      {/* Black strip for sale advertisement */}
      <style jsx>{`
        @keyframes moveText {
          0% {
            transform: translateX(-100%);
          } /* Start off-screen to the right */
          100% {
            transform: translateX(100%);
          } /* Move to off-screen to the left */
        }
        .advertisement-text-animation {
          animation: moveText 20s linear infinite;
        }

        @keyframes moveBackground {
          0% {
            transform: translateX(-100%);
          } /* Start off-screen to the right */
          100% {
            transform: translateX(100%);
          } /* Move to off-screen to the left */
        }
        .advertisement-background-animation {
          animation: moveBackground 10s linear infinite;
        }
      `}</style>

      {/*         <div className="relative bg-orange-50">
      <div className="absolute   advertisement-background-animation "></div>
      <div className="font-normal  text-orange-700 p-1 text-xs lg:text-lg md:text-md text-center  advertisement-text-animation ">
        <p>{advertisementText}</p>
      </div>
    </div>    */}
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link
          href={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/shreya.png"
            className="h-44 w-auto absolute left-0"
            alt="company Logo"
          />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            {isMenuOpen ? (
              <FontAwesomeIcon
                icon={faTimes}
                className="z-50   absolute right-4 top-4 text-orange-600 bg-orange-200 rounded-xl p-2"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="text-orange-600 bg-orange-200 rounded-xl p-2"
              />
            )}
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "flex" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium absolute right-0 md:relative lg:relative  md:p-0  border border-gray-100 rounded-lg  bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0  md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 w-full top-0 text-left  pt-12 pb-6">
            <li className="relative">
              <Link
                href={"/"}
                className="block py-2 px-3 md:p-0 rounded md:bg-transparent text-orange-600"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="relative ">
              <Link
                href={"/"}
                className="block py-2 px-3 md:p-0 rounded md:bg-transparent md:dark:text-blue-500 lg:ml-4 hover:text-orange-600"
                aria-current="page"
              >
                Shop
              </Link>
            </li>
            <li className="relative group">
              <Link
                href={"/"}
                className="block py-2 px-3 md:p-0 rounded md:bg-transparent md:dark:text-blue-500 lg:ml-4 hover:text-orange-600 relative"
              >
                Pages
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="absolute ml-2 mt-1 transform -translate-x-1/2 transition-transform duration-300 group-hover:rotate-180"
                />
              </Link>

              <ul className="relative   lg:absolute md:absolute  text-center align-middle hidden group-hover:block bg-gray-100 -mt-0 rounded-md shadow-lg w-28 lg:-ml-5 md:-ml-5 ">
                <li>
                  <Link
                    href={"/"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
                  >
                    Page 1
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
                  >
                    Page 2
                  </Link>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <Link
                href={"/"}
                className="block py-2 px-3 md:p-0 rounded md:bg-transparent md:dark:text-blue-500 lg:ml-4 hover:text-orange-600 relative"
              >
                blog
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="absolute ml-2 mt-1 transform -translate-x-1/2 transition-transform duration-300 group-hover:rotate-180"
                />
              </Link>

              <ul className="relative   lg:absolute md:absolute  text-center align-middle hidden group-hover:block bg-gray-100 -mt-0 rounded-md shadow-lg w-28 lg:-ml-5 md:-ml-5 ">
                <li>
                  <Link
                    href={"/"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
                  >
                    Blog 1
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
                  >
                    Blog 2
                  </Link>
                </li>
              </ul>
            </li>

            <li className="relative">
              <Link
                href={"/"}
                className="block py-2 px-3 md:p-0 rounded md:bg-transparent md:dark:text-blue-500 lg:ml-4 hover:text-orange-600"
              >
                Contact
              </Link>
            </li>
          </ul>
          {first && <Login />}
          <div className="flex absolute  md:right-0  p-2 rounded-md">
            <div className="flex -ml-3">
              <li className="relative group list-none">
                <Link
                  href={"/"}
                  className=""
                >
                  <FontAwesomeIcon icon={faUser} className="text-orange-700 mr-2 w-5 h-5"/>
                </Link>

                <ul className="relative   lg:absolute md:absolute  text-center align-middle hidden group-hover:block bg-gray-100 lg:-mt-0 md:-mt-0 mt-8 -ml-4 rounded-md shadow-lg w-28 lg:-ml-9 md:-ml-8 ">
                  <li
                    className=" block cursor-pointer px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
                    onClick={openLogin}
                  >
                    Login
                  </li>
                  <li>
                    <Link
                      href={"/"}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
              <FontAwesomeIcon
                icon={faSearch}
                className="text-orange-700 mr-2 w-5 h-5"
              />
              <FontAwesomeIcon
                icon={faHeart}
                className="text-orange-700 mr-2 w-5 h-5"
              />
              <FontAwesomeIcon
                icon={faCartArrowDown}
                className="text-orange-700 mr-2 w-5 h-5"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
