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

const Category = () => {
  return (
    <div>
    <section className="text-gray-600 body-font bg-white -mt-14 lg:-mt-0 md:-mt-0 font">
    <div className="container px-5 py-24 mx-auto bg-white">
      <div className="justify-center flex w-full">
        <p className="lg:text-3xl md:text-2xl text-2xl font-bold text-orange-500 -mt-2  ">
          CATEGORY'S
        </p>
      </div>
      <div className="flex flex-wrap -m-4 mt-2">
        <div className="p-4 md:w-1/3 relative">
          <div
            className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
            style={{ backgroundColor: "#ffffff" }}
          >
            <img
              className="lg:h-72 md:h-36 w-full object-cover object-center"
              src="/demo2.jpg"
              alt="blog"
            />
            <div className="p-4">
              <div className="h-full">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  FOR SUMMER
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Shooting Stars
                </h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div className="flex items-center flex-wrap">
                  <span className="text-orange-700 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <FontAwesomeIcon
                      icon={faEye}
                      className=" mr-2 w-5 h-5"
                    />{" "}
                    1.2K
                  </span>
                  <span className="text-orange-700 inline-flex items-center leading-none text-sm">
                    <p className="text-orange-700">
                      {" "}
                      <FontAwesomeIcon
                        icon={faCommentDots}
                        className=" w-5 h-5"
                      />{" "}
                      6
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-white bg-gray-50 bg-opacity-30 backdrop-filter backdrop-blur-sm hover:bg-opacity-20 transition duration-300 ease-in-out opacity-0 hover:opacity-100">
              <Link
                href={"/"}
                className="text-orange-700 inline-flex items-center md:mb-2 lg:mb-0 bg-white p-4 rounded-md"
              >
                Learn More{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
              </Link>{" "}
            </div>
          </div>
        </div>

        <div className="p-4 md:w-1/3 relative">
          <div
            className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
            style={{ backgroundColor: "#ffffff" }}
          >
            <img
              className="lg:h-72 md:h-36 w-full object-cover object-center"
              src="/demo2.jpg"
              alt="blog"
            />
            <div className="p-4">
              <div className="h-full">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  FOR WINTER
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Shooting Stars
                </h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div className="flex items-center flex-wrap">
                  <span className="text-orange-700 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <FontAwesomeIcon
                      icon={faEye}
                      className=" mr-2 w-5 h-5"
                    />{" "}
                    1.2K
                  </span>
                  <span className="text-orange-700 inline-flex items-center leading-none text-sm">
                    <p className="text-orange-700">
                      {" "}
                      <FontAwesomeIcon
                        icon={faCommentDots}
                        className=" w-5 h-5"
                      />{" "}
                      6
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-white bg-gray-50 bg-opacity-30 backdrop-filter backdrop-blur-sm hover:bg-opacity-20 transition duration-300 ease-in-out opacity-0 hover:opacity-100">
              <Link
                href={"/"}
                className="text-orange-700 inline-flex items-center md:mb-2 lg:mb-0 bg-white p-4 rounded-md"
              >
                Learn More{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
              </Link>{" "}
            </div>
          </div>
        </div>

        <div className="p-4 md:w-1/3 relative">
          <div
            className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
            style={{ backgroundColor: "#ffffff" }}
          >
            <img
              className="lg:h-72 md:h-36 w-full object-cover object-center"
              src="/demo2.jpg"
              alt="blog"
            />
            <div className="p-4">
              <div className="h-full">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  FOR MONSOON
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Shooting Stars
                </h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div className="flex items-center flex-wrap">
                  <span className="text-orange-700 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <FontAwesomeIcon
                      icon={faEye}
                      className=" mr-2 w-5 h-5"
                    />{" "}
                    1.2K
                  </span>
                  <span className="text-orange-700 inline-flex items-center leading-none text-sm">
                    <p className="text-orange-700">
                      {" "}
                      <FontAwesomeIcon
                        icon={faCommentDots}
                        className=" w-5 h-5"
                      />{" "}
                      6
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-white bg-gray-50 bg-opacity-30 backdrop-filter backdrop-blur-sm hover:bg-opacity-20 transition duration-300 ease-in-out opacity-0 hover:opacity-100">
              <Link
                href={"/"}
                className="text-orange-700 inline-flex items-center md:mb-2 lg:mb-0 bg-white p-4 rounded-md"
              >
                Learn More{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
              </Link>{" "}
            </div>
          </div>
        </div>
        {/* Repeat similar structure for other cards */}
      </div>
    </div>
  </section>
    </div>
  )
}

export default Category
