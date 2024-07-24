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
const Sale = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden bg-white font">
    <div className="container px-5 py-12 lg:py-18 mx-auto">
      <div className="justify-center flex w-full -pt-6 mb-4">
      <p className="lg:text-3xl md:text-2xl text-2xl font-bold text-orange-500 -mt-2  mb-1 lg:mb-8  ">
      SALE</p>
      </div>
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt="ecommerce"
          className="lg:w-1/2 w-full  object-cover object-center rounded shadow-md"
          src="/sale3.jpg"
        />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">
            BRAND NAME
          </h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            The Catcher in the Rye
          </h1>
          <div className="flex mb-4">
            <span className="flex items-center">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />

              <span className="text-gray-600 ml-3">4 Reviews</span>
            </span>
          </div>
          <p className="leading-relaxed">
            Fam locavore kickstarter distillery. Mixtape chillwave tumeric
            sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
            juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
            seitan poutine tumeric. Gastropub blue bottle austin listicle
            pour-over, neutra jean shorts keytar banjo tattooed umami
            cardigan.
          </p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <div className="flex">
              <span className="mr-3">Color</span>
              <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
            </div>
            <div className="flex ml-6 items-center">
              <span className="mr-3">Size</span>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faSortDown}
                  className=" absolute right-3 top-2"
                />

                <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex">
            <span className="title-font font-medium text-xl text-gray-400 line-through mt-1">
              {" "}
              ₹4,500
            </span>
            <span className="title-font font-medium text-2xl text-gray-900 ml-2">
              {" "}
              ₹1,999
            </span>
            <button className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-4 focus:outline-none hover:bg-orange-600 rounded">
              Show More{" "}
              <FontAwesomeIcon icon={faArrowRight} className="mt-1 ml-3" />
            </button>
            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <FontAwesomeIcon
                icon={faHeart}
                className=" hover:text-red-500 w-5 h-5"
              />
            </button>
            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-1">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="  w-5 h-5"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Sale
