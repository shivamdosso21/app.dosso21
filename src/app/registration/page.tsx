"use client";
import Link from "next/link";
import React, { useState } from "react";

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
    // Basic email validation regex
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
      mobileError ||
      emailError ||
      passwordError ||
      confirmPasswordError
    ) {
      alert("Please fill in all fields correctly.");
      return;
    }

    console.log("Submitting form...");
   
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
              className={`mt-2 p-2 w-full border select-none rounded focus:border-black focus:outline-none ${
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
              className={`mt-2 p-2 w-full border select-none rounded focus:border-black focus:outline-none ${
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
            <input
              className={`mt-2 p-2 w-full border select-none rounded focus:border-black focus:outline-none ${
                passwordError
                  ? "border-red-500"
                  : isPasswordValid
                  ? "border-green-500"
                  : "border-gray-300"
              }`}
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && (
              <p className="text-red-500 text-xs">{passwordError}</p>
            )}
          </div>
          <div>
            <h2 className="mt-4 select-none">
              Confirm Password <span className="text-red-500">*</span>
            </h2>
            <input
              className={`mt-2 p-2 w-full border select-none rounded focus:border-black focus:outline-none ${
                confirmPasswordError
                  ? "border-red-500"
                  : isConfirmPasswordValid
                  ? "border-gray-300"
                  : "border-gray-300"
              }`}
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {confirmPasswordError && (
              <p className="text-red-500 text-xs">{confirmPasswordError}</p>
            )}
          </div>
          <div>
            <h2 className="mt-4 select-none">Referal Code <span className="top-0">(optional)</span></h2>
            <input
              className="mt-2 p-2 w-full border select-none rounded focus:border-black focus:outline-none "
              type="text"
              placeholder="Enter Referal Code"
            />
          </div>
          <div className="mt-4 select-none">
            <input className="mr-2" type="checkbox" id="ageCertification" />
            <label htmlFor="ageCertification">
              I certified that I'm above 18 years old <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className={`bg-black mt-6 w-1/2 p-3 select-none rounded text-white hover:bg-gray-600 ${
                (!mobileNumber ||
                  !email ||
                  !password ||
                  !confirmPassword ||
                  mobileError ||
                  emailError ||
                  passwordError ||
                  confirmPasswordError) &&
                "opacity-50 cursor-not-allowed"
              }`}
              disabled={
                !isMobileValid || !isPasswordValid || !isConfirmPasswordValid
              }
            >
              GET OTP
            </button>
          </div>
          <div className="mt-4 flex justify-center items-center text-gray-700 select-none">
            By registering you agree with Dosso21 <Link href="https://dosso21.com/terms-conditions/index.html"><span className="ml-1 underline">Term of usage</span></Link>
          </div>
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
            <span className="ml-2 text-xs select-none" style={{ color: "#0DC3C7" }}>
              THEBRANDZMEDIA
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Page;
