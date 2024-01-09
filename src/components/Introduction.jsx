/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import { useScroll } from './ScrollContext';
import NavBar from "./NavBar";

const Introduction = () => {
  const { scrollToSection } = useScroll();
  //const[isMenuOpen,setIsMenuOpen]=useState(false)

  
  const handleClick = () => {
    console.log('Icon clicked');
    scrollToSection('navbar');
  };


  return (
    <>
      <div  id="intro">
        {/* Name & Description */}
        <div  className="bg-hero-pattern bg-bottom h-screen text-white  pt-80  relative w-full">
          <h1 className="flex justify-center align-center text-6xl uppercase">
            I am Sandra
          </h1>
          <p className="flex justify-center align-center text-md uppercase leading-8 ">
            <span className="underline">I am a creative web developer</span>
          </p>
          <p className="flex justify-center align-center text-sm uppercase leading-loose ">
            I stand on a sweet spot where design &amp; code intersects.{" "}
          </p>
            {/*/.hero-arrow */}
            <div className="absolute inset-x-0 bottom-0 h-16 flex justify-center align-center ${isMenuOpen ? 'block' : 'hidden'} main-menu">
            <button onClick={handleClick}>
           
          <FaAngleDoubleDown />
        </button>
        </div>
        
        </div>
     
        {/*/.hero-content */}

        
       
      </div>
     
      
      
    </>
  );
};

export default Introduction;
