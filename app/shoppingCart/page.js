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
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import Review from "../review/page";

const Shoppingcart = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [isSoldOut, setIsSoldOut] = useState(false);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(2); // Start with the second image in the second slider
  const images1 = ["/kurta1.jpg", "/kurta2.jpg", "/kurta3.jpg", "/kurta4.jpg"];
  const images2 = ["/kurta5.jpg", "/kurta6.jpg", "/kurta7.jpg", "/kurta8.jpg"];
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
  const totalImages = images1.length + images2.length;

  const handlePrevClick = () => {
    setCurrentIndex1((prevIndex) => Math.max(prevIndex - 2, 0));
    setCurrentIndex2((prevIndex) => Math.max(prevIndex - 2, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex1((prevIndex) =>
      Math.min(prevIndex + 2, images1.length - 1)
    );
    setCurrentIndex2((prevIndex) =>
      Math.min(prevIndex + 2, images2.length - 1)
    );
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    if (size === "XXL") {
      setIsSoldOut(true);
    } else {
      setIsSoldOut(false);
    }
  };
  const sizeChart = [
    { size: "XS", length: "28", chest: "36", waist: "32" },
    { size: "S", length: "28", chest: "38", waist: "34" },
    { size: "M", length: "29", chest: "40", waist: "36" },
    { size: "L", length: "29", chest: "42", waist: "38" },
    { size: "XL", length: "30", chest: "44", waist: "40" },
    { size: "XXL", length: "30", chest: "46", waist: "42" },
  ];
  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font bg-white mt-7  font-sans font">
        <div className="container px-2 py-12 mx-auto flex flex-col lg:flex-row ">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:w-3/4 lg:grid-cols-2 gap-4  ">
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
                  src="/demo1.jpg"
                  />
                {/* Overlay div for hover effect */}
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center h-full  w-full"
                    src="/demo.webp"
                  />
                </div>
              </Link>
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
              src="/demo1.jpg"
              />
            {/* Overlay div for hover effect */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <img
                alt="ecommerce"
                className="object-cover object-center h-full  w-full"
                src="/demo.webp"
              />
                </div>
              </Link>
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
              src="/demo1.jpg"
              />
            {/* Overlay div for hover effect */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <img
                alt="ecommerce"
                className="object-cover object-center h-full  w-full"
                src="/demo.webp"
              />
                </div>
              </Link>
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
              src="/demo1.jpg"
              />
            {/* Overlay div for hover effect */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <img
                alt="ecommerce"
                className="object-cover object-center h-full  w-full"
                src="/demo.webp"
              />
                </div>
              </Link>
            </div>
          </div>

          <div className="lg:w-5/12 lg:pl-1 lg:text-left text-center flex flex-col min-h-screen ">
            <h2 className="text-gray-900 title-font lg:text-4xl md:text-2xl text-xl mt-2 font-semibold  mb-2">
              White Printed Cotton Straight Kurta With Dupatta
            </h2>
            {/* Reviews and Price */}
            <div className="flex justify-center lg:justify-start lg:mb-2 md:mb-2 mb-1">
              <div className="flex items-center mr-4">
                <FontAwesomeIcon
                  icon={faStar}
                  className="w-4 h-4 mt-1 text-orange-500"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="w-4 h-4 mt-1 text-orange-500"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="w-4 h-4 mt-1 text-orange-500"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="w-4 h-4 mt-1 text-orange-500"
                />
                <FontAwesomeIcon
                  icon={faStarHalfStroke}
                  className="w-4 h-4 mt-1 text-orange-500"
                />
                <p className="ml-2 text-gray-500 mt-1 lg:text-base md:text-base text-sm">
                  177 REVIEWS
                </p>
              </div>
            </div>
            {/* Price */}
            <div className="flex justify-center lg:justify-start mb-2">
              <p className="line-through lg:text-xl md:text-xl text-base text-gray-400 ml-1">
                ₹1,999
              </p>
              <p className="lg:text-xl md:text-xl text-base font-semibold ml-4">
                ₹1,840
              </p>
              <p className="lg:text-sm md:text-sm text-xs text-red-600 lg:ml-3 md:ml-3 ml-1 mt-1">
                58% off
              </p>
            </div>
            {/* Sizes */}
            <div className="sm:flex justify-center lg:justify-start mb-3  lg:flex ">
              <div className="flex justify-center lg:justify-start ">
                <span
                  onClick={() => handleSizeClick("XS")}
                  className={`flex items-center justify-center rounded-full border lg:text-base md:text-base text-xs  w-8 h-8 lg:w-12 lg:h-12 md:w-12 md:h-12 border-orange-500 mr-2 ${
                    selectedSize === "XS" ? "bg-orange-200" : "bg-white"
                  } text-orange-600 font-bold cursor-pointer `}
                >
                  XS
                </span>
                <span
                  onClick={() => handleSizeClick("S")}
                  className={`flex items-center justify-center rounded-full border border-orange-500 mr-2 ${
                    selectedSize === "S" ? "bg-orange-200" : "bg-white"
                  } text-orange-600 font-bold  lg:text-base md:text-base text-xs  w-8 h-8 lg:w-12 lg:h-12 md:w-12 md:h-12 cursor-pointer `}
                >
                  S
                </span>
                <span
                  onClick={() => handleSizeClick("M")}
                  className={`flex items-center justify-center rounded-full border border-orange-500 mr-2 ${
                    selectedSize === "M" ? "bg-orange-200" : "bg-white"
                  } text-orange-600 font-bold  lg:text-base md:text-base text-xs  w-8 h-8 lg:w-12 lg:h-12 md:w-12 md:h-12 cursor-pointer `}
                >
                  M
                </span>
                <span
                  onClick={() => handleSizeClick("L")}
                  className={`flex items-center justify-center rounded-full border border-orange-500 mr-2 ${
                    selectedSize === "L" ? "bg-orange-200" : "bg-white"
                  } text-orange-600 font-bold lg:text-base md:text-base text-xs  w-8 h-8 lg:w-12 lg:h-12 md:w-12 md:h-12 cursor-pointer `}
                >
                  L
                </span>
                <span
                  onClick={() => handleSizeClick("XL")}
                  className={`flex items-center justify-center rounded-full border border-orange-500 mr-2 ${
                    selectedSize === "XL" ? "bg-orange-200" : "bg-white"
                  } text-orange-600 font-bold  lg:text-base md:text-base text-xs  w-8 h-8 lg:w-12 lg:h-12 md:w-12 md:h-12 cursor-pointer `}
                >
                  XL
                </span>
                <span
                  onClick={() => handleSizeClick("XXL")}
                  className={`relative flex items-center justify-center rounded-full border border-orange-500 mr-2 ${
                    selectedSize === "XXL" ? "bg-orange-200" : "bg-white"
                  } text-orange-600 font-bold  lg:text-base md:text-base text-xs  w-8 h-8 lg:w-12 lg:h-12 md:w-12 md:h-12 cursor-pointer `}
                >
                  XXL
                  <span className="absolute lg:w-12 md:w-12 w-7  h-0.5 bg-orange-300 transform -rotate-45"></span>
                </span>
              </div>
              <div className="mt-2 ">
                <span className="text-gray-400">|</span>{" "}
                <span
                  className="text-xs text-gray-400 cursor-pointer"
                  onClick={() => setIsSizeChartOpen(true)}
                >
                  View Size Chart
                </span>
              </div>
            </div>
            {isSizeChartOpen && (
              <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-10">
                <div className="bg-white rounded-lg p-6 relative ">
                  <h2 className="text-gray-900 text-xl font-semibold mb-4">
                    Size Chart
                  </h2>
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 bg-gray-100">Size</th>
                        <th className="px-4 py-2 bg-gray-100">Length (in)</th>
                        <th className="px-4 py-2 bg-gray-100">Chest (in)</th>
                        <th className="px-4 py-2 bg-gray-100">Waist (in)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeChart.map((row, index) => (
                        <tr key={index} className="text-center">
                          <td className="border px-4 py-2">{row.size}</td>
                          <td className="border px-4 py-2">{row.length}</td>
                          <td className="border px-4 py-2">{row.chest}</td>
                          <td className="border px-4 py-2">{row.waist}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <FontAwesomeIcon
                    icon={faTimes}
                    onClick={() => setIsSizeChartOpen(false)}
                    className=" cursor-pointer absolute top-2 right-3 w-4 p-2 h-4 bg-orange-200 text-orange-600 rounded-full"
                  />
                </div>
              </div>
            )}
            {/* Add to Cart Button */}
            <div className="flex justify-center lg:justify-start lg:mt-4 md:mt-3 mt-1">
              <Link href={"/addToCart"}>
                <button
                  className={`p-3 bg-orange-700 lg:text-base md:text-base text-xs text-white rounded-md lg:w-72 md:w-72 w-32 font-bold ${
                    isSoldOut
                      ? "opacity-50 cursor-not-allowed bg-orange-700 lg:text-base md:text-base text-xs text-white rounded-md lg:w-72 md:w-72 w-32 font-bold"
                      : ""
                  }`}
                  disabled={isSoldOut}
                >
                  {isSoldOut ? "SOLD OUT" : "ADD TO CART"}
                </button>
              </Link>
              <FontAwesomeIcon
                icon={faHeart}
                className="text-gray-300 hover:text-red-500  w-6 h-6 lg:w-8 lg:h-8 md:w-8 md:h-8  lg:mt-2 md:mt-2
                mt-2  ml-2"
              />
            </div>
            <div className=" flex justify-center flex-col">
              <div className=" flex mt-4">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="mt-1 text-orange-900"
                />
                <p className="ml-3 text-sm text-orange-900">
                  Express Shipping{" "}
                </p>
              </div>
              <div className=" flex mt-2">
                <FontAwesomeIcon
                  icon={faWallet}
                  className="mt-1 text-orange-900"
                />
                <p className="ml-3 text-sm text-orange-900">
                  Cash on Delivery Available
                </p>
              </div>
              <div className=" flex mt-2">
                <FontAwesomeIcon
                  icon={faClockRotateLeft}
                  className="mt-1 text-orange-900"
                />
                <p className="ml-3 text-sm text-orange-900">
                  Easy 15 Days Return Policy
                </p>
              </div>
            </div>
            <div className="mt-6">
              <div className="border-b border-gray-300 pb-2 mt-2">
                <div
                  className="flex justify-between items-center text-black font-semibold cursor-pointer"
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
                    <div className="text-gray-500 mt-2 pl-0 text-left">
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
                  className="flex justify-between items-center text-black font-semibold cursor-pointer"
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
                    <div className="text-gray-500 mt-2 pl-0 text-left">
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
                  className="flex justify-between items-center text-black font-semibold cursor-pointer"
                  onClick={toggleSize}
                >
                  <p>SIZE & FIT</p>
                  <FontAwesomeIcon
                    icon={isOpenSize ? faCaretUp : faCaretDown}
                    className={`mt-1 transition-transform duration-500 transform ${
                      isOpenSize ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpenSize
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {isOpenSize && (
                    <div className="text-gray-500 mt-2 pl-0 text-left">
                      {/* Dropdown Content Goes Here */}
                      {/* Example Content */}
                      <p
                        className={`transition-opacity duration-500 ${
                          isOpenSize ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        The model (height 5'7) is wearing a size S.{" "}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="border-b border-gray-300 pb-2 mt-2">
                <div
                  className="flex justify-between items-center text-black font-semibold cursor-pointer"
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
                    <div className="text-gray-500 mt-2 pl-0 text-left">
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
                  className="flex justify-between items-center text-black font-semibold cursor-pointer"
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
                    <div className="text-gray-500 mt-2 pl-0 text-left">
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
                  className="flex justify-between items-center text-black font-semibold cursor-pointer"
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
                    <div className="text-gray-500 mt-2 pl-0 text-left">
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
              <div className="mt1">
                <p className=" text-gray-400 text-sm">
                  Need Help?
                  <br /> MON-SAT, 10 AM to 6 PM (IST)
                  <br /> Whatsapp us at +91 9310253093 | email care@libas.in
                </p>
              </div>
            </div>
          </div>
        </div>

        <Review />

        <div className="container px-1 mx-auto lg:px-5 md:px-5 lg:py-10 md:py-10 py-10">
          <div className="justify-center flex w-full">
            <p className="lg:text-3xl md:text-2xl text-xl font-bold text-orange-500 -mt-2  mb-7 ">
              YOU MAY ASLO LIKE
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
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
              src="/demo1.jpg"
              />
            {/* Overlay div for hover effect */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <img
                alt="ecommerce"
                className="object-cover object-center h-full  w-full"
                src="/demo.webp"
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
              src="/demo1.jpg"
              />
            {/* Overlay div for hover effect */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <img
                alt="ecommerce"
                className="object-cover object-center h-full  w-full"
                src="/demo.webp"
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
              src="/demo1.jpg"
              />
            {/* Overlay div for hover effect */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <img
                alt="ecommerce"
                className="object-cover object-center h-full  w-full"
                src="/demo.webp"
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
              src="/demo1.jpg"
              />
            {/* Overlay div for hover effect */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <img
                alt="ecommerce"
                className="object-cover object-center h-full  w-full"
                src="/demo.webp"
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
              src="/demo1.jpg"
              />
            {/* Overlay div for hover effect */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <img
                alt="ecommerce"
                className="object-cover object-center h-full  w-full"
                src="/demo.webp"
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
              src="/demo1.jpg"
              />
            {/* Overlay div for hover effect */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <img
                alt="ecommerce"
                className="object-cover object-center h-full  w-full"
                src="/demo.webp"
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
              src="/demo1.jpg"
              />
            {/* Overlay div for hover effect */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <img
                alt="ecommerce"
                className="object-cover object-center h-full  w-full"
                src="/demo.webp"
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
              src="/demo1.jpg"
              />
            {/* Overlay div for hover effect */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <img
                alt="ecommerce"
                className="object-cover object-center h-full  w-full"
                src="/demo.webp"
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

        <div className="container px-1 py-1 mx-auto lg:px-5 md:px-5 md:mt-16 lg:mt-16 mt-10">
          <div className="justify-center flex w-full">
            <p className="lg:text-3xl md:text-2xl text-xl font-bold text-orange-500 -mt-2  mb-7 ">
              RECENTLY VIEWED
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
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
              src="/demo1.jpg"
              />
            {/* Overlay div for hover effect */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <img
                alt="ecommerce"
                className="object-cover object-center h-full  w-full"
                src="/demo.webp"
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
              src="/demo1.jpg"
              />
            {/* Overlay div for hover effect */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <img
                alt="ecommerce"
                className="object-cover object-center h-full  w-full"
                src="/demo.webp"
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
              src="/demo1.jpg"
              />
            {/* Overlay div for hover effect */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <img
                alt="ecommerce"
                className="object-cover object-center h-full  w-full"
                src="/demo.webp"
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
              src="/demo1.jpg"
              />
            {/* Overlay div for hover effect */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <img
                alt="ecommerce"
                className="object-cover object-center h-full  w-full"
                src="/demo.webp"
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
              src="/demo1.jpg"
              />
            {/* Overlay div for hover effect */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <img
                alt="ecommerce"
                className="object-cover object-center h-full  w-full"
                src="/demo.webp"
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
              src="/demo1.jpg"
              />
            {/* Overlay div for hover effect */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <img
                alt="ecommerce"
                className="object-cover object-center h-full  w-full"
                src="/demo.webp"
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
              src="/demo1.jpg"
              />
            {/* Overlay div for hover effect */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <img
                alt="ecommerce"
                className="object-cover object-center h-full  w-full"
                src="/demo.webp"
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
              src="/demo1.jpg"
              />
            {/* Overlay div for hover effect */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <img
                alt="ecommerce"
                className="object-cover object-center h-full  w-full"
                src="/demo.webp"
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

export default Shoppingcart;
