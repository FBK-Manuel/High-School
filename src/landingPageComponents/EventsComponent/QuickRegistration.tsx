import React from "react";
import { IoArrowForward, IoArrowRedoSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const QuickRegistration: React.FC = () => {
  return (
    <div className="p-20">
      <div className="w3-content">
        <div className="flex justify-between items-center gap-2">
          <div className="inline-flex">
            <IoArrowRedoSharp className="text-white size-10 hover:text-gray-400 animate-bounce" />
            <h3 className="text-white font-normal text-2xl">
              Become a prestigious student now!
            </h3>
          </div>
          <div className="inline-flex flex-wrap">
            <Link
              className="bg-[#1054C8] mb-2 inline-flex gap-2 justify-center items-center border mr-2 text-white text-xl p-2 hover:bg-white hover:text-blue-600 transition duration-700 ease-in-out border-white rounded"
              to="/contact">
              Contact <IoArrowForward />
            </Link>
            <Link
              className="bg-white border mb-2 inline-flex gap-2 justify-center items-center text-blue-600 p-3 text-xl hover:bg-[#1054C8] hover:text-white transition duration-700 ease-in-out border-white rounded"
              to="/signup">
              Register
              <IoArrowForward />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickRegistration;
