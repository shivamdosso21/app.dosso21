"use client";
import React, { useState } from "react";

const Page: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [passwordError, setPasswordError] = useState("");
 
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

  const validatePassword = (password: string) => {
    return (
      password.length >= 6 &&
      /[a-zA-Z]/.test(password) && 
      /\d/.test(password) &&        
      /[!@#$%^&*(),.?":{}|<>]/.test(password) 
    );
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    if (!validatePassword(value)) {
      setPasswordError("Password must be at least 6 characters long, contain at least 1 letter, 1 number, and 1 special character.");
    } else {
      setPasswordError("");
    }
  };

  const isMobileValid = mobileNumber.length === 10 && !mobileError;
  const isPasswordValid = validatePassword(password);

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center bg-gray-300">
      <div className="w-1/4 p-10 rounded shadow-2xl bg-white">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl">Welcome!🙏</h1>
            <p className="text-xs">Continue with Dosso21</p>
          </div>
          <div className="flex justify-end w-1/4">
            <img src="/logo.jpg" alt="" />
          </div>
        </div>
        <div className="mt-10 gap-4 text-xs">
          <div>
            <h2>Enter Mobile Number</h2>
            <input
              className={`mt-4 p-2 w-full border rounded focus:border-black focus:outline-none ${mobileError ? "border-red-500" : isMobileValid ? "border-green-500" : "border-gray-300"}`}
              type="text"
              placeholder="Enter your Mobile Number"
              value={mobileNumber}
              onChange={handleMobileChange}
            />
            {mobileError && <p className="text-red-500 text-xs">{mobileError}</p>}
          </div>
          <h2 className="mt-2">Password</h2>
          <input
            className={`mt-4 p-2 w-full border rounded focus:border-black focus:outline-none ${passwordError ? "border-red-500" : isPasswordValid ? "border-green-500" : "border-gray-300"}`}
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <p className="text-red-500 text-xs">{passwordError}</p>}
          <button className="bg-gray-800 mt-4 w-full p-3 rounded text-white hover:bg-gray-600">
            LOG IN NOW
          </button>

          <div className="flex justify-center">
            <button className="mt-6">🔒<span className="underline">Forget your password</span></button>
          </div>
        </div>
        <div className="grid justify-center text-center gap-4 mt-6 text-xs">
          <p>
            Don't have an account?
            <span className="ml-1 underline text-xs" style={{ color: '#50A5F1' }}>SIGNUP NOW</span>
          </p>
          <p className="mt-1">
            &copy; {currentYear} Dosso21, Developed by
            <span className="text-xs" style={{ color: '#0DC3C7' }}> THEBRANDZMEDIA</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
