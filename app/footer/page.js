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
const Footer = () => {
  return (
    <div className="pt-14 bg-black p-4">


    <footer className="footer-section bg-gray-800 py-10 text-white font">
    <div className="container mx-auto">
   

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="flex flex-col ml-4">
          <div className="single-cta mb-6 flex">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-orange-600 w-8 h-8"
            />
            <div className="cta-text">
              <h4>Find us</h4>
              <span>1010 Avenue, sw 54321, chandigarh</span>
            </div>
          </div>
          <div className="single-cta mb-6 flex">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-orange-600 w-8 h-8"
            />
            <div className="cta-text">
              <h4>Call us</h4>
              <span>9876543210</span>
            </div>
          </div>
          <div className="single-cta flex">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-orange-600 w-8 h-8"
            />
            <div className="cta-text">
              <h4>Mail us</h4>
              <span>mail@info.com</span>
            </div>
          </div>
        </div>
        <div className="footer-widget ml-3">
          <div className="footer-widget-heading">
            <h3>Useful Links</h3>
          </div>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>About</Link>
            </li>
            <li>
              <Link href={"/"}>Services</Link>
            </li>
            <li>
              <Link href={"/"}>Portfolio</Link>
            </li>
            <li>
              <Link href={"/"}>Contact</Link>
            </li>
            <li>
              <Link href={"/"}>About us</Link>
            </li>
            <li>
              <Link href={"/"}>Our Services</Link>
            </li>
            <li>
              <Link href={"/"}>Expert Team</Link>
            </li>
            <li>
              <Link href={"/"}>Contact us</Link>
            </li>
            <li>
              <Link href={"/"}>Latest News</Link>
            </li>
          </ul>
        </div>
        <div className="footer-widget p-3">
          <div className="footer-widget-heading">
            <h3>Subscribe</h3>
          </div>
          <div className="footer-text mb-4">
            <p>
              Don't miss to subscribe to our new feeds, kindly fill the form
              below.
            </p>
          </div>
          
          <div className="subscribe-form lg:w-80 md:w-full">
            <form action="#">
              <input
                type="text"
                placeholder="Email Address"
                className="w-full px-4 py-2 rounded-full mb-2 bg-gray-900 text-white focus:outline-none focus:bg-gray-700"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full  hover:bg-orange-600 transition duration-300 ease-in-out">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 bg-black p-4 absolute bottom-0 w-full">
        <p>
          Copyright &copy; 2024, All Right Reserved{" "}
          <Link
            href="https://codepen.io/anupkumar92/"
            className="text-orange-600"
          >
            Shreya collections
          </Link>
        </p>
      </div>

    </div>
  </footer>
  </div>
  )
}

export default Footer
