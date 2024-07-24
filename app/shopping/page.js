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
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Shopping = () => {
  return (
    <div>
      <section className="text-gray-600   bg-white p-1 lg:pt-24 pt-8 md:pt-16 font">
        <div className="container px-1 py-1 mx-auto lg:px-5 md:px-5">
          <div className="justify-center flex w-full">
            <p className="lg:text-3xl md:text-2xl text-2xl font-bold text-orange-500 -mt-2  mb-7 ">
              SHOPPING
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
                  <p className="mt-1 text-red-600 ml-3 lg:ml-auto md:ml-auto text-xs lg:text-base md:text-base justify-end flex">58% off</p>
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
                  <p className="mt-1 text-red-600 ml-3 lg:ml-auto md:ml-auto text-xs lg:text-base md:text-base justify-end flex">58% off</p>
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
                  <p className="mt-1 text-red-600 ml-3 lg:ml-auto md:ml-auto text-xs lg:text-base md:text-base justify-end flex">58% off</p>
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
                <p className="mt-1 text-red-600 ml-3 lg:ml-auto md:ml-auto text-xs lg:text-base md:text-base justify-end flex">58% off</p>
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
                <p className="mt-1 text-red-600 ml-3 lg:ml-auto md:ml-auto text-xs lg:text-base md:text-base justify-end flex">58% off</p>
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
                <p className="mt-1 text-red-600 ml-3 lg:ml-auto md:ml-auto text-xs lg:text-base md:text-base justify-end flex">58% off</p>
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
                  <p className="mt-1 text-red-600 ml-3 lg:ml-auto md:ml-auto text-xs lg:text-base md:text-base justify-end flex">58% off</p>
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
                <p className="mt-1 text-red-600 ml-3 lg:ml-auto md:ml-auto text-xs lg:text-base md:text-base justify-end flex">58% off</p>
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
      </section>
    </div>
  );
};

export default Shopping;
