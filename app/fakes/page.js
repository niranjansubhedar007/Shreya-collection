"use client";
import React, { useState } from "react";

const Fakes = () => {
  const [open, isOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const isOpenPopup = () => {
    isOpen(true);
  };

  const isClosePopup = () => {
    isOpen(false);
  };

  const increase = (e) => {
    setIndex((prevIndex) => prevIndex + 1); // Use function to update state
  };
  const decrease = (e) => {
    setIndex((prevIndex) => prevIndex - 1); // Use function to update state


  };
  return (
    <>
      <div>
        <button onClick={isOpenPopup}>open </button>
        <button onClick={isClosePopup}>close </button>
      </div>

      {open && <div>hello</div>}

    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
<input type="text"  value={index}/>

    </>
  );
};

export default Fakes;
