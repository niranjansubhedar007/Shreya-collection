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
import axios from "axios";
const AddToCart = () => {
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
  const [address, setAddress] = useState([]);
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

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/address/default"
        );
        if (Array.isArray(response.data)) {
          setAddress(response.data);
        } else {
          setAddress([response.data]); // Ensure address is always an array
        }
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching addresses:", error.message);
      }
    };
    fetchAddress();
  }, []);

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
                <p className="border-b-2 text-orange-700 text-sm -mt-1 border-orange-700">
                  BAG
                </p>

                <span>
                  <FontAwesomeIcon icon={faChevronRight} className="mx-7" />
                </span>
              </div>

              <div className="flex">
                <p className=" ">ADDRESS</p>

                <span>
                  {" "}
                  <FontAwesomeIcon icon={faChevronRight} className="mx-7" />
                </span>
              </div>
              <div className="flex ">
                {" "}
                <p>PAYMENT</p>{" "}
              </div>
            </div>
            <div className="   rounded-full">
              <div className=" justify-between flex  bg-pink-50 lg:p-4 md:p-2 p-2">
                {address.map((item) => (
                  <div className="  lg:px-5 md:px-2 px-1">
                    <p className=" lg:text-xl md:text-base text-sm text-gray-500 font-semibold">
                      Deliver to:{" "}
                      <span className="  font-semibold">{item.userName}</span>
                    </p>
                    <p className="  text-gray-500 font-light">
                      {item.mobileNo}
                    </p>

                    <p className=" text-gray-500 -mt-1 font-light">
                      {item.state}, {item.address} {item.pincode}{" "}
                    </p>
                  </div>
                ))}

                <div className=" ">
                <Link href={"/address"}>
                  <button
                    className="border lg:px-4 lg:py-2 md:px-4 md:py-2  border-pink-500  text-pink-500
                  px-2 py-2 font-semibold rounded-sm lg:text-sm md:text-xs text-xs mt-1"
                  >
                    CHANGE ADDRESS
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" rounded-full ">
              <div className=" border border-gray-100 lg:px-9 md:px-4 px-3 p-3 bg-slate-50">
                <div className="flex  flex-col  text-black font-semibold cursor-pointer">
                  <p className="text-sm">Available Offers</p>
                  <span
                    onClick={toggleSize}
                    className="text-xs text-gray-500 cursor-pointer"
                  >
                    {isOpenSize ? "Show less" : "Show more"}{" "}
                    <FontAwesomeIcon
                      icon={isOpenSize ? faCaretUp : faCaretDown}
                      className="mt-1"
                    />
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpenSize ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {isOpenSize && (
                    <div className="text-gray-500 mt-2 pl-0 text-left">
                      <ol className="list-disc ml-6">
                        <div>
                          <li>Color: Grey</li>
                          <span className="text-xs text-red-500">
                            Limited Time Offer! Get 20% off on this stylish Grey
                            Kurta Salwar Set!
                          </span>
                        </div>
                        <div>
                          <li>Top Shape: Straight</li>
                          <span className="text-xs text-red-500">
                            Hurry! Last few pieces left! Grab this Straight Grey
                            Kurta Salwar Set at an amazing discount!
                          </span>
                        </div>
                        <div>
                          <li>Top Type: Kurta</li>
                          <span className="text-xs text-red-500">
                            Flash Sale Alert! Save big on our Printed Grey Kurta
                            Salwar Set with Dupatta!
                          </span>
                        </div>
                        {/* Repeat the pattern for other list items */}
                      </ol>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="   rounded-full mt-4 mb-4">
              <div className=" justify-between flex  lg:p-2 md:p-1 p-1">
                <div className=" text-md font-semibold flex lg:px-6 md:px-3 px-2">
                  <input
                    type="checkbox"
                    className="w-3 h-3 md:w-3 md:h-3 lg:w-4 lg:h-4 mt-0.5"
                  />
                  <p className="lg:ml-3 md:ml-2 ml-1 lg:text-sm md:text-xs text-xs">
                    1/1
                  </p>
                  <span className="ml-2 lg:text-sm md:text-xs text-xs">
                    ITEM SELECTED
                  </span>
                </div>
                <div className="-mt-1">
                  <button className="  text-xs lg:px-3  md:px-2 px-0 font-semibold text-gray-300 hover:text-gray-500">
                    REMOVE
                  </button>
                  <span className=" text-gray-400 lg:ml-1 md:ml-1 ml-1">|</span>
                  <button className="text-xs font-semibold text-gray-800 lg:ml-3 md:ml-2 ml-1">
                    MOVE TO WISHLIST
                  </button>
                </div>
              </div>
            </div>
            <div className="   rounded-full">
              <div className="  flex border  relative  border-gray-200 lg:p-4 md:p-2 p-1">
                <div className=" text-sm lg:px-5 md:px-3 px-2">
                  <img
                    alt="ecommerce"
                    className="object-fit  mt-2"
                    width={130}
                    // height={100}
                    src="/demo1.jpg"
                  />
                </div>
                <div className="">
                  <p className=" font-semibold lg:text-xl md:text-base text-base">
                    {" "}
                    Salwar Kurta
                  </p>
                  <h2 className="text-gray-900  text-xs  font-sans mb-2">
                    White Printed Cotton Straight Kurta With Dupatta
                  </h2>

                  <div className="flex   ">
                    <div className="flex  items-center rounded border  border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base  ">
                      <span className="mr-1 lg:text-base md:text-xs text-xs font-semibold">
                        Size :
                      </span>
                      <div className="relative pr-1">
                        <select className=" lg:text-sm md:text-xs text-xs  ">
                          <option>SM</option>
                          <option>M</option>
                          <option>L</option>
                          <option>XL</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex  items-center rounded border  border-gray-300 p-1 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base lg:ml-3 md:ml-2 ml-1">
                      <span className="lg:p-1 lg:text-base md:text-xs text-xs font-semibold">
                        Qty :
                      </span>
                      <div className=" lg:p-1 ">
                        <button onClick={handleDecrement} className="">
                          <FontAwesomeIcon
                            icon={faMinus}
                            className=" w-3 h-3"
                          />
                        </button>
                        <input
                          type="text"
                          value={quantity}
                          className="lg:w-10  md:w-8 w-5 text-center"
                        />
                        <button onClick={handleIncrement} className="">
                          <FontAwesomeIcon icon={faPlus} className=" w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start mt-3 lg:text-base md:text-xs text-xs">
                    <p className="font-semibold ">₹{amount}</p>
                    <p className="line-through  text-gray-400 ml-3">₹1,444</p>
                    <p className=" ml-2 text-red-600 ">58% OFF</p>
                  </div>
                  <div className="flex text-xs lg:mt-4 md:mt-3 mt-2">
                    <FontAwesomeIcon
                      icon={faPersonWalkingArrowLoopLeft}
                      className="w-5 h-5"
                    />
                    <span className=" font-semibold ml-2">14 Days</span>
                    <span className="text-gray-400 ml-1">Return Available</span>
                  </div>
                  <div className="flex text-xs mt-1">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="w-5 h-5 text-green-500"
                    />
                    <span className="text-gray-400 ml-2">Delivery By</span>
                    <span className=" font-semibold ml-1">6 Apr 2024</span>
                  </div>
                  <FontAwesomeIcon
                    icon={faTimes}
                    className=" absolute  font-normal text-gray-400 hover:text-gray-500 right-3 top-2 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="  relative rounded-full lg:mt-4 md:mt-3 mt-2">
              <div className="  flex border border-gray-200 lg:px-9 md:px-4 px-2 lg:p-4 md:p-3 p-2">
                <FontAwesomeIcon
                  icon={faBookmark}
                  className="w-3 h-3 md:w-3 md:h-3 lg:w-4 lg:h-4"
                />

                <span className=" lg:ml-3 md:ml-3 ml-2 lg:text-base md:text-xs text-xs">
                  Add More From Wishlist
                </span>
              </div>
              <span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className=" absolute right-3 text-gray-400 lg:top-4 md:top-3 top-2"
                />
              </span>
            </div>
          </div>

          <div className="lg:mt-24  md:mt-24 mb-2 border border-gray-100 lg:w-96 md:w-80">
            <div className="   rounded-full">
              <div className=" border-b-2  border-gray-100 justify-between flex   lg:p-4 md:p-3 p-2">
                <div className=" text-sm ">
                  <p className=" font-light">COUPONS</p>
                  <div className="flex mt-2">
                    <FontAwesomeIcon
                      icon={faTag}
                      className=" text-red-400 w-5 h-5"
                    />

                    <p className=" font-semibold ml-1 -mt-1">Apply Coupon</p>
                  </div>
                </div>
                <div className="">
                  <button className="border  text-sm border-pink-500 text-pink-500 px-4 py-2 font-semibold rounded-sm">
                    APPLY
                  </button>
                </div>
              </div>
            </div>
            <div className="   ">
              <div className=" lg:px-5 md:px-4 px-3">
                <p className="pt-2">
                  Price Details <span>(2 Items)</span>{" "}
                </p>
              </div>
              <div className="lg:px-5 md:px-4 px-3  mt-3 border border-gray-100  rounded-sm">
                <div className=" flex justify-between  lg:text-base md:text-xs text-xs text-gray-600 font-normal">
                  <p>Total MRP</p>
                  <span>₹ 1444</span>
                </div>
                <div className="mt-1 flex justify-between lg:text-base md:text-xs text-xs text-gray-600 font-normal">
                  <p>Discount On MRP</p>
                  <span className=" text-green-400">- ₹ 604</span>
                </div>
                <div className="mt-1 flex justify-between lg:text-base md:text-xs text-xs text-gray-600 font-normal">
                  <p>Coupon Discount</p>
                  <span className=" text-red-400 cursor-pointer">
                    Apply Coupon
                  </span>
                </div>
                <div className="mt-1 flex justify-between lg:text-base md:text-baxsse text-xs text-gray-600 font-normal">
                  <p>Delivery Charges</p>
                  <span className=" text-green-400">Free</span>
                </div>
                <div className=" flex justify-between lg:text-xl md:text-base text-base mt-2 border-t-2 border-gray-300 text-gray-600 font-semibold">
                  <p className="lg:mt-4 md:mt-3 mt-2">Total Amount</p>
                  <span className=" lg:mt-4 md:mt-3 mt-2">₹ 850</span>
                </div>
              </div>
            </div>
            <div className="mt-1">
              <Link href={"/address"}>
                <button className="border p-3 w-full text-sm bg-pink-500 text-white  font-semibold rounded-sm">
                  PLACE ORDER
                </button>
              </Link>
            </div>
            <div className="   rounded-full">
              <div className=" lg:p-4 md:p-3 p-2">
                <div className=" text-sm  flex">
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faShieldHalved} />
                  </span>
                  <p className=" font-light ml-2">
                    Safe and Secure Payments.Easy returns.100% Authentic
                    products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddToCart;
