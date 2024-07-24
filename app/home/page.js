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
import Category from "../category/page";
import Shopping from "../shopping/page";
import Slider from "../slider/page";
import Hero from "../hero/page";
import Discount from "../discounts/page";

import Contact from "../contact/page";
import Footer from "../footer/page";
import Navbar from "../navbar/page";

const Home = () => {



  return (
    <>
  <Navbar/>
      <Slider />

      
      <Shopping />
      
      <Hero />
      
      <Discount />
      
      <Category />

     <Contact/>

     <Footer/>
    </>
  );
};

export default Home;
