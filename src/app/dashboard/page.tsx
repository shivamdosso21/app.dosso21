import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { ImSwitch } from "react-icons/im";
import { FaRegPlayCircle } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";

const Page: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-gray-200 flex">
      <div className="flex flex-col w-1/6 bg-white">
        <div className="select-none">
          <img src="logo.jpg" alt="" width="90px" />
        </div>
        <ul className="grid gap-4">
          <button type="submit" className="flex justify-center items-center">
            <IoHomeOutline />
            Home
          </button>
          <button type="submit" className="flex justify-center items-center">
            <IoWalletOutline /> Wallet
          </button>
          <button type="submit" className="flex justify-center items-center">
            <FaRegUser /> My Profile
          </button>
          <button type="submit" className="flex justify-center items-center">
            <IoMdNotificationsOutline /> Notifications
          </button>
          <button type="submit" className="flex justify-center items-center">
            <ImSwitch /> Log Out
          </button>
        </ul>
        <div className="flex-grow"></div>
        <div className="grid gap-2">
          <button>Our Mission</button>
          <button>Privacy Policy</button>
          <button>Terms and Conditions</button>
        </div>
      </div>
      <div className="relative h-full w-full flex flex-col">
        <div className="bg-black h-20 flex justify-center items-center text-white">
          Dosso21
        </div>
        <div className="bg-transparent flex flex-col gap-4 justify-center items-center flex-grow">
          <div className="h-40 w-1/4 bg-white border rounded-md border-black"></div>
          <div className="h-10 w-1/4 flex">
            <h1 className="font-bold text-xl"> ALL CONTESTS</h1>
            {/* <button className="bg-gray-300 p-2">My Contest</button> */}
          </div>
          <div className="h-40 p-2 w-1/4 bg-white border rounded-xl border-black grid">
            <div>
              <h1 className="font-bold">SHAGUN51 (24-25-001)</h1>
            </div>
            <div>
                
            </div>
            <div className="flex justify-center">
              <button className="bg-black text-white w-full rounded-2xl p-1">PARTICIPATE</button>
            </div>
            <div className="flex justify-center">
                <h2>72 Participants</h2>
            </div>
          </div>
          <div className="h-40 p-2 w-1/4 bg-white border rounded-xl border-black grid">
          <div>
              <h1 className="font-bold">UPCOMINGS</h1>
            </div>
            <div></div>
            <div className="flex justify-center">
              <button className="bg-black text-white w-full rounded-2xl p-1">COMING SOON</button>
            </div>
            <div className="flex justify-center">
                <h2>72 Participants</h2>
            </div></div>
        </div>
        <div className="bg-black h-20 mt-auto text-white flex justify-evenly">
          <button>
            <IoHomeOutline />
            Home
          </button>
          <button>
            <FaRegPlayCircle />
            My Contest
          </button>
          <button>
            <HiOutlineUsers />
            Refer and Earn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
