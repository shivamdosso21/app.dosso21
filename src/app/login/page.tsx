"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiShowAlt } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

const Page: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [mobileError, setMobileError] = useState("");

  const [showPassword1, setShowPassword1] = useState(false);
  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 10 && /^\d*$/.test(value)) {
      setMobileNumber(value);
      if (value.length < 10) {
        setMobileError("Number must be a 10 digit number");
      } else {
        setMobileError("");
      }
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!mobileNumber || !password || mobileError) {
      alert("Please fill in both fields correctly.");
      return;
    }

    console.log("Logging in...");
  };

  const isMobileValid = mobileNumber.length === 10 && !mobileError;

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center bg-gray-300">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-10 rounded shadow-2xl bg-white mx-4"
      >
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl select-none">Welcome!🙏</h1>
            <p className="text-xs select-none">Continue with Dosso21</p>
          </div>
          <div className="flex justify-end w-1/4 select-none">
            <img src="/logo.jpg" alt="Logo" />
          </div>
        </div>
        <div className="mt-10 gap-4 text-xs">
          <div>
            <h2 className="select-none">
              Enter Mobile Number<span className="text-red-500">*</span>
            </h2>
            <input
              className={`mt-2 p-2 w-full border select-none rounded focus:border-black focus:outline-none focus:shadow-xl focus:ring-gray-600 transition-transform transform focus:scale-105 ${
                mobileError
                  ? "border-red-500"
                  : isMobileValid
                  ? "border-green-500"
                  : "border-gray-300"
              }`}
              type="text"
              placeholder="Enter your Mobile Number"
              value={mobileNumber}
              onChange={handleMobileChange}
            />
            {mobileError && (
              <p className="text-red-500 text-xs">{mobileError}</p>
            )}
          </div>
          <div>
            <h2 className="mt-4 select-none">
              Password <span className="text-red-500">*</span>
            </h2>
            <div className="relative">
              <input
                className="mt-2 p-2 w-full border select-none rounded focus:border-black focus:outline-none focus:shadow-xl focus:ring-gray-600 transition-transform transform focus:scale-105"
                type={showPassword1 ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <button
                type="button"
                className="absolute right-3 top-4 text-xl"
                onClick={() => setShowPassword1(!showPassword1)}
              >
                {showPassword1 ? <BiShowAlt /> : <BiHide />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className={`bg-gray-800 mt-6 w-full p-3 select-none rounded text-white hover:bg-gray-600 ${
              (!mobileNumber || !password || mobileError) &&
              "opacity-50 cursor-not-allowed"
            }`}
            disabled={!isMobileValid}
          >
            LOG IN NOW
          </button>

          <div className="flex justify-center">
            <button className="mt-6 select-none">
              🔒
              <Link href="/forget_password">
                <span className="underline select-none">
                  Forget your password
                </span>
              </Link>
            </button>
          </div>
        </div>
        <div className="grid justify-center text-center gap-4 mt-6 text-xs">
          <p className="select-none">
            Don't have an account?
            <Link href="/registration">
              <span
                className="ml-1 underline text-xs select-none"
                style={{ color: "#50A5F1" }}
              >
                SIGNUP NOW
              </span>
            </Link>
          </p>
          <p className="mt-1 select-none">
            &copy; {currentYear} Dosso21, Developed by
            <span
              className="ml-2 text-xs select-none"
              style={{ color: "#0DC3C7" }}
            >
              THEBRANDZMEDIA
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Page;
