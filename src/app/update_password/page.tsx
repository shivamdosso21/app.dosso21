"use client";
import Link from "next/link";
import React, { useState } from "react";
import Swal from "sweetalert2";

import { BiShowAlt, BiHide } from "react-icons/bi";

const Page: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showPassword2, setShowPassword2] = useState(false);
 

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

  const showAlert = () => {
    Swal.fire({
      title: "Success!",
      text: "Your password has been successfully changed.",
      icon: "success",
      confirmButtonText: "Now Login",
      customClass: {
        confirmButton: "custom-confirm-button",
      },
    
      preConfirm: () => {
        window.location.href = '/login'; 
      }
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!password || passwordError || confirmPasswordError) {
      alert("Please fill in all fields correctly.");
      return;
    }

    showAlert();
  };

  const validatePassword = (password: string) => {
    return (
      password.length >= 6 &&
      /[a-zA-Z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(password)
    );
  };

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
            <h1 className="text-xl select-none">Update Password</h1>
            <p className="text-xs select-none">Update your password</p>
          </div>
          <div className="flex justify-end w-1/4 select-none">
            <img src="/logo.jpg" alt="Logo" />
          </div>
        </div>
        <div className="mt-10 gap-4 text-xs">
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
              <p className="text-red-500 text-xs" aria-live="polite">
                {passwordError}
              </p>
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
              <p className="text-red-500 text-xs" aria-live="polite">
                {confirmPasswordError}
              </p>
            )}
          </div>
          <button
            type="submit"
            className={`bg-gray-800 mt-6 w-full p-3 select-none rounded text-white hover:bg-gray-600 ${
              !isPasswordValid || !isConfirmPasswordValid
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={!isPasswordValid || !isConfirmPasswordValid}
          >
            UPDATE PASSWORD
          </button>

          <div className="flex justify-center"></div>
        </div>
        <div className="grid justify-center text-center gap-4 mt-6 text-xs">
          <p className="select-none">
            Go Back To
            <Link href="/login">
              <span
                className="ml-1 underline text-xs select-none"
                style={{ color: "#50A5F1" }}
              >
                LOGIN
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
