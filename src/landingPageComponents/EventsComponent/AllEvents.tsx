import React from "react";
import { Link } from "react-router-dom";
import {
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
} from "../../assets/images";

const AllEvents: React.FC = () => {
  return (
    <div>
      <div className="w3-content">
        <div className="grid sm:grid-cols-2 mb-3 gap-4">
          <div className="bg-white rounded shadow-md relative">
            <img src={slide4} alt="" />
            <div className="text-balance p-5 font-bold">
              <h3 className="font-medium hover:text-blue-500 text-balance">
                <Link to=""> Youth Sport Conference</Link>
              </h3>
              <div className="flex gap-4">
                <i className="text-gray-400 text-xs ">30 Times Square</i>
                <i className="text-gray-400 text-xs ">9:00am</i>
              </div>
              <div>
                <p className="text-gray-500 hover:text-gray-800 mt-3">
                  Young sport themes all over the world has come together to
                  meet and celebrate with one reason in mind called sport
                </p>
              </div>
              <div className="absolute w3-hide-small w3-hide-medium top-56 left-96 w3-hide-small animate-bounce">
                <div className="bg-green-400 rounded-full w-20 h-20 flex items-center flex-col text-white justify-center">
                  <p className="text-balance font-normal">26</p>
                  <p className="text-balance font-normal">FEB</p>
                </div>
              </div>
              <div className="absolute top-24 left-44 w3-hide-large animate-none">
                <div className="bg-green-400 rounded-full w-16 h-16 flex items-center flex-col text-white justify-center">
                  <p className="text-balance font-normal">26</p>
                  <p className="text-balance font-normal">FEB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded shadow-md relative">
            <img src={slide3} alt="" />
            <div className="text-balance p-5 font-bold">
              <h3 className="font-medium hover:text-blue-500 text-balance">
                <Link to="">The 15th year culturer event</Link>
              </h3>
              <div className="flex gap-4">
                <i className="text-gray-400 text-xs ">30 Times Square</i>
                <i className="text-gray-400 text-xs ">9:00am</i>
              </div>
              <div>
                <p className="text-gray-500 hover:text-gray-800 mt-3">
                  Young sport themes all over the world has come together to
                  meet and celebrate with one reason in mind called sport
                </p>
              </div>
              <div className="absolute top-56 w3-hide-small w3-hide-medium  left-96 w3-hide-small animate-bounce">
                <div className="bg-green-400 rounded-full w-20 h-20 flex items-center flex-col text-white justify-center">
                  <p className="text-balance font-normal">20</p>
                  <p className="text-balance font-normal">MAR</p>
                </div>
              </div>
              <div className="absolute top-24 left-44 w3-hide-large animate-none">
                <div className="bg-green-400 rounded-full w-16 h-16 flex items-center flex-col text-white justify-center">
                  <p className="text-balance font-normal">20</p>
                  <p className="text-balance font-normal">MAR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 mb-3 gap-4">
          <div className="bg-white rounded shadow-md relative">
            <img src={slide5} alt="" />
            <div className="text-balance p-5 font-bold">
              <h3 className="font-medium hover:text-blue-500 text-balance">
                <Link to=""> Youth Sport Conference</Link>
              </h3>
              <div className="flex gap-4">
                <i className="text-gray-400 text-xs ">30 Times Square</i>
                <i className="text-gray-400 text-xs ">9:00am</i>
              </div>
              <div>
                <p className="text-gray-500 hover:text-gray-800 mt-3">
                  Young sport themes all over the world has come together to
                  meet and celebrate with one reason in mind called sport
                </p>
              </div>
              <div className="absolute w3-hide-small w3-hide-medium top-56 left-96 w3-hide-small animate-bounce">
                <div className="bg-green-400 rounded-full w-20 h-20 flex items-center flex-col text-white justify-center">
                  <p className="text-balance font-normal">26</p>
                  <p className="text-balance font-normal">FEB</p>
                </div>
              </div>
              <div className="absolute top-24 left-44 w3-hide-large animate-none">
                <div className="bg-green-400 rounded-full w-16 h-16 flex items-center flex-col text-white justify-center">
                  <p className="text-balance font-normal">26</p>
                  <p className="text-balance font-normal">FEB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded shadow-md relative">
            <img src={slide2} alt="" />
            <div className="text-balance p-5 font-bold">
              <h3 className="font-medium hover:text-blue-500 text-balance">
                <Link to="">The 15th year culturer day events</Link>
              </h3>
              <div className="flex gap-4">
                <i className="text-gray-400 text-xs ">30 Times Square</i>
                <i className="text-gray-400 text-xs ">9:00am</i>
              </div>
              <div>
                <p className="text-gray-500 hover:text-gray-800 mt-3">
                  Young sport themes all over the world has come together to
                  meet and celebrate with one reason in mind called sport
                </p>
              </div>
              <div className="absolute top-56 w3-hide-small w3-hide-medium  left-96 w3-hide-small animate-bounce">
                <div className="bg-green-400 rounded-full w-20 h-20 flex items-center flex-col text-white justify-center">
                  <p className="text-balance font-normal">20</p>
                  <p className="text-balance font-normal">MAR</p>
                </div>
              </div>
              <div className="absolute top-24 left-44 w3-hide-large animate-none">
                <div className="bg-green-400 rounded-full w-16 h-16 flex items-center flex-col text-white justify-center">
                  <p className="text-balance font-normal">20</p>
                  <p className="text-balance font-normal">MAR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 mb-3 gap-4">
          <div className="bg-white rounded shadow-md relative">
            <img src={slide6} alt="" />
            <div className="text-balance p-5 font-bold">
              <h3 className="font-medium hover:text-blue-500 text-balance">
                <Link to=""> Youth Sport Conference</Link>
              </h3>
              <div className="flex gap-4">
                <i className="text-gray-400 text-xs ">30 Times Square</i>
                <i className="text-gray-400 text-xs ">9:00am</i>
              </div>
              <div>
                <p className="text-gray-500 hover:text-gray-800 mt-3">
                  Young sport themes all over the world has come together to
                  meet and celebrate with one reason in mind called sport
                </p>
              </div>
              <div className="absolute w3-hide-small w3-hide-medium top-56 left-96 w3-hide-small animate-bounce">
                <div className="bg-green-400 rounded-full w-20 h-20 flex items-center flex-col text-white justify-center">
                  <p className="text-balance font-normal">26</p>
                  <p className="text-balance font-normal">FEB</p>
                </div>
              </div>
              <div className="absolute top-24 left-44 w3-hide-large animate-none">
                <div className="bg-green-400 rounded-full w-16 h-16 flex items-center flex-col text-white justify-center">
                  <p className="text-balance font-normal">26</p>
                  <p className="text-balance font-normal">FEB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded shadow-md relative">
            <img src={slide1} alt="" />
            <div className="text-balance p-5 font-bold">
              <h3 className="font-medium hover:text-blue-500 text-balance">
                <Link to=""> The 15th year culturer event</Link>
              </h3>
              <div className="flex gap-4">
                <i className="text-gray-400 text-xs ">30 Times Square</i>
                <i className="text-gray-400 text-xs ">9:00am</i>
              </div>
              <div>
                <p className="text-gray-500 hover:text-gray-800 mt-3">
                  Young sport themes all over the world has come together to
                  meet and celebrate with one reason in mind called sport
                </p>
              </div>
              <div className="absolute top-56 w3-hide-small w3-hide-medium  left-96 w3-hide-small animate-bounce">
                <div className="bg-green-400 rounded-full w-20 h-20 flex items-center flex-col text-white justify-center">
                  <p className="text-balance font-normal">20</p>
                  <p className="text-balance font-normal">MAR</p>
                </div>
              </div>
              <div className="absolute top-24 left-44 w3-hide-large animate-none">
                <div className="bg-green-400 rounded-full w-16 h-16 flex items-center flex-col text-white justify-center">
                  <p className="text-balance font-normal">20</p>
                  <p className="text-balance font-normal">MAR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
