// import React from 'react'

// import React from 'react'

import { FaLongArrowAltRight } from "react-icons/fa";

import { useState } from "react";
import {
  LoginformDataErrorType,
  LoginformDataType,
} from "../DataTypes/DataTypes";
import { notification } from "antd";
import { Link } from "react-router-dom";
import { BsBoxArrowLeft } from "react-icons/bs";

function SignIn() {
  const [formData, setFormData] = useState<LoginformDataType>({
    email: "",
    role: "",
    password: "",
  });
  const [errors, setErrors] = useState<LoginformDataErrorType>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length === 0) {
      notification.success({
        message: "Success",
        description: "Successfully logged in.",
        duration: 10, // Duration in seconds
        placement: "topRight", // Position of the notification
      });

      console.log("Form submitted successfully:", formData);
    } else {
      setErrors(newErrors);
    }
  };

  const validate = (data: typeof formData) => {
    const errors: Partial<typeof formData> = {};
    if (!data.email.includes("@")) errors.email = "Email is invalid";
    if (!data.role) errors.role = "Role is required";
    if (data.password.length < 8)
      errors.password = "Password must be at least 8 characters long";

    return errors;
  };

  return (
    <div>
      <div>
        <div>
          <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
              <Link to="/signup" className="">
                <BsBoxArrowLeft className="text-indigo-500 hover:text-indigo-800 font-bold size-7" />
              </Link>
              <div className="flex items-center flex-col justify-center">
                <img
                  src="logo/fed.png"
                  alt="logo"
                  className="w-20 h-17 rounded-full"
                />
                <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
              </div>
              <form method="post" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    className={`${formData.email ? "border-green-500" : ""} ${
                      errors.email ? "border-red-500" : ""
                    } mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  />
                  {errors.email && (
                    <span className="mt-2 text-sm text-red-600">
                      {errors.email}
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700">
                    Password:
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                    id="password"
                    className={`${
                      formData.password ? "border-green-500" : ""
                    } ${
                      errors.password ? "border-red-500" : ""
                    } mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  />
                  {errors.password && (
                    <span className="mt-2 text-sm text-red-600">
                      {errors.password}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="role" className="block text-gray-700">
                    Login As:
                  </label>
                  <select
                    id="role"
                    value={formData.role || ""}
                    name="role"
                    onChange={handleChange}
                    className={`${formData.role ? "border-green-500" : ""}  ${
                      errors.role ? "border-red-500" : ""
                    } mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}>
                    <option value="" disabled>
                      Select Account
                    </option>
                    <option value="Student">Student</option>
                    <option value="Administrator">Administrator</option>
                    <option value="Teacher" disabled>
                      Teacher
                    </option>
                  </select>
                  {errors.role && (
                    <span className="mt-2 text-sm text-red-600">
                      {errors.role}
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-700 text-sm">
                    Don't have an account?{" "}
                    <Link
                      className="text-indigo-500 text-sm hover:text-indigo-800 ml-1"
                      to="/signup">
                      Register
                    </Link>
                  </p>
                  <div>
                    <Link
                      className="text-indigo-500 text-sm hover:text-indigo-800 "
                      to="#">
                      Forgotten Password?
                    </Link>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Login
                  <FaLongArrowAltRight className="ml-3 size-6 hover:text-indigo-500" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
