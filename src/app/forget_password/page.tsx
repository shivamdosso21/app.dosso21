import React from "react";

const Page: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      <div className="w-auto  p-10">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="font-bold text-xl">Forget password?</h1>
            <p>Enter phone number to recover</p>
          </div>
          <div className="flex justify-end w-1/4">
            <img src="/logo.jpg" alt="" />
          </div>
        </div>
        <div className="mt-10">
          <h2>Mobile Number</h2>
          <input
            className="focus:border-transparent border-b-2 border-black focus:border-black focus:outline-none mt-1 p-2 w-full"
            type="string"
            placeholder="Enter your Mobile Number"
          />
          
          <button className="mt-4 w-1/4 p-1 text-black hover:bg-gray-400">
            Proceed
          </button>

         
        </div>
      </div>
      <div className="flex flex-col justify-center text-center mt-6">
        <p>
        Go back to{" "}
          <span className="text-black">Login</span>
        </p>
        <p className="mt-2">
          @2024 Dosso21, Developed by{" "}
          <span>THEBRANDZMEDIA</span>
        </p>
      
      </div>
    </div>
  );
};

export default Page;
