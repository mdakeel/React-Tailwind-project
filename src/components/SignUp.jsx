import React from "react";
import logo from "../assets/logo.png";
import down from "../assets/down.png";
import google from "../assets/google.png";
import fb from "../assets/fb.png";
import password from "../assets/password hide.png";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate()
  const RedirectToLogin = () => {
    navigate("/signup")
  }
  return (
    // <section className="h-full bg-gray-300 ">
    <div className="md:h-svh p-10 ">
      <div className="flex flex-col md:flex-row h-full w-full gradientBg shadow-3xl  ">
        <div className="flex  justify-center items-center text-center  p-5 md:w-5/12 ">
          <div className="md:mx-6  md:p-12">
            <img src={logo} className="mx-auto w-20" alt="logo" />
            <h3 className="md:text-3xl text-xl md:mt-5 mt-3 text-white font-bold">
              Find 3D Objects, Mockups and Illustration here.
            </h3>
          </div>
        </div>
        <div className="bg-white  px-4 md:px-0 md:w-7/12 md:rounded-l-3xl ">
          <div className="md:mx-6 p-3">
            <div className="flex items-center gap-1 float-right ">
              <h4 className="text-[#454545]">Language</h4>
              <img src={down} alt="" className="w-4" />
            </div>
            <div className="md:mt-12 mt-10">
              <h1 className="md:text-[36px] text-[28px] md:pl-10 font-semibold pb-8 ">
                Create Account
              </h1>
              <div className="flex flex-col  md:flex-row md:gap-x-10 gap-5 justify-center">
                <div className="flex items-center gap-6 border-2  rounded p-3 hover:border-3 hover:border-primary cursor-pointer transition-all duration-300 shadow-xl">
                  <img src={google} alt="" className="w-7" />
                  <p className="text-primary font-bold">Sign up with google</p>
                </div>
                <div className="flex items-center gap-5 border-2  rounded p-3 hover:border-3 hover:border-primary cursor-pointer transition-all duration-300 shadow-xl">
                  <img src={fb} alt="" className="w-7" />
                  <p className="text-primary font-bold">Sign up with google</p>
                </div>
              </div>
              <div className=" flex gap-2  justify-center mt-5 items-center text-center ">
                <span className=" text-xl font-bold ">---</span>
                <p className="text-xl  font-bold">OR</p>
                <span className=" text-xl font-bold ">---</span>
              </div>
              <div className="md:pl-12 md:pr-12">
                <form action="/">
                  <div className="flex flex-col gap-5 ">
                    <div class="relative">
                      <input
                        autocomplete="off"
                        id="name"
                        name="name"
                        type="text"
                        class="peer placeholder-transparent h-10 w-full border-b-2 border-primary text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Full name"
                      />
                      <label
                        for="email"
                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Full name
                      </label>
                    </div>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        id="email"
                        name="email"
                        type="text"
                        class="peer placeholder-transparent h-10 w-full border-b-2 border-primary text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Email address"
                      />
                      <label
                        for="email"
                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Email Address
                      </label>
                    </div>
                    <div className="relative">
                      <div class="relative">
                        <input
                          autocomplete="off"
                          id="password"
                          name="password"
                          type="text"
                          class="peer placeholder-transparent h-10 w-full border-b-2 border-primary text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Password"
                        />
                        <label
                          for="email"
                          class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Password
                        </label>
                      </div>
                      <div className="absolute top-3 right-1 cursor-pointer">
                      <img src={password} alt="" className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="md:mt-8">
                      <button onClick={RedirectToLogin} className="btnPrimary gradientBg2 rounded shadow-xl hover:shadow-none rounded-l-3xl w-full">Create Accounte</button>
                    </div>
                    <div className="mb-5">
                      <p className="text-primary font-semibold text-sm">Allready have an account? <span className="text-[#0500FF] cursor-pointer">Log In</span></p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
