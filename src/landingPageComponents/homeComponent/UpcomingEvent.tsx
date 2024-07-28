import React from "react";
import { FaCalendarDays } from "react-icons/fa6";

const UpcomingEvent: React.FC = () => {
  return (
    <div>
      <div className="bg-[#F2F2F2] p-10 mb-20 mt-20">
        <div className="text-center">
          <p className="text-gray-500 font-semibold p-3">Explore Our Events</p>
          <h1 className="font-bold text-4xl mb-10">
            UpComing <span className="text-blue-600">Events</span>
          </h1>
        </div>
        <div className="w3-row-padding">
          <div className="w3-half p-5">
            <div className="w3-card-4 mb-5 rounded">
              <img
                src="/images/slide6.png"
                width="100%"
                height="100%"
                alt="image"
                className="rounded-md"
              />
              <div className="w3-container pb-4 w3-white rounded-lg">
                <h4 className="font-semibold mt-5">Youth Sports Conference</h4>
                <div className="flex text-gray-500">
                  <p>30 time Square</p>
                  <p className="ml-6 mr-9">8:00 AM</p>
                  <FaCalendarDays className="size-5 text-blue-600 hover:text-blue-700" />
                </div>
              </div>
            </div>
          </div>
          <div className="w3-half p-5">
            <div className="w3-card-4 rounded-lg">
              <img
                src="/images/slide1.jpg"
                width="100%"
                height="100%"
                alt="image"
                className="rounded-md"
              />
              <div className="w3-container pb-4 w3-white rounded-lg">
                <h4 className="font-semibold mt-5">Youth Sports Conference</h4>
                <div className="flex text-gray-500">
                  <p>30 time Square</p>
                  <p className="ml-6 mr-9">8:00 AM</p>
                  <FaCalendarDays className="size-5 text-blue-600 hover:text-blue-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
