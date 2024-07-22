"use client";
import React, { useState } from "react";
import { IoHomeOutline, IoWalletOutline } from "react-icons/io5";
import { FaRegUser, FaRegPlayCircle } from "react-icons/fa";
import { ImSwitch } from "react-icons/im";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import handleLogoutClick from "../logout/page";

const Page: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname(); 
  return (
    <div className="flex h-screen w-screen bg-gray-200">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 flex flex-col`}
      >
        <div className="flex justify-between p-4 md:hidden">
          <span className="text-xl font-bold">Menu</span>
          <button
            aria-label="Close menu"
            onClick={() => setSidebarOpen(false)}
            className="text-xl"
          >
            &times;
          </button>
        </div>
        <ul className="ml-8 flex flex-col gap-4 p-4 flex-grow">
          <div className="mt-12 mb-4 flex justify-center">
            <img src="logo.jpg" alt="Logo" width="90" />
          </div>
          <Link href="/dashboard">
            <button className={`flex items-center gap-2 text-gray-700 p-2 rounded-xl hover:bg-black hover:w-full hover:text-white transition-transform transform hover:scale-105 duration-300 ease-in focus:outline-none ${pathname === "/dashboard" ? "bg-black w-full text-yellow-400" : ""}`}>
              <span className="ml-2"><IoHomeOutline /></span>
              Home
            </button>
          </Link>
          <Link href="/wallet">
            <button className={`flex items-center gap-2 text-gray-700 p-2 rounded-xl hover:bg-black hover:w-full hover:text-white transition-transform transform hover:scale-105 duration-300 ease-in focus:outline-none ${pathname === "/wallet" ? "bg-black w-full text-yellow-400" : ""}`}>
             <span className="ml-2"> <IoWalletOutline /></span>
              Wallet
            </button>
          </Link>
          <Link href="/my_profile">
            <button className={`flex items-center gap-2 text-gray-700 p-2 rounded-xl hover:bg-black hover:w-full hover:text-white transition-transform transform hover:scale-105 duration-300 ease-in focus:outline-none ${pathname === "/my_profile" ? "bg-black w-full text-yellow-400" : ""}`}>
              <span className="ml-2"><FaRegUser /></span>
              My Profile
            </button>
          </Link>
          <Link href="/notifications">
            <button className={`flex items-center gap-2 text-gray-700 p-2 rounded-xl hover:bg-black hover:w-full hover:text-white transition-transform transform hover:scale-105 duration-300 ease-in focus:outline-none ${pathname === "/notifications" ? "bg-black w-full text-yellow-400" : ""}`}>
             <span className="ml-2"> <IoMdNotificationsOutline /></span>
              Notifications
            </button>
          </Link>
          <button
            aria-label="Log Out"
            className="flex items-center gap-2 text-gray-700 p-2 rounded-xl hover:bg-black hover:w-full hover:text-yellow-400 transition-transform transform hover:scale-105 duration-300 ease-in focus:outline-none"
            onClick={handleLogoutClick}
          >
            <span className="ml-2"><ImSwitch /></span>
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
        {/* Header */}
        <div className="flex h-20 items-center justify-center bg-black text-xl text-white">
          My Profile
        </div>
        {/* Main Content */}
        <div className="flex flex-col items-center gap-4 p-4">
          <div className="h-28 w-full md:w-1/2 rounded-md bg-white shadow-xl flex items-center">
            <div className="ml-2">
              <img src="logo.jpg" alt="Logo" width="80px" />
            </div>
            <div className="ml-8 flex flex-col">
              <h1>Imvpankaj</h1>
              <p>
                User Id: <span>9911064724</span>
              </p>
              <p>imvpankaj@gmail.com</p>
              <p>
                Refer Id: <span>#imvp31994</span>
              </p>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="mt-auto flex h-20 items-center justify-evenly bg-black text-white">
          <Link href="/dashboard">
            <button className="flex flex-col items-center">
              <h2 className="text-2xl text-yellow-400">
                <IoHomeOutline />
              </h2>
              <span className="text-yellow-400">Home</span>
            </button>
          </Link>
          <button className="flex flex-col items-center">
            <h2 className="text-2xl text-yellow-400">
              <FaRegPlayCircle />
            </h2>
            <span className="text-yellow-400">My Contests</span>
          </button>
          <button className="flex flex-col items-center">
            <h2 className="text-2xl text-yellow-400">
              <HiOutlineUsers />
            </h2>
            <span className="text-yellow-400">Refer and Earn</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;