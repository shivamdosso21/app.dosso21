"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { IoHomeOutline, IoWalletOutline } from "react-icons/io5";
import { FaRegPlayCircle, FaRegUser } from "react-icons/fa";
import { ImSwitch } from "react-icons/im";
import { HiOutlineUsers } from "react-icons/hi2";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

import ProgressBar from "../progressbar/ProgressBar";
import handleLogoutClick from "../logout/page";
import { IoMdClose, IoMdNotificationsOutline } from "react-icons/io";

const progress = 50;

const Page: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex h-screen w-screen bg-gray-300">
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 flex flex-col`}
      >
        <div className="flex justify-between p-4 md:hidden">
          <span className="text-xl font-bold">Menu</span>
          <button
            aria-label="Close menu"
            onClick={toggleSidebar}
            className="text-xl"
          >
            <IoMdClose />
          </button>
        </div>
        <ul className="ml-8 flex flex-col gap-4 p-4 flex-grow">
          <div className="mt-12 mb-4 flex justify-center">
            <img src="logo.jpg" alt="Logo" width="90" />
          </div>
          <Link href="/dashboard">
            <button
              className={`flex items-center gap-2 text-black p-2 rounded-xl hover:bg-black hover:w-full hover:text-white transition-transform transform hover:scale-105 duration-300 ease-in focus:outline-none ${
                pathname === "/dashboard"
                  ? "bg-gray-800 w-full text-yellow-400"
                  : ""
              }`}
            >
              <span className="ml-2">
                <IoHomeOutline />
              </span>
              Home
            </button>
          </Link>
          <Link href="/wallet">
            <button
              className={`flex items-center gap-2 text-gray-700 p-2 rounded-xl hover:bg-black hover:w-full hover:text-white transition-transform transform hover:scale-105 duration-300 ease-in focus:outline-none ${
                pathname === "/wallet"
                  ? "bg-gray-800 w-full text-yellow-400"
                  : ""
              }`}
            >
              <span className="ml-2">
                <IoWalletOutline />
              </span>
              Wallet
            </button>
          </Link>
          <Link href="/my_profile">
            <button
              className={`flex items-center gap-2 text-gray-700 p-2 rounded-xl hover:bg-black hover:w-full hover:text-white transition-transform transform hover:scale-105 duration-300 ease-in focus:outline-none ${
                pathname === "/my_profile"
                  ? "bg-gray-800 w-full text-yellow-400"
                  : ""
              }`}
            >
              <span className="ml-2">
                <FaRegUser />
              </span>
              My Profile
            </button>
          </Link>
          <Link href="/notifications">
            <button
              className={`flex items-center gap-2 text-gray-700 p-2 rounded-xl hover:bg-black hover:w-full hover:text-white transition-transform transform hover:scale-105 duration-300 ease-in focus:outline-none ${
                pathname === "/notifications"
                  ? "bg-gray-800 w-full text-yellow-400"
                  : ""
              }`}
            >
              <span className="ml-2">
                <IoMdNotificationsOutline />
              </span>
              Notifications
            </button>
          </Link>
          <button
            aria-label="Log Out"
            className="flex items-center gap-2 text-gray-700 p-2 rounded-xl hover:bg-black hover:w-full hover:text-yellow-400 transition-transform transform hover:scale-105 duration-300 ease-in focus:outline-none"
            onClick={handleLogoutClick}
          >
            <span className="ml-2">
              <ImSwitch />
            </span>
            Log Out
          </button>
        </ul>

        <div className="flex flex-col justify-start gap-2 p-4 mt-auto">
          <button className="w-full text-left text-gray-700 hover:text-black select-none">
            Our Mission
          </button>
          <button className="w-full text-left text-gray-700 hover:text-black select-none">
            Privacy Policy
          </button>
          <button className="w-full text-left text-gray-700 hover:text-black select-none">
            Terms and Conditions
          </button>
        </div>
      </div>
      <div className="flex flex-grow flex-col">
        <header className="relative flex h-20 items-center justify-between bg-black text-xl text-white px-4 md:px-8">
          <button
            aria-label="Toggle menu"
            className="md:hidden text-2xl"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <IoMdClose /> : <AiOutlineMenu />}
          </button>
          <p className="absolute left-1/2 transform -translate-x-1/2 select-none">
            Dosso21
          </p>
        </header>
        <div className="flex flex-col items-center gap-4 p-4">
          <div className="h-40 w-full max-w-md rounded-md border border-black bg-white shadow-xl md:w-1/4"></div>
          <div className="w-full flex flex-col items-center  gap-4 md:flex-col md:gap-4">
            <div className="flex  w-full max-w-md flex-col md:w-1/4">
              <div className="flex justify-between mb-4">
                <h1 className="text-xl font-bold select-none">ALL CONTESTS</h1>
                <button className="bg-white text-black rounded-lg p-2 select-none">
                  My Contest
                </button>
              </div>
              <div className="grid w-full gap-2 border border-black rounded-xl bg-white p-4 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="font-bold select-none">
                    SHAGUN51 (24-25-001)
                  </h1>
                  <button className="ml-4 flex flex-col items-center">
                    <p className="text-sm select-none">Entry Fees</p>
                    <div className="flex h-8 w-16 items-center justify-center rounded bg-blue-500 text-white select-none">
                      ₹ 51
                    </div>
                  </button>
                </div>
                <div className="w-full mt-4">
                  <ProgressBar
                    value={progress}
                    max={100}
                    color="bg-green-500"
                    height="h-1"
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <button
                    className={`w-full rounded-2xl bg-black p-2 select-none text-white hover:bg-black hover:rounded-lg hover:w-full hover:text-yellow-400 transition-transform transform hover:scale-105 duration-300 ease-in focus:outline-none ${
                      isSidebarOpen ? "hidden select-none md:block" : ""
                    }`}
                  >
                    PARTICIPATE
                  </button>
                </div>
                <div className="mt-4 flex justify-center">
                  <h2 className="text-sm text-gray-700 select-none">
                    <span className="font-bold select-none">72</span>{" "}
                    Participants
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex w-full  max-w-md flex-col md:w-1/4">
              <div className="grid w-full border border-black gap-2 rounded-xl bg-white p-4 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="font-bold select-none">UPCOMING</h1>
                  <button className="ml-4 flex flex-col items-center">
                    <p className="text-sm select-none">Entry Fees</p>
                    <div className="flex h-8 w-16 items-center justify-center rounded bg-blue-500 text-white">
                      ₹
                    </div>
                  </button>
                </div>
                <div className="w-full mt-4">
                  {/* <ProgressBar
                    value={progress}
                    max={100}
                    color="bg-green-500"
                    height="h-1"
                  /> */}
                </div>
                <div className="mt-4 flex justify-center">
                  <button
                    className={`w-full rounded-2xl bg-black p-2 select-none text-white hover:bg-gray-500 focus:ring-gray-600 transition-transform transform focus:scale-105 ${
                      isSidebarOpen ? "hidden select-none md:block" : ""
                    }`}
                  >
                    PARTICIPATE
                  </button>
                </div>
                <div className="mt-4 flex justify-center">
                  <h2 className="text-sm text-gray-700 select-none">
                    <span className="font-bold select-none">0</span>{" "}
                    Participants
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="mt-auto flex h-20 items-center justify-evenly bg-black text-white">
          <button
            className={`flex flex-col items-center ${
              pathname === "/" ? "border-b-2 border-yellow-400" : ""
            }`}
          >
            <h2 className="text-2xl text-yellow-400">
              <IoHomeOutline />
            </h2>
            <span className="text-yellow-400 select-none">Home</span>
          </button>
          <button
            className={`flex flex-col items-center ${
              pathname === "/my_contests" ? "border-b-2 border-yellow-400" : ""
            }`}
          >
            <h2 className="text-2xl text-yellow-400 select-none">
              <FaRegPlayCircle />
            </h2>
            <span className="text-yellow-400 select-none">My Contests</span>
          </button>
          <button
            className={`flex flex-col items-center ${
              pathname === "/refer_earn" ? "border-b-2 border-yellow-400" : ""
            }`}
          >
            <h2 className="text-2xl text-yellow-400">
              <HiOutlineUsers />
            </h2>
            <span className="text-yellow-400 select-none">Refer and Earn</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Page;
