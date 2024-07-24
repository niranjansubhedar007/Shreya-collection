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
  faBookmark,
  faLocationDot,
  faPlane,
  faPersonWalkingArrowLoopLeft,
  faPaperPlane,
  faSortDown,
  faStar,
  faTimes,
  faSearch,
  faCaretUp,
  faA,
  faBars,
  faCartShopping,
  faCaretDown,
  faEye,
  faComment,
  faCommentDots,
  faChevronRight,
  faCheck,
  faBookBookmark,
  faPlus,
  faMinus,
  faShieldHalved,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Navbar from "../navbar/page";
const Payment = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const [isOpenSize, setIsOpenSize] = useState(false);
  const toggleSize = () => {
    setIsOpenSize(!isOpenSize);
  };

  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(840); // Initial amount, replace it with your actual amount

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    setAmount(amount + 840); // Increment amount based on your requirement
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setAmount(amount - 840); // Decrease amount based on your requirement
    }
  };
  return (
    <>
      <section
        className="  min-h-screen font"
        style={{ backgroundColor: "#fff" }}
      >
        <Navbar />
        <div className="lg:flex-row lg:flex md:flex-row md:flex max-w-6xl mx-auto  pt-5 justify-center w-full">
          <div className="lg:w-3/4 md:w-1/2">
            <div className="font-semibold font text-xs pt-16 mb-4 bg-white lg:justify-start md:justify-start justify-center flex font">
              <div className="flex border-black ">
                <Link href={"/addToCart"}>
                  <p className="">BAG</p>
                </Link>
                <span>
                  <FontAwesomeIcon icon={faChevronRight} className="mx-7" />
                </span>
              </div>

              <div className="flex ">
              <Link href={"/address"}>

                <p className=" ">ADDRESS</p>
                </Link>

                <span>
                  <FontAwesomeIcon icon={faChevronRight} className="mx-7" />
                </span>
              </div>
              <div className="flex ">
                {" "}
                <p className="border-b-2 -mt-1 text-base text-orange-700  border-orange-700">
                  PAYMENT
                </p>{" "}
              </div>
            </div>
            <div className="   rounded-full">
              <div className=" justify-between flex  bg-pink-50 lg:p-4 md:p-3 p-1">
                <div className="  lg:px-5 md:px-3 px-1">
                  <p className=" lg:text-xl md:text-base text-sm text-gray-500 font-semibold">
                    Select Dilivery Address
                  </p>
                  <p className=" font-semibold   text-xs mt-2">
                    DEFAULT ADDRESS
                  </p>
                </div>
                <div className="">
                  <button
                    className="border lg:px-4 lg:py-2 md:px-4 md:py-2  border-pink-500  text-pink-500
                   px-2 py-2 font-semibold rounded-sm lg:text-sm md:text-xs text-xs mt-1"
                  >
                    ADD NEW ADDRESS
                  </button>
                </div>
              </div>
            </div>

            <div className="   rounded-full">
              <div className="  flex border  relative  border-gray-200  lg:p-4 md:p-3 p-2">
                <div>
                  <input type="checkbox" />
                </div>
                <div className="ml-3">
                  <div className="lg:-mt-1 ">
                    <p className=" font-semibold  lg:text-xl md:text-base text-base">
                      Niranjan
                    </p>
                    <p className="text-gray-900  text-md font-sans  mt-1">
                      135 Shaniwar peth , satara{" "}
                    </p>
                    <p className="text-md">Satara , Maharashatra - 415002</p>
                    <p className="text-md">
                      mobile :{" "}
                      <span className=" font-semibold text-sm ">
                        9922393007
                      </span>{" "}
                    </p>
                  </div>

                  <div className="flex  mt-4  ">
                    <div className="border  text-sm border-pink-500  text-pink-500 px-4 py-2 font-semibold rounded-sm ">
                      <button>Remove</button>
                    </div>
                    <div className="border  text-sm border-pink-500  text-pink-500 px-4 py-2 font-semibold rounded-sm ml-1  ">
                      <button>Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="  relative rounded-full lg:mt-4 md:mt-4 mt-0">
              <div className="  flex border border-gray-200  lg:px-9 md:px-5 px-3 p-4">
                <span>
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                <span className=" ml-2 lg:font-semibold md:font-normal  font-normal">
                  ADD NEW ADDRESS
                </span>
              </div>
            </div>
            <div className=" border border-gray-300  py-2">
              <div className="lg:px-9 md:px-5 px-3 p-4">
                <div className=" text-md  flex">
                  <span>
                    <FontAwesomeIcon icon={faShieldHalved} />
                  </span>
                  <p className=" lg:font-semibold md:font-normal  font-normal ml-2">
                    Safe and Secure Payments.Easy returns.100% Authentic
                    products.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" lg:mt-24  md:mt-24 mb-2 border border-gray-100 lg:w-96 ">
            <div className="lg:pl-5 md:pl-5 pl-3">
              <p className="py-3 font-semibold">DELIVERY ESTIMATES</p>
              <div className=" flex align-middle text-center">
                <img
                  alt="ecommerce"
                  className="object-fit  "
                  width={70}
                  src="/kurta5.jpg"
                />
                <div className="flex mt-10 lg:text-sm md:text-sm text-xs lg:pl-4 md:pl-4 pl-4">
                  <p className="">Estimated Delivery by </p>
                  <p className=" font-semibold pl-1">13 Apr - 15 Apr</p>{" "}
                </div>
              </div>
            </div>
            <div className="   ">
              <div className=" lg:px-5 md:px-4 px-3">
                <p className="pt-2">
                  Price Details <span>(2 Items)</span>{" "}
                </p>
              </div>
              <div className="lg:px-5 md:px-4 px-3 py-2 mt-3 border border-gray-100  rounded-sm">
                <div className=" flex justify-between text-md text-gray-600 font-normal">
                  <p>Total MRP</p>
                  <span>₹ 1444</span>
                </div>
                <div className="mt-1 flex justify-between text-md text-gray-600 font-normal">
                  <p>Discount On MRP</p>
                  <span className=" text-green-400">- ₹ 604</span>
                </div>
                <div className="mt-1 flex justify-between text-md text-gray-600 font-normal">
                  <p>Coupon Discount</p>
                  <span className=" text-red-400 cursor-pointer">
                    Apply Coupon
                  </span>
                </div>
                <div className="mt-1 flex justify-between text-md text-gray-600 font-normal">
                  <p>Delivery Charges</p>
                  <span className=" text-green-400">Free</span>
                </div>
                <div className=" flex justify-between text-xl mt-2 border-t-2 border-gray-300 text-gray-600 font-semibold">
                  <p className="mt-4">Total Amount</p>
                  <span className=" mt-4">₹ 850</span>
                </div>
              </div>
            </div>
            <div className="">
              <Link href={"/payment"}>
                <button className="border p-3 w-full text-sm bg-pink-500 text-white  font-semibold rounded-sm">
                  CONTINUE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
