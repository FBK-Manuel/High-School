// import React from 'react'

import { FaLongArrowAltRight } from "react-icons/fa";

import { useState } from "react";
import { formDataErrorType, formDataType } from "../DataTypes/DataTypes";
import { notification } from "antd";
import { Link } from "react-router-dom";
import { BsBoxArrowLeft } from "react-icons/bs";

function Signup() {
  const [formData, setFormData] = useState<formDataType>({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<formDataErrorType>({});
  const [checked, setChecked] = useState<boolean>(false);
  const [checkedMsg, setCheckedMsg] = useState(false);

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
      if (!checked) {
        setCheckedMsg(true);
        return;
      } else {
        setCheckedMsg(false);
      }
      notification.success({
        message: "Success",
        description: "Successfully registered. Verify your email now",
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
    if (!data.firstName.trim()) {
      errors.firstName = "First name is required";
    }
    if (!data.lastName.trim()) errors.lastName = "Last name is required";
    if (!data.email.includes("@")) errors.email = "Email is invalid";
    if (!data.role) errors.role = "Role is required";

    if (data.password.length < 8)
      errors.password = "Password must be at least 8 characters long";
    if (data.password !== data.confirmPassword || data.confirmPassword === "")
      errors.confirmPassword = "Both Password do not match try again";
    return errors;
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
          <Link to="/" className="">
            <BsBoxArrowLeft className="text-indigo-500 hover:text-indigo-800 font-bold size-7" />
          </Link>
          <div className="flex items-center flex-col justify-center">
            <img
              src="logo/fed.png"
              alt="logo"
              className="w-20 h-17 rounded-full"
            />
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          </div>
          <form method="post" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="">
                <label htmlFor="email" className="block text-gray-700">
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstname"
                  placeholder="Enter Your First Name"
                  name="firstName"
                  value={formData.firstName || ""}
                  onChange={handleChange}
                  className={` mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.firstName ? "border-red-500" : ""
                  } ${formData.firstName ? "border-green-500" : ""}`}
                />
                {errors.firstName && (
                  <span className="mt-2 text-sm text-red-600">
                    {errors.firstName}
                  </span>
                )}
              </div>
              <div className="">
                <label htmlFor="email" className="block text-gray-700">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastname"
                  placeholder="Enter Your Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`${errors.lastName ? "border-red-500" : ""} ${
                    formData.lastName ? "border-green-500" : ""
                  } mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                />
                {errors.lastName && (
                  <span className="mt-2 text-sm text-red-600">
                    {errors.lastName}
                  </span>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email:
              </label>
              <input
                placeholder="Enter Your Email Address"
                type="email"
                id="email"
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
                placeholder="Enter Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                id="password"
                className={`${formData.password ? "border-green-500" : ""} ${
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
              <label htmlFor="confirmPassword" className="block text-gray-700">
                Confirm Password:
              </label>
              <input
                placeholder="Enter Confirm Password"
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                value={formData.confirmPassword}
                id="confirmPassword"
                className={`${
                  formData.confirmPassword ? "border-green-500" : ""
                } ${
                  errors.confirmPassword ? "border-red-500" : ""
                } mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              />
              {errors.confirmPassword && (
                <span className="mt-2 text-sm text-red-600">
                  {errors.confirmPassword}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="role" className="block text-gray-700">
                Register As:
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
                <option value="Administrator" disabled>
                  Administrator
                </option>
                <option value="Teacher" disabled>
                  Teacher
                </option>
              </select>
              {errors.role && (
                <span className="mt-2 text-sm text-red-600">{errors.role}</span>
              )}
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                checked={checked}
                name="checkBox"
                onChange={() => setChecked(!checked)}
                id="terms"
                className={` h-4 w-4 text-indigo-600 border border-gray-300 rounded focus:ring-indigo-500`}
              />
              <label htmlFor="terms" className="ml-2 block text-gray-700">
                I agree to the{" "}
                <span className="text-indigo-600 focus:ring-indigo-500">
                  Terms
                </span>{" "}
                and
                <span className="text-indigo-600 focus:ring-indigo-500">
                  {" "}
                  Conditions
                </span>
              </label>
              {checkedMsg && (
                <span className="mt-2 text-sm text-red-600">
                  Please check the box to agree to the terms.
                </span>
              )}
            </div>
            <div className="inline-flex items-center mb-4">
              <p className="text-gray-700 text-sm">Already have an account? </p>
              <Link
                className="text-indigo-500 text-sm hover:text-indigo-800 ml-1"
                to="/login">
                login
              </Link>
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Sign Up
              <FaLongArrowAltRight className="ml-3 size-6 hover:text-indigo-500" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
