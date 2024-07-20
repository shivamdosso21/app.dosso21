"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Page: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
  const [otpTimer, setOtpTimer] = useState(0); 
  const [otpSent, setOtpSent] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (otpTimer > 0 && otpSent) {
      timer = setTimeout(() => {
        setOtpTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else if (otpTimer === 0) {
      setOtpSent(false);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [otpTimer, otpSent]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    if (isMobileValid) {
      setShowOtp(true);
      sendOtp(); 
    }
  };

  const sendOtp = () => {
    setOtpSent(true);
    setOtpTimer(120); 
    setOtpDigits(["", "", "", "", "", ""]);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtpDigits = [...otpDigits];
      newOtpDigits[index] = value;
      setOtpDigits(newOtpDigits);

      if (index < otpDigits.length - 1 && value.length === 1) {
        const nextInput = document.getElementById(`otpInput-${index + 1}`) as HTMLInputElement;
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const handleVerify = () => {
    console.log("Verify OTP:", otpDigits.join(""));
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const isMobileValid = mobileNumber.length === 10 && !mobileError;
  const isOtpComplete = otpDigits.every(digit => digit !== "");
  const isDisabled = otpTimer > 0;

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center bg-gray-300">
      {!showOtp ? (
        <form onSubmit={handleSubmit} className="w-full max-w-md p-10 rounded shadow-2xl bg-white mx-4">
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
                className={`mt-2 p-2 w-full border select-none rounded focus:border-black focus:outline-none focus:shadow-xl focus:ring-gray-600 transition-transform transform focus:scale-105 ${
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
      ) : (
        <div className="w-full max-w-md p-10 rounded shadow-2xl bg-white mx-4">
          <h1 className="text-xl mb-4">OTP Verification</h1>
          <div className="flex gap-2 mb-6">
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <input
                  key={index}
                  maxLength={1}
                  type="tel"
                  id={`otpInput-${index}`}
                  value={otpDigits[index]}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  className="w-12 h-12 text-center border border-black text-black text-lg bg-gray-200 rounded-xl focus:border-black focus:ring-2 focus:ring-gray-600 transition-transform transform focus:scale-105"
                />
              ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 justify-center">
              <a
                href="#"
                className={`py-2 px-4 rounded-lg font-medium shadow-md transition-colors ${
                  isDisabled
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-gray-500 text-white hover:bg-gray-700"
                }`}
                onClick={() => {
                  if (!isDisabled) {
                    sendOtp(); 
                  }
                }}
                style={{ pointerEvents: isDisabled ? "none" : "auto" }}
              >
                {isDisabled ? `Resend : ${formatTime(otpTimer)}` : "Resend"}
              </a>
            </div>
            {isOtpComplete && (
              <Link href='/update_password'><button
              onClick={handleVerify}
              className="bg-gray-700 w-full p-3 select-none rounded-xl text-white hover:bg-gray-600"
            >
              VERIFY
            </button></Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
