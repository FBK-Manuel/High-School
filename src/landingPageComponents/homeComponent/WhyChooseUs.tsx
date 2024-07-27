import React from "react";
import { FaSchool } from "react-icons/fa";
import { MdMenuBook, MdSchool } from "react-icons/md";

const WhyChooseUs: React.FC = () => {
  return (
    <div className="bg-[#f2f2f2] mt-32 ">
      <div className="lg:p-10 sm:p-7">
        <h3 className="text-4xl font-semibold text-center">
          Welcome to <span className="text-blue-600">Ademy</span> a prestigious
          secondary school
        </h3>
        <div className="w3-row-padding p-10 ">
          <div className="w3-third mb-5">
            <div className="w3-container bg-white hover:shadow-lg rounded-xl p-7 transition duration-500 ease-in-out">
              <div className="">
                <div className="flex  justify-center items-center">
                  <FaSchool className="size-10 text-blue-500 mb-2" />
                </div>
                <h4 className="text-center font-semibold mb-2 text-2xl">
                  Our School
                </h4>
                <p className="text-gray-300 text-center">
                  We take pride in our famous teaching traditions &
                  achievements.
                </p>
              </div>
            </div>
          </div>
          <div className="w3-third mb-5">
            <div className="w3-container bg-white rounded-xl p-7 hover:shadow-lg transition duration-500 ease-in-out">
              <div className="">
                <div className="flex  justify-center items-center">
                  <MdSchool className="size-10 text-blue-500 mb-2" />
                </div>
                <h4 className="text-center font-semibold mb-2 text-2xl">
                  Why Choose Us
                </h4>
                <p className="text-gray-300 text-center">
                  Our school ranked among the top 10 best school for children
                  aged 13-19.
                </p>
              </div>
            </div>
          </div>
          <div className="w3-third mb-5s">
            <div className="w3-container bg-white rounded-xl p-7 hover:shadow-lg transition duration-500 ease-in-out">
              <div className="">
                <div className="flex  justify-center items-center">
                  <MdMenuBook className="size-10 text-blue-500 mb-2" />
                </div>
                <h4 className="text-center font-semibold mb-2 text-2xl">
                  Achievements
                </h4>
                <p className="text-gray-300 text-center">
                  We have had the honor of becoming the Best School for Science
                  in 2022.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
