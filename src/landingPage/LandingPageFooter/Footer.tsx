// import React from 'react'

import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPinterest, FaQuora, FaRegCopyright } from "react-icons/fa";
import { IoHeartSharp, IoLogoWhatsapp } from "react-icons/io5";
import { MdFacebook } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { logo } from "../../assets/images";

// import { footerType } from "../../DataTypes/DataTypes";

function Footer() {
  const footerLink1 = [
    {
      name: "Home",
      path: "",
    },
    {
      name: "About Us",
      path: "",
    },
    {
      name: "Academics",
      path: "",
    },
    {
      name: "News",
      path: "",
    },
    {
      name: "Events",
      path: "",
    },
    {
      name: "Contact Us",
      path: "",
    },
    {
      name: "Sign In",
      path: "",
    },
    {
      name: "Sign Up",
      path: "",
    },
  ];

  const footerLink2 = [
    {
      id: 1,
      description: "55, Holand Street #33 Ogunbi Road",
    },
    {
      id: 2,
      description: "P.M.B 23",
    },
    {
      id: 2,
      description: "examplemail@gmail.com",
    },
    {
      id: 2,
      description: "+1-89-382-373",
    },
  ];
  return (
    <div>
      <footer className="bg-[#F2F2F2] text-black p-10 ">
        <div className="w3-row-padding p-10">
          <div className="w3-quarter p-2">
            <div className="inline-flex items-center justify-center">
              <img src={logo} alt="logo" className="w-24 h-17" />
              <p> -- School of Udemy Academy</p>
            </div>
            <div className="mt-5">
              <h4 className="text-gray-400 hover:text-gray-700 text-sm">
                Welcome to Udemy -- School for all all student home and abroad,
                all is welcome to our school. Template for High-school and other
                institutional schools across the blobe.
              </h4>
            </div>
          </div>
          <div className="w3-quarter  p-2">
            <div className="inline-flex items-center  justify-center">
              <h3 className="font-bold ">Reference Links</h3>
            </div>
            <div className="mt-5">
              {footerLink2.map((link, index) => (
                <div
                  className="text-gray-400 text-sm flex-col flex p-2 hover:text-gray-700"
                  key={index}>
                  {link.description}
                </div>
              ))}
            </div>
          </div>
          <div className="w3-quarter sm:mb-3 p-2">
            <div className="inline-flex items-center justify-center">
              <h3 className="font-bold">Contact Us</h3>
            </div>
            <div className="mt-5">
              {footerLink1.map((link, index) => (
                <Link
                  className="text-gray-400 text-sm flex-col flex p-2 hover:text-gray-700"
                  to={link.path}
                  key={index}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="w3-quarter sm:mb-3 p-2">
            <div className="inline-flex items-center justify-center">
              <h3 className="font-bold">Social Link</h3>
            </div>
            <div className="mt-5">
              <div className="flex flex-shrink-0 gap-2">
                <MdFacebook className="w-7 h-7  text-gray-500 hover:text-gray-800" />
                <IoLogoWhatsapp className="w-7 h-7  text-gray-500 hover:text-gray-800" />
                <AiFillTwitterCircle className="w-7 h-7  text-gray-500 hover:text-gray-800" />
                <RiInstagramFill className="w-7 h-7  text-gray-500 hover:text-gray-800" />
                <FaPinterest className="w-7 h-7  text-gray-500 hover:text-gray-800" />
                <FaQuora className="w-7 h-7  text-gray-500 hover:text-gray-800" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr className="border border-gray-400 p-3" />

          <div className="w3-container text-center ">
            <p className="inline-flex text-gray-400 pb-3 text-center justify-center items-center">
              <FaRegCopyright className="text-gray-400 text-center" size={15} />
              2024 | Alright Reserved | Made by HackHarik Developers.
              <IoHeartSharp className="hover:text-pink-700" size={20} />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
