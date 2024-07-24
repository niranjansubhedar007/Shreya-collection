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
const Discount = () => {
  return (
    <section className="text-gray-600 body-font bg-white p-4  font ">
    <div className="container px-1 py-1 mx-auto lg:px-5 md:px-5 mt-9">
      <div className="justify-center flex w-full">
      <p className="lg:text-3xl md:text-2xl text-xl font-bold text-orange-500   mb-7 ">
          NEVER BEFORE DISCOUNT
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div
          className="p-0 shadow-md lg:p-4 md:p-3 relative"
          style={{ backgroundColor: "#ffffff" }}
        >
          <Link
            href={"/product"}
            className="block relative rounded overflow-hidden"
          >
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full"
              src="/demo1.jpg"
            />
            <div className="absolute bottom-0 left-0 w-full px-4 pb-4 text-white text-center ">
              <div className="text-sm lg:text-3xl md:text-xl font-bold bg-black bg-opacity-75 p-1 ">
                Fresh Cottons
              </div>
              <div className=" text-sm lg:text-xl md:text-md bg-black bg-opacity-75 pb-1">
                Min 50% off
              </div>
            </div>
            {/* Overlay div for hover effect */}
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
              className="object-cover object-center w-full h-full"
              src="/demo1.jpg"
            />
            <div className="absolute bottom-0 left-0 w-full px-4 pb-4 text-white text-center">
            <div className="text-sm lg:text-3xl md:text-xl font-bold bg-black bg-opacity-75 p-1 ">
            Silk Stories
              </div>
              <div className=" text-sm lg:text-xl md:text-md bg-black bg-opacity-75 pb-1">
                Min 30% off
              </div>
            </div>
            {/* Overlay div for hover effect */}
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
              className="object-cover object-center w-full h-full"
              src="/demo1.jpg"
            />
            <div className="absolute bottom-0 left-0 w-full px-4 pb-4 text-white text-center">
            <div className="text-sm lg:text-3xl md:text-xl font-bold bg-black bg-opacity-75 p-1 ">
            Gerua's
              </div>
              <div className=" text-sm lg:text-xl md:text-md bg-black bg-opacity-75 pb-1">
                Buy 2 For 1899
              </div>
            </div>
            {/* Overlay div for hover effect */}
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
              className="object-cover object-center w-full h-full"
              src="/demo1.jpg"
            />
            <div className="absolute bottom-0 left-0 w-full px-4 pb-4 text-white text-center">
            <div className="text-sm lg:text-3xl md:text-xl font-bold bg-black bg-opacity-75 p-1 ">
                Fussion Flair
              </div>
              <div className=" text-sm lg:text-xl md:text-md bg-black bg-opacity-75 pb-1">
                Flat 50% off
              </div>
            </div>
            {/* Overlay div for hover effect */}
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
              className="object-cover object-center w-full h-full"
              src="/demo1.jpg"
            />
            <div className="absolute bottom-0 left-0 w-full px-4 pb-4 text-white text-center">
            <div className="text-sm lg:text-3xl md:text-xl font-bold bg-black bg-opacity-75 p-1 ">
                Dazzling Dresses
              </div>
              <div className=" text-sm lg:text-xl md:text-md bg-black bg-opacity-75 pb-1">
                Starting 599
              </div>
            </div>
            {/* Overlay div for hover effect */}
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
              className="object-cover object-center w-full h-full"
              src="/demo1.jpg"
            />
            <div className="absolute bottom-0 left-0 w-full px-4 pb-4 text-white text-center ">
            <div className="text-sm lg:text-3xl md:text-xl font-bold bg-black bg-opacity-75 p-1  ">
                Plus Size
              </div>
              <div className=" text-sm lg:text-xl md:text-md bg-black bg-opacity-75 pb-1">
                Up To 50% off
              </div>
            </div>
            {/* Overlay div for hover effect */}
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Discount
