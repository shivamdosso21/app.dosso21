"use client";

import React, { useState, useEffect } from "react";

const OTP: React.FC = () => {
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

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const isDisabled = otpTimer > 0;

  return (
    <div className="mt-4 relative bg-white p-6 max-w-md rounded-lg shadow-lg flex flex-col items-center">
      <div className="text-center mb-6">
        <p className="mt-2 text-black text-lg">
          Enter the OTP sent to your mobile number
        </p>
      </div>

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

      <div className="flex gap-4">
        <button
          type="button"
          className={`py-2 px-4 rounded-lg font-medium shadow-md transition-colors ${
            isDisabled
              ? "bg-white text-black cursor-not-allowed hover:bg-gray-200"
              : "bg-gray-500 text-white hover:bg-gray-700"
          }`}
          onClick={() => {
            if (!isDisabled) {
              sendOtp(); 
            }
          }}
          disabled={isDisabled}
        >
          {isDisabled ? `Resend in ${formatTime(otpTimer)}` : "Resend"}
        </button>
      </div>
    </div>
  );
};

export default OTP;
