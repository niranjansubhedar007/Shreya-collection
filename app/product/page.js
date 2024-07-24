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
  faCaretUp,
  faCartShopping,
  faCaretDown,
  faEye,
  faComment,
  faCommentDots,
  faStarHalfStroke,
  faWallet,
  faClockRotateLeft,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import Review from "../review/page";

const ProductPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenStyle, setIsOpenStyle] = useState(false);
  const [isOpenSize, setIsOpenSize] = useState(false);
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const [isOpenSpecial, setIsOpenSpecial] = useState(false);
  const [isOpenMaterial, setIsOpenMaterial] = useState(false);
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleInfo = () => {
    setIsOpenInfo(!isOpenInfo);
  };
  const toggleStyle = () => {
    setIsOpenStyle(!isOpenStyle);
  };
  const toggleSize = () => {
    setIsOpenSize(!isOpenSize);
  };
  const toggleSpecial = () => {
    setIsOpenSpecial(!isOpenSpecial);
  };
  const toggleMaterial = () => {
    setIsOpenMaterial(!isOpenMaterial);
  };

  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font bg-white mt-7  font">
        <div className="container px-2 py-12 mx-auto flex flex-col lg:flex-row ">
          <div className="lg:w-96 p-5 lg:text-left text-center flex flex-col  ">
            <div className="flex border-b border-gray-300 pb-2 w-full">
              <span>
                {" "}
                <FontAwesomeIcon icon={faShuffle} />
              </span>
              <p className="ml-4 font-semibold text-xl ">FILTER</p>
            </div>
            <div className="">
              <div className="border-b border-gray-300 pb-2 mt-2">
                <div
                  className="flex flex-col justify-start  text-black font-semibold cursor-pointer"
                  onClick={toggleSize}
                >
                  <p className="flex mb-2 justify-start lg:text-base md:text-md text-md">SIZE & FIT</p>

                  <div className="flex flex-col lg:text-md md:text-md text-sm">
                    <label className="inline-flex items-center mr-4 mb-1">
                      <input
                        type="checkbox"
                        className=" h-3 w-3 text-indigo-600"
                      />
                      <span className="ml-3 text-gray-700">XS (448)</span>
                    </label>
                    <label className="inline-flex items-center mr-4 mb-1">
                      <input
                        type="checkbox"
                        className=" h-3 w-3 text-indigo-600"
                      />
                      <span className="ml-3 text-gray-700">S (510)</span>
                    </label>
                    <label className="inline-flex items-center mr-4 mb-1">
                      <input
                        type="checkbox"
                        className=" h-3 w-3 text-indigo-600"
                      />
                      <span className="ml-3 text-gray-700">M (447)</span>
                    </label>
                    <label className="inline-flex items-center mr-4 mb-1">
                      <input
                        type="checkbox"
                        className=" h-3 w-3 text-indigo-600"
                      />
                      <span className="ml-3 text-gray-700">L (376)</span>
                    </label>
                    <label className="inline-flex items-center mr-4 mb-1">
                      <input
                        type="checkbox"
                        className=" h-3 w-3 text-indigo-600"
                      />
                      <span className="ml-3 text-gray-700">XL (310)</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-300 pb-2 mt-2">
                <div
                  className="flex justify-between items-center text-black font-semibold cursor-pointer 
                  lg:text-base md:text-md text-md"
                  onClick={toggleDropdown}
                >
                  <p>DISCRIPTION</p>
                  <FontAwesomeIcon
                    icon={isOpen ? faCaretUp : faCaretDown}
                    className={`mt-1 transition-transform duration-500 transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {isOpen && (
                    <div className="text-gray-500 mt-2 pl-0 text-left lg:text-base md:text-base text-sm">
                      {/* Dropdown Content Goes Here */}
                      {/* Example Content */}
                      <p
                        className={`transition-opacity duration-500 ${
                          isOpen ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        Our pink straight-fit floral print kurta, crafted in
                        elegant crepe fabric features a notched neckline,
                        three-quarter sleeves, and a statement yoke. Highlighted
                        with ethnic print, this refreshing style is perfect for
                        casual outings.{" "}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="border-b border-gray-300 pb-2 mt-2">
                <div
                  className="flex justify-between items-center text-black font-semibold cursor-pointer lg:text-base md:text-base text-md"
                  onClick={toggleStyle}
                >
                  <p>STYLE NOTES</p>
                  <FontAwesomeIcon
                    icon={isOpenStyle ? faCaretUp : faCaretDown}
                    className={`mt-1 transition-transform duration-500 transform ${
                      isOpenStyle ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpenStyle
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {isOpenStyle && (
                    <div className="text-gray-500 mt-2 pl-0 text-left lg:text-base md:text-base text-sm">
                      {/* Dropdown Content Goes Here */}
                      {/* Example Content */}
                      <p
                        className={`transition-opacity duration-500 ${
                          isOpenStyle ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        Accessorise with silver jhumki earrings, a box clutch
                        bag, and slip-on heels to complete the look{" "}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="border-b border-gray-300 pb-2 mt-2">
                <div
                  className="flex justify-between items-center text-black font-semibold cursor-pointer lg:text-base md:text-base text-md"
                  onClick={toggleMaterial}
                >
                  <p>MATERIAL</p>
                  <FontAwesomeIcon
                    icon={isOpenMaterial ? faCaretUp : faCaretDown}
                    className={`mt-1 transition-transform duration-500 transform ${
                      isOpenMaterial ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpenMaterial
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {isOpenMaterial && (
                    <div className="text-gray-500 mt-2 pl-0 text-left lg:text-base md:text-base text-sm">
                      {/* Dropdown Content Goes Here */}
                      {/* Example Content */}
                      <p
                        className={`transition-opacity duration-500 ${
                          isOpenMaterial ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <ol className=" list-disc ml-6">
                          <li>Top Fabric: Pure Cotton</li>
                          <li>Bottom Fabric: Pure Cotton</li>
                          <li>Dupatta Fabric: Pure Cotton</li>
                          <li>Gentle Machine Wash</li>
                        </ol>
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="border-b border-gray-300 pb-2 mt-2">
                <div
                  className="flex justify-between items-center text-black font-semibold cursor-pointer lg:text-base md:text-base text-md"
                  onClick={toggleSpecial}
                >
                  <p>SPECIFICATIONS</p>
                  <FontAwesomeIcon
                    icon={isOpenSpecial ? faCaretUp : faCaretDown}
                    className={`mt-1 transition-transform duration-500 transform ${
                      isOpenSpecial ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpenSpecial
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {isOpenSpecial && (
                    <div className="text-gray-500 mt-2 pl-0 text-left lg:text-base md:text-base text-sm">
                      {/* Dropdown Content Goes Here */}
                      {/* Example Content */}
                      <p
                        className={`transition-opacity duration-500 ${
                          isOpenSpecial ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <ol className=" list-disc ml-6">
                          <li>Color: Grey</li>
                          <li>Top Shape: Straight</li>
                          <li>Top Type: Kurta</li>
                          <li>Bottom Type: Salwar</li>
                          <li>Dupatta: With Dupatta</li>
                          <li>Top Pattern: Printed</li>
                          <li>Sleeve Length: Three-Quarter Sleeves</li>
                          <li>Neck: Sweetheart Neck</li>
                          <li>Top Length: Calf Length</li>
                          <li>Print or Pattern: Paisley Print</li>
                          <li>Bottom Pattern: Printed</li>
                          <li>Waistband: Elasticated</li>
                          <li>Dupatta Pattern: Printed</li>
                          <li>Hemline: Straight</li>
                          <li>Weave Type: Machine Weave</li>
                          <li>Occasion: Daily Wear</li>
                        </ol>
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="border-b border-gray-300 pb-2 mt-2">
                <div
                  className="flex justify-between items-center text-black font-semibold cursor-pointer lg:text-base md:text-base text-md"
                  onClick={toggleInfo}
                >
                  <p>SELLER INFORMATION</p>
                  <FontAwesomeIcon
                    icon={isOpenInfo ? faCaretUp : faCaretDown}
                    className={`mt-1 transition-transform duration-500 transform ${
                      isOpenInfo ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpenInfo
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {isOpenInfo && (
                    <div className="text-gray-500 mt-2 pl-0 text-left lg:text-base md:text-base text-sm">
                      {/* Dropdown Content Goes Here */}
                      {/* Example Content */}
                      <p
                        className={`transition-opacity duration-500 ${
                          isOpenInfo ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        Zivore Apparel Private Limited B 005, Sector 85, Noida,
                        Gautam Buddha Nagar, Uttar Pradesh, 201301 Country Of
                        <br /> Origin : India{" "}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full">
            <div
              className="p-1.5 shadow-md lg:p-4 md:p-3 relative"
              style={{ backgroundColor: "#ffffff" }}
            >
              <Link
                href={"/shoppingCart"}
                className="block relative rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center h-full  w-full"
                  src="/demo.webp"
                />
                {/* Overlay div for hover effect */}
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center h-full  w-full"
                    src="/demo1.jpg"
                  />
                </div>
              </Link>
              <div className="mt-2">
                <div className="flex justify-between">
                  <h2 className="text-gray-900 title-font lg:text-lg text-sm font-medium">
                    The 400 Blows
                  </h2>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-gray-300 hover:text-red-500  w-5 h-5 "
                  />
                </div>
                <div className="flex">
                  <p className="mt-2 line-through text-gray-400 text-xs">
                    ₹1,999
                  </p>
                  <p className="mt-1 ml-2">₹1,840</p>
                  <p className="mt-1 text-red-600 ml-3 lg:ml-auto md:ml-auto text-xs lg:text-base md:text-base justify-end flex">
                    58% off
                  </p>
                </div>
                <div className="flex mt-2 lg:justify-start justify-center md:justify-start">
                  <p className="">XS</p>
                  <p className="ml-2">S</p>
                  <p className="ml-2 text-gray-300">M</p>
                  <p className="ml-2">L</p>
                  <p className="ml-2 text-gray-300">XL</p>
                </div>
              </div>
            </div>
            <div
              className="p-0 shadow-md lg:p-4 md:p-3 relative"
              style={{ backgroundColor: "#ffffff" }}
            >
              <Link
                href={"/shoppingCart"}
                className="block relative rounded overflow-hidden"
              >
              <img
              alt="ecommerce"
              className="object-cover object-center h-full  w-full"
              src="/demo.webp"
            />
            {/* Overlay div for hover effect */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <img
                alt="ecommerce"
                className="object-cover object-center h-full  w-full"
                src="/demo1.jpg"
              />
                </div>
              </Link>
              <div className="mt-2">
                <div className="flex justify-between">
                  <h2 className="text-gray-900 title-font lg:text-lg text-sm font-medium">
                    The 400 Blows
                  </h2>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-gray-300 hover:text-red-500  w-5 h-5 "
                  />
                </div>
                <div className="flex">
                  <p className="mt-2 line-through text-gray-400 text-xs">
                    ₹1,999
                  </p>
                  <p className="mt-1 ml-2">₹1,840</p>
                  <p className="mt-1 text-red-600 ml-3 lg:ml-auto md:ml-auto text-xs lg:text-base md:text-base justify-end flex">
                    58% off
                  </p>
                </div>
                <div className="flex mt-2 lg:justify-start justify-center md:justify-start">
                  <p className="">XS</p>
                  <p className="ml-2">S</p>
                  <p className="ml-2 text-gray-300">M</p>
                  <p className="ml-2">L</p>
                  <p className="ml-2 text-gray-300">XL</p>
                </div>
              </div>
            </div>
            <div
              className="p-0 shadow-md lg:p-4 md:p-3 relative"
              style={{ backgroundColor: "#ffffff" }}
            >
              <Link
                href={"/"}
                className="block relative rounded overflow-hidden"
              >
              <img
              alt="ecommerce"
              className="object-cover object-center h-full  w-full"
              src="/demo.webp"
            />
            {/* Overlay div for hover effect */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <img
                alt="ecommerce"
                className="object-cover object-center h-full  w-full"
                src="/demo1.jpg"
              />
                </div>
              </Link>
              <div className="mt-2">
                <div className="flex justify-between">
                  <h2 className="text-gray-900 title-font lg:text-lg text-sm font-medium">
                    The 400 Blows
                  </h2>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-gray-300 hover:text-red-500  w-5 h-5 "
                  />
                </div>
                <div className="flex">
                  <p className="mt-2 line-through text-gray-400 text-xs">
                    ₹1,999
                  </p>
                  <p className="mt-1 ml-2">₹1,840</p>
                  <p className="mt-1 text-red-600 ml-3 lg:ml-auto md:ml-auto text-xs lg:text-base md:text-base justify-end flex">
                    58% off
                  </p>
                </div>
                <div className="flex mt-2 lg:justify-start justify-center md:justify-start">
                  <p className="">XS</p>
                  <p className="ml-2">S</p>
                  <p className="ml-2 text-gray-300">M</p>
                  <p className="ml-2">L</p>
                  <p className="ml-2 text-gray-300">XL</p>
                </div>
              </div>
            </div>
            <div
              className="p-0 shadow-md lg:p-4 md:p-3 relative"
              style={{ backgroundColor: "#ffffff" }}
            >
              <Link
                href={"/"}
                className="block relative rounded overflow-hidden"
              >
              <img
              alt="ecommerce"
              className="object-cover object-center h-full  w-full"
              src="/demo.webp"
            />
            {/* Overlay div for hover effect */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <img
                alt="ecommerce"
                className="object-cover object-center h-full  w-full"
                src="/demo1.jpg"
              />
                </div>
              </Link>
              <div className="mt-2">
                <div className="flex justify-between">
                  <h2 className="text-gray-900 title-font lg:text-lg text-sm font-medium">
                    The 400 Blows
                  </h2>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-gray-300 hover:text-red-500  w-5 h-5 "
                  />
                </div>
                <div className="flex">
                  <p className="mt-2 line-through text-gray-400 text-xs">
                    ₹1,999
                  </p>
                  <p className="mt-1 ml-2">₹1,840</p>
                  <p className="mt-1 text-red-600 ml-3 lg:ml-auto md:ml-auto text-xs lg:text-base md:text-base justify-end flex">
                    58% off
                  </p>
                </div>
                <div className="flex mt-2 lg:justify-start justify-center md:justify-start">
                  <p className="">XS</p>
                  <p className="ml-2">S</p>
                  <p className="ml-2 text-gray-300">M</p>
                  <p className="ml-2">L</p>
                  <p className="ml-2 text-gray-300">XL</p>
                </div>
              </div>
            </div>
            <div
              className="p-0 shadow-md lg:p-4 md:p-3 relative"
              style={{ backgroundColor: "#ffffff" }}
            >
              <Link
                href={"/"}
                className="block relative rounded overflow-hidden"
              >
              <img
              alt="ecommerce"
              className="object-cover object-center h-full  w-full"
              src="/demo.webp"
            />
            {/* Overlay div for hover effect */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <img
                alt="ecommerce"
                className="object-cover object-center h-full  w-full"
                src="/demo1.jpg"
              />
                </div>
              </Link>
              <div className="mt-2">
                <div className="flex justify-between">
                  <h2 className="text-gray-900 title-font lg:text-lg text-sm font-medium">
                    The 400 Blows
                  </h2>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-gray-300 hover:text-red-500  w-5 h-5 "
                  />
                </div>
                <div className="flex">
                  <p className="mt-2 line-through text-gray-400 text-xs">
                    ₹1,999
                  </p>
                  <p className="mt-1 ml-2">₹1,840</p>
                  <p className="mt-1 text-red-600 ml-3 lg:ml-auto md:ml-auto text-xs lg:text-base md:text-base justify-end flex">
                    58% off
                  </p>
                </div>
                <div className="flex mt-2 lg:justify-start justify-center md:justify-start">
                  <p className="">XS</p>
                  <p className="ml-2">S</p>
                  <p className="ml-2 text-gray-300">M</p>
                  <p className="ml-2">L</p>
                  <p className="ml-2 text-gray-300">XL</p>
                </div>
              </div>
            </div>
            <div
              className="p-0 shadow-md lg:p-4 md:p-3 relative"
              style={{ backgroundColor: "#ffffff" }}
            >
              <Link
                href={"/"}
                className="block relative rounded overflow-hidden"
              >
              <img
              alt="ecommerce"
              className="object-cover object-center h-full  w-full"
              src="/demo.webp"
            />
            {/* Overlay div for hover effect */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <img
                alt="ecommerce"
                className="object-cover object-center h-full  w-full"
                src="/demo1.jpg"
              />
                </div>
              </Link>
              <div className="mt-2">
                <div className="flex justify-between">
                  <h2 className="text-gray-900 title-font lg:text-lg text-sm font-medium">
                    The 400 Blows
                  </h2>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-gray-300 hover:text-red-500  w-5 h-5 "
                  />
                </div>
                <div className="flex">
                  <p className="mt-2 line-through text-gray-400 text-xs">
                    ₹1,999
                  </p>
                  <p className="mt-1 ml-2">₹1,840</p>
                  <p className="mt-1 text-red-600 ml-3 lg:ml-auto md:ml-auto text-xs lg:text-base md:text-base justify-end flex">
                    58% off
                  </p>
                </div>
                <div className="flex mt-2 lg:justify-start justify-center md:justify-start">
                  <p className="">XS</p>
                  <p className="ml-2">S</p>
                  <p className="ml-2 text-gray-300">M</p>
                  <p className="ml-2">L</p>
                  <p className="ml-2 text-gray-300">XL</p>
                </div>
              </div>
            </div>
            <div
              className="p-0 shadow-md lg:p-4 md:p-3 relative"
              style={{ backgroundColor: "#ffffff" }}
            >
              <Link
                href={"/"}
                className="block relative rounded overflow-hidden"
              >
              <img
              alt="ecommerce"
              className="object-cover object-center h-full  w-full"
              src="/demo.webp"
            />
            {/* Overlay div for hover effect */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <img
                alt="ecommerce"
                className="object-cover object-center h-full  w-full"
                src="/demo1.jpg"
              />
                </div>
              </Link>
              <div className="mt-2">
                <div className="flex justify-between">
                  <h2 className="text-gray-900 title-font lg:text-lg text-sm font-medium">
                    The 400 Blows
                  </h2>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-gray-300 hover:text-red-500  w-5 h-5 "
                  />
                </div>
                <div className="flex">
                  <p className="mt-2 line-through text-gray-400 text-xs">
                    ₹1,999
                  </p>
                  <p className="mt-1 ml-2">₹1,840</p>
                  <p className="mt-1 text-red-600 ml-3 lg:ml-auto md:ml-auto text-xs lg:text-base md:text-base justify-end flex">
                    58% off
                  </p>
                </div>
                <div className="flex mt-2 lg:justify-start justify-center md:justify-start">
                  <p className="">XS</p>
                  <p className="ml-2">S</p>
                  <p className="ml-2 text-gray-300">M</p>
                  <p className="ml-2">L</p>
                  <p className="ml-2 text-gray-300">XL</p>
                </div>
              </div>
            </div>
            <div
              className="p-0 shadow-md lg:p-4 md:p-3 relative"
              style={{ backgroundColor: "#ffffff" }}
            >
              <Link
                href={"/"}
                className="block relative rounded overflow-hidden"
              >
              <img
              alt="ecommerce"
              className="object-cover object-center h-full  w-full"
              src="/demo.webp"
            />
            {/* Overlay div for hover effect */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <img
                alt="ecommerce"
                className="object-cover object-center h-full  w-full"
                src="/demo1.jpg"
              />
                </div>
              </Link>
              <div className="mt-2">
                <div className="flex justify-between">
                  <h2 className="text-gray-900 title-font lg:text-lg text-sm font-medium">
                    The 400 Blows
                  </h2>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-gray-300 hover:text-red-500  w-5 h-5 "
                  />
                </div>
                <div className="flex">
                  <p className="mt-2 line-through text-gray-400 text-xs">
                    ₹1,999
                  </p>
                  <p className="mt-1 ml-2">₹1,840</p>
                  <p className="mt-1 text-red-600 ml-3 lg:ml-auto md:ml-auto text-xs lg:text-base md:text-base justify-end flex">
                    58% off
                  </p>
                </div>
                <div className="flex mt-2 lg:justify-start justify-center md:justify-start">
                  <p className="">XS</p>
                  <p className="ml-2">S</p>
                  <p className="ml-2 text-gray-300">M</p>
                  <p className="ml-2">L</p>
                  <p className="ml-2 text-gray-300">XL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-10">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default ProductPage;
