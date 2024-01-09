/* eslint-disable no-unused-vars */
import React from "react";
import { FaCalendarAlt, FaComments } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <div className="h-96 w-screen mt-4 mb
      40">
        <div className=" grid grid-row-2  h-20  mb-20">
          <h1 className="text-4xl uppercase text-blue-500 pl-80 ml-20">Hello & welcome</h1>
          <div className="relative">
          <h4 className=" absolute text-xl text-gray-400 ml-40 left-80 -top-1/2">Explore our world</h4>
          <span className="absolute top-1 h-0.5 bg-gray-400 left-80  ml-20 w-10"></span>
          <span className="absolute top-1 h-0.5  bg-gray-400 right-80 w-10"></span>
          </div>
        
          
          
          
        </div>
        <div className="grid grid-cols-3 mt-4  place-items-center w-screen">
          <div className="grid grid-row-2 gap-4">
            <div className="relative ">
              <h4 className="text-xl uppercase font-bold ml-2 mb-2">
                We meet deadlines
              </h4>
              <p className="ml-2 text-sm w-5/6">
                Your deadline is the most important value for us. Our job is to
                make sure the job is done perfectly before the deadline.
              </p>
              <span className="absolute right-4 top-12">
                <span className="relative">
                  <FaCalendarAlt />
                  <span className="border-2 border-gray-150 absolute inset-0 rotate-45 p-4 absolute right-2 -ml-2 -mt-2 shadow-md shadow-gray-500"></span>
                </span>
              </span>
            </div>
            <div className="relative ">
              <h4 className="text-xl uppercase font-bold ml-2 mb-2">
                COMMUNICATION IS KEY
              </h4>
              <p className="ml-2 text-sm w-5/6">
                Our team is available to check on your questions and take in
                feedback as soon as possibly.
              </p>
              <span className="absolute right-4 top-12">
                <span className="relative">
                  <FaComments />
                  <span className="border-2 border-gray-150 absolute inset-0 rotate-45 p-4 absolute right-2 -ml-2 -mt-2 shadow-md shadow-gray-500"></span>
                </span>
              </span>
            </div>
          </div>
          <div>
            <img src="" alt="company Icon large" />
          </div>
          <div className="grid grid-row-2 gap-4">
            <div className="relative">
              <h4 className="text-xl uppercase font-bold ml-2 mb-2">
                Quality Control
              </h4>
              <p className="ml-2 text-sm w-5/6">
                We test out everything to make sure that your project is fully
                functional, cross–browser compatible and meets your
                specifications.
              </p>
              <span className="absolute right-4 top-12">
                <span className="relative">
                  <FaComments />
                  <span className="border-2 border-gray-150 absolute inset-0 rotate-45 p-4 absolute right-2 -ml-2 -mt-2 shadow-md shadow-gray-500"></span>
                </span>
              </span>
            </div>
            <div className="relative">
              <h4 className="text-xl uppercase font-bold ml-2 mb-2">
                Pixel Perfect
              </h4>
              <p className="ml-2 text-sm w-5/6">
                We develop meaningful digital products and experiences that
                matter with design thinking and creative craftsmanship.
              </p>
              <span className="absolute right-4 top-12">
                <span className="relative ">
                  <FaComments />
                  <span className="border-2 border-gray-150 absolute inset-0 rotate-45 p-4 absolute right-2 -ml-2 -mt-2 shadow-md shadow-gray-500"></span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
