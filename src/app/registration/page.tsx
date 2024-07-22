"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BiShowAlt, BiHide } from "react-icons/bi";

const Page: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
  const [otpTimer, setOtpTimer] = useState(120);
  const [otpSent, setOtpSent] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [is18, setIs18] = useState(false);
  const [ageCertificationError, setAgeCertificationError] = useState("");

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (otpTimer > 0 && otpSent) {
      timer = setTimeout(() => {
        setOtpTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    if (otpTimer === 0) {
      setOtpSent(false);
    }

    return () => clearTimeout(timer);
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

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (!value) {
      setEmailError("Email is required.");
    } else if (!validateEmail(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    if (!value) {
      setPasswordError("Password is required.");
    } else if (!validatePassword(value)) {
      setPasswordError(
        "Password must be at least 6 characters long, contain at least 1 letter, 1 number, and 1 special character."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (password !== value) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !mobileNumber ||
      !email ||
      !password ||
      !confirmPassword ||
      !is18 ||
      mobileError ||
      emailError ||
      passwordError ||
      confirmPasswordError ||
      otpSent
    ) {
      if (!is18) {
        setAgeCertificationError(
          "You must certify that you're at least 18 years old."
        );
      }
    }

    sendOtp();
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
        const nextInput = document.getElementById(`otpInput-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
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

  const isMobileValid = mobileNumber.length === 10 && !mobileError;
  const isPasswordValid = validatePassword(password);
  const isConfirmPasswordValid = password === confirmPassword;
  const isOtpComplete = otpDigits.every((digit) => digit !== "");
  const isDisabled = otpTimer > 0;

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center bg-gray-300">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-10 rounded shadow-2xl bg-white mx-4"
      >
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl select-none">Free Registration</h1>
            <p className="text-xs select-none">
              Get Your Free Dosso21 account now
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
          <div>
            <h2 className="mt-4 select-none">
              Email <span className="text-red-500">*</span>
            </h2>
            <input
              className={`mt-2 p-2 w-full border select-none rounded focus:border-black focus:outline-none focus:shadow-xl focus:ring-gray-600 transition-transform transform focus:scale-105 ${
                emailError
                  ? "border-red-500"
                  : email
                  ? "border-green-500"
                  : "border-gray-300"
              }`}
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
          </div>
          <div>
            <h2 className="mt-4 select-none">
              Password <span className="text-red-500">*</span>
            </h2>
            <div className="relative">
              <input
                className={`mt-2 p-2 w-full border select-none rounded focus:border-black focus:outline-none focus:shadow-xl focus:ring-gray-600 transition-transform transform focus:scale-105 ${
                  passwordError
                    ? "border-red-500"
                    : isPasswordValid
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
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
            {passwordError && (
              <p className="text-red-500 text-xs">{passwordError}</p>
            )}
          </div>
          <div>
            <h2 className="mt-4 select-none">
              Confirm Password <span className="text-red-500">*</span>
            </h2>
            <div className="relative">
              <input
                className={`mt-2 p-2 w-full border select-none rounded focus:border-black focus:outline-none focus:shadow-xl focus:ring-gray-600 transition-transform transform focus:scale-105 ${
                  confirmPasswordError
                    ? "border-red-500"
                    : isConfirmPasswordValid
                    ? "border-gray-300"
                    : "border-gray-300"
                }`}
                type={showPassword2 ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <button
                type="button"
                className="absolute right-3 top-4 text-xl"
                onClick={() => setShowPassword2(!showPassword2)}
              >
                {showPassword2 ? <BiShowAlt /> : <BiHide />}
              </button>
            </div>
            {confirmPasswordError && (
              <p className="text-red-500 text-xs">{confirmPasswordError}</p>
            )}
          </div>
          <div>
            <h2 className="mt-4 select-none">Referral Code (optional)</h2>
            <input
              className="mt-2 p-2 w-full border select-none rounded focus:border-black focus:outline-none focus:shadow-xl focus:ring-gray-600 transition-transform transform focus:scale-105"
              type="text"
              placeholder="Enter Referral Code"
            />
          </div>
          <div className="mt-4 select-none">
            <input
              className="mr-2"
              type="checkbox"
              id="ageCertification"
              checked={is18}
              onChange={(e) => {
                setIs18(e.target.checked);
                setAgeCertificationError("");
              }}
            />
            <label htmlFor="ageCertification">
              I certify that I'm at least 18 years old{" "}
              <span className="text-red-500">*</span>
            </label>
            {ageCertificationError && (
              <p className="text-red-500 text-xs">{ageCertificationError}</p>
            )}
          </div>
          {otpSent && (
            <div className="mt-4 relative bg-white p-6 max-w-md rounded-xl flex flex-col items-center">
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
                <a
                  href="#"
                  className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                    isDisabled
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-green-500 text-white hover:bg-green-700"
                  }`}
                  onClick={() => {
                    if (!isDisabled) {
                      console.log("Resend button clicked");
                    }
                  }}
                  style={{ pointerEvents: isDisabled ? "none" : "auto" }}
                >
                  {isDisabled ? `Resend : 00:00:${otpTimer}` : "Resend"}
                </a>
              </div>
            </div>
          )}
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className={`bg-black mt-6 w-1/2 p-3 select-none rounded text-white hover:bg-gray-600 ${
                (!mobileNumber ||
                  !email ||
                  !password ||
                  !confirmPassword ||
                  !is18 ||
                  mobileError ||
                  emailError ||
                  passwordError ||
                  confirmPasswordError ||
                  (otpSent && !isOtpComplete)) &&
                "opacity-50 cursor-not-allowed"
              }`}
              disabled={
                !isMobileValid ||
                !isPasswordValid ||
                !isConfirmPasswordValid ||
                !is18 ||
                (otpSent && !isOtpComplete)
              }
            >
              {otpSent ? "VERIFY OTP" : "GET OTP"}
            </button>
          </div>
          {!otpSent && (
            <div className="mt-4 flex justify-center items-center text-gray-700 select-none">
              By registering you agree with Dosso21{" "}
              <Link href="https://dosso21.com/terms-conditions/index.html">
                <span className="ml-1 underline">Terms of usage</span>
              </Link>
            </div>
          )}
        </div>
        <div className="grid justify-center text-center gap-4 mt-6 text-xs">
          <p className="select-none">
            Already have an account?
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
