import { Link } from "react-router-dom";
import { navLinks } from "./NavLink";
// import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { MdFacebook, MdKeyboardArrowDown } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
// import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { HiOutlineLogin } from "react-icons/hi";
import { TbLogin2 } from "react-icons/tb";
// import { useEffect, useState } from "react";

// import React from 'react'
const items: MenuProps["items"] = [
  {
    label: (
      <Link
        className="inline-flex justify-center items-center gap-2 font-semibold"
        to="/login">
        <TbLogin2 />
        SIgn In
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link
        className="inline-flex justify-center items-center gap-2 font-semibold"
        to="/signup">
        <HiOutlineLogin />
        Sign Up
      </Link>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "Parent",
    key: "3",
    disabled: true,
  },
];

function NavBar() {
  // const [stickyEffect, setStickyEffect] = useState(false);
  // // navbar background sticky scroll effect
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 150) {
  //       setStickyEffect(true);
  //     } else {
  //       setStickyEffect(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="w3-top ">
      {/* for desktop */}
      <nav className=" w3-hide-small top-0 flex z-50 items-center justify-between shadow-md bg-white text-black pr-10 pl-10 p-5">
        <div className="flex-shrink-0">
          {/* Logo */}
          <img src="/logo/fed.png" alt="Logo" className="h-11 sm:h-10 " />
        </div>
        <div className="flex-grow flex justify-center">
          {navLinks.map((navbar, title) => (
            <Link
              key={title}
              to={navbar.path}
              className="px-4 py-2 hover:bg-gray-700 font-semibold hover:text-white rounded-md">
              <span className="items-center justify-center gap-2 inline-flex">
                {React.createElement(navbar.icon)} {navbar.name}
              </span>
            </Link>
          ))}
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space className="h-8 sm:h-10 rounded-md p-1 bg-blue-800 text-white hover:bg-gray-700 font-semibold hover:text-white text-sm ">
                School Portal
                <MdKeyboardArrowDown />
              </Space>
            </a>
          </Dropdown>
        </div>

        <div className="flex flex-shrink-0 gap-5">
          <MdFacebook className="w-7 h-7  text-gray-500 hover:text-gray-800" />
          <IoLogoWhatsapp className="w-7 h-7  text-gray-500 hover:text-gray-800" />
          <AiFillTwitterCircle className="w-7 h-7  text-gray-500 hover:text-gray-800" />
        </div>
      </nav>
      {/* on small screen */}
      <nav className="w3-hide-large w3-top flex justify-between w3-hide-medium shadow-md bg-white text-black p-4">
        <div className="">
          <img src="/logo/fed.png" width={50} height={40} alt="" />
        </div>
        <div className="pr-9 mt-2">
          <button onClick={() => setIsOpen(!isOpen)} className="">
            {!isOpen ? (
              <GiHamburgerMenu className="size-7 transition duration-500 text-gray-700 ease-out" />
            ) : (
              <FaTimes className="size-7 transition duration-500 ease-out text-red-700" />
            )}
          </button>

          <div
            className={`sidebar ${
              isOpen ? "block" : "hidden"
            } lg:block fixed w3-animate-opacity top-0 left-0 p-5 w-64 h-screen bg-white text-black shadow-2xl transition-all duration-500 ease-in-out`}>
            {/* sidebar content */}
            <div className="flex flex-col flex-grow p-5">
              {navLinks.map((navbar, title) => (
                <Link
                  key={title}
                  to={navbar.path}
                  className="px-4 py-2 hover:bg-gray-700 p-5 font-semibold hover:text-white rounded-md">
                  <span className="items-center justify-center gap-2 inline-flex">
                    {React.createElement(navbar.icon)} {navbar.name}
                  </span>
                </Link>
              ))}
              <Dropdown menu={{ items }} className="pt-40">
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="h-8 sm:h-10 rounded-md p-1 bg-blue-800 text-white hover:bg-gray-700 font-semibold hover:text-white text-sm ">
                    School Portal
                    <MdKeyboardArrowDown />
                  </Space>
                </a>
              </Dropdown>
            </div>
            <hr className="border border-gray-600 mt-4" />
            <div className="top-0 bottom-0 p-5">
              <div className="flex flex-shrink-0 gap-5">
                <MdFacebook className="w-7 h-7  text-gray-500 hover:text-gray-800" />
                <IoLogoWhatsapp className="w-7 h-7  text-gray-500 hover:text-gray-800" />
                <AiFillTwitterCircle className="w-7 h-7  text-gray-500 hover:text-gray-800" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
