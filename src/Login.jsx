import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import { jwtDecode } from "jwt-decode";
import { GoogleLogin as Google } from "@react-oauth/google";
import Facebook from "./FacebookLogin";
import { login } from "./redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import {
  clearState,
  setEmailData,
  setPasswordData,
  setShowPassword,
} from "./redux/reducers/authReducer";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log("navigate :>> ", navigate);
  const emailData = useSelector((state) => state.auth.emailData);
  const passwordData = useSelector((state) => state.auth.passwordData);
  const message = useSelector((state) => state.auth.message);
  console.log("message :>> ", message);
  const showPassword = useSelector((state) => state.auth.showPassword);

  const handleEmail = (event) => {
    dispatch(setEmailData(event.target.value));
  };

  const handlePassword = (event) => {
    dispatch(setPasswordData(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col items-center text-center justify-center bg-image h-full min-h-screen">
      <div className="  w-full h-full flex flex-col items-center text-center justify-center">
        <Navbar />
        <div className="bg-black/50  flex flex-col rounded-xl shadow-lg p-8 md:p-10 space-y-4 backdrop-blur-lg my-64">
          <div className="text-5xl  font-bold tracking-tight leading-tight text-white relative">
            Login
            <div></div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col flex-wrap justify-center items-center "
            >
              <div className="flex flex-col mt-5 w-96 gap-y-5">
                <div className="flex items-center bg-white rounded-lg">
                  <MdOutlineEmail size={30} color={"gray"} className="ml-3" />
                  <input
                    type="text"
                    placeholder="Email"
                    value={emailData}
                    onChange={handleEmail}
                    className=" bg-transparent border-none outline-none  p-2 m-2 flex-grow "
                  />
                </div>
                <div className="flex items-center bg-white rounded-lg text-center">
                  <RiLockPasswordLine
                    size={30}
                    color={"gray"}
                    className="ml-3"
                  />
                  <input
                    type={showPassword ? "text" : "password"} // Ternary operator to toggle between "text" and "password"
                    placeholder="Password"
                    value={passwordData}
                    onChange={handlePassword}
                    className="bg-transparent border-none outline-none p-2 m-2 flex-grow"
                  />
                  <button
                    className="mr-3"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(setShowPassword(!showPassword));
                    }}
                  >
                    {showPassword ? (
                      <PiEyeLight size={22} color={"gray"} />
                    ) : (
                      <PiEyeSlashLight size={22} color={"gray"} />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-5 mt-5 items-center">
                <button
                  type="submit"
                  onClick={async () => {
                    const response = await dispatch(login(navigate));
                    console.log("response :>> ", response);
                  }}
                  className="flex border-2 font-semibold items-center justify-center w-96 h-10 border-gray-300 rounded-lg p-2 bg-white text-black hover:bg-gray-300 hover:text-black font-xl"
                >
                  Login
                </button>
              </div>

              <div className="flex flex-col gap-5 mt-5 items-center">
                <div className="flex font-semibold items-center text-center relative">
                  <div className="border border-white flex-grow mr-2 w-40"></div>
                  <div className="text-white font-semibold">Or</div>
                  <div className="border border-white flex-grow ml-2 w-40"></div>
                </div>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className=" flex border-2 font-semibold items-center justify-center text-center w-96  border-gray-300 rounded-lg p-2 bg-white text-black hover:bg-gray-300 hover:text-black font-xl"
                >
                  <div className="mr-5">
                    <FcGoogle size={20} />
                  </div>
                  <GoogleLogin buttonText="Login with Google" />
                </div>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className=" flex font-semibold items-center justify-center text-center w-96   rounded-lg p-2 bg-[#4267b2] text-white hover:bg-blue-700 hover:text-white font-xl"
                >
                  <div className="mr-5">
                    <FaFacebookF size={20} />
                  </div>
                  <Facebook buttonText="Login with Facebook" />
                </div>
              </div>
              <span class="block  text-white sm:text-center mt-5 font-semibold ">
                Dont have an account?{" "}
                <a
                  onClick={() => {
                    dispatch(clearState());
                  }}
                  href="/register"
                  class="hover:underline  text-blue-400 hover:text-blue-500"
                >
                  Register Here.
                </a>
                {"   "}
              </span>
            </form>
          </div>
          <div className="flex flex-col items-center font-semibold">
            {message && (
              <p
                className={`text-lg ${
                  message.includes("successful")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
