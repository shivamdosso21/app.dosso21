"use client";
import React, { useState } from "react";

const Page: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  
  const [mobileError, setMobileError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMobileNumber(value);
    if (value.length < 10) {
      setMobileError("Number must be a 10 digit number");
    } else {
      setMobileError("");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (value !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleReferralChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReferralCode(e.target.value);
  };

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center bg-white">
      <div className="w-1/4 p-10 rounded shadow-xl">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl">Welcome!🙏</h1>
            <p className="text-xs">Continue with Dosso21</p>
          </div>
          <div className="flex justify-end w-1/4">
            <img src="/logo.jpg" alt="Logo" />
          </div>
        </div>
        <div className="mt-10 gap-4 text-xs">
          <div>
            <h2>Mobile Number</h2>
            <input
              className={`mt-4 focus:border-transparent focus:outline-none mt-1 p-2 w-full ${mobileError ? "border-red-500" : ""}`}
              type="text"
              placeholder="Enter your Number"
              value={mobileNumber}
              onChange={handleMobileChange}
              onBlur={() => {
                if (mobileNumber.length < 10) {
                  setMobileError("Number must be a 10 digit number");
                } else {
                  setMobileError("");
                }
              }}
            />
            {mobileError && <p className="text-red-500 text-xs">{mobileError}</p>}
          </div>
          <div>
            <h2>Email</h2>
            <input
              className={`mt-4 focus:border-transparent focus:outline-none mt-1 p-2 w-full ${emailError ? "border-red-500" : ""}`}
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={handleEmailChange}
              onBlur={() => {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                  setEmailError("Please enter a valid email address");
                } else {
                  setEmailError("");
                }
              }}
            />
            {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
          </div>
          <div>
            <h2>Password</h2>
            <input
              className={`mt-4 focus:border-transparent focus:outline-none mt-1 p-2 w-full ${passwordError ? "border-red-500" : ""}`}
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && <p className="text-red-500 text-xs">{passwordError}</p>}
          </div>
          <div>
            <h2>Confirm Password</h2>
            <input
              className={`mt-4 focus:border-transparent focus:outline-none mt-1 p-2 w-full ${confirmPasswordError ? "border-red-500" : ""}`}
              type="password"
              placeholder="Confirm your Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {confirmPasswordError && <p className="text-red-500 text-xs">{confirmPasswordError}</p>}
          </div>
          <div>
            <h2>Referral Code (optional)</h2>
            <input
              className={`mt-4 focus:border-transparent focus:outline-none mt-1 p-2 w-full`}
              type="text"
              placeholder="Enter your Referral Code"
              value={referralCode}
              onChange={handleReferralChange}
            />
          </div>
          
          <button className="bg-gray-800 mt-4 w-full p-3 rounded text-white hover:bg-gray-600">
            LOG IN NOW
          </button>

          <div className="flex justify-center">
            <button className="mt-6">🔒<span className="underline">Forget your password</span></button>
          </div>
        </div>
      </div>
      <div className="grid justify-center text-center gap-4 mt-6 text-xs">
        <p>
          Don't have an account?
          <span className="ml-1 underline text-xs" style={{ color: '#50A5F1' }}>SIGNUP NOW</span>
        </p>
        <p className="mt-2">
          &copy; {currentYear} Dosso21, Developed by
          <span className="text-xs" style={{ color: '#0DC3C7' }}> THEBRANDZMEDIA</span>
        </p>
        <p className="mt-2 text-xs">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Page;
