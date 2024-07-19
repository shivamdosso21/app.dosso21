"use client";
import Link from "next/link";
import React, { useState } from "react";

const Page: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileError, setMobileError] = useState("");

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

  const isMobileValid = mobileNumber.length === 10 && !mobileError;

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center bg-gray-300">
      <form className="w-full max-w-md p-10 rounded shadow-2xl bg-white mx-4">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl select-none">Forget Password</h1>
            <p className="text-xs select-none text-gray-500">
              Enter Phone Number to recover
            </p>
          </div>
          <div className="flex justify-end mb-2 w-1/4 select-none">
            <img src="/logo.jpg" alt="Logo" />
          </div>
        </div>
        <hr />
        <div className="mt-10 gap-4 text-xs">
          <div>
            <h2 className="select-none">
              Enter Mobile Number <span className="text-red-500">*</span>
            </h2>
            <input
              className={`mt-2 p-2 w-full border select-none rounded focus:border-black focus:outline-none focus:shadow-xl focus:transition-transform duration-300 ${
                mobileError
                  ? "border-red-500"
                  : isMobileValid
                  ? "border-green-500"
                  : "border-gray-300"
              }`}
              type="text"
              placeholder="Enter Mobile Number"
              value={mobileNumber}
              onChange={handleMobileChange}
            />
            {mobileError && (
              <p className="text-red-500 text-xs">{mobileError}</p>
            )}
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className={`bg-black mt-6 w-1/2 p-3 select-none rounded text-white hover:bg-gray-600 ${
                !mobileNumber && "opacity-50 cursor-not-allowed"
              }`}
              disabled={!isMobileValid}
            >
              PROCEED
            </button>
          </div>
        </div>
        <div className="grid justify-center text-center gap-4 mt-6 text-xs">
          <p className="select-none">
            Go Back to
            <Link href="/login">
              <span
                className="ml-1 underline text-xs select-none"
                style={{ color: "#50A5F1" }}
              >
                LOGIN NOW
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
