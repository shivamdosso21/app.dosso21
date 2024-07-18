import React from "react";

const Page: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      <div className="w-auto p-10">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="font-bold text-xl">Free Registration</h1>
            <p>Get your free Dosso21 account now</p>
          </div>
          <div className="flex justify-end w-1/2">
            <img src="/logo.jpg" alt="Logo" />
          </div>
        </div>
        <div className="mt-10">
          <h2>Mobile Number</h2>
          <input
            className="focus:border-transparent border-b-2 border-black focus:border-black focus:outline-none mt-1 p-2 w-full"
            type="string"
            placeholder="Enter your Number"
          />
          <h2>E-mail</h2>
          <input
            className="focus:border-transparent border-b-2 border-black focus:border-black focus:outline-none mt-1 p-2 w-full"
            type="email"
            placeholder="Enter your Email"
          />
          <h2>Password</h2>
          <input
            className="focus:border-transparent border-b-2 border-black focus:border-black focus:outline-none mt-1 p-2 w-full"
            type="password"
            placeholder="Enter your Password"
          />
          <h2>Confirm Password</h2>
          <input
            className="focus:border-transparent border-b-2 border-black focus:border-black focus:outline-none mt-1 p-2 w-full"
            type="password"
            placeholder="Confirm your Password"
          />
          <h2 className="mt-2">Referral Code (optional)</h2>
          <input
            className="focus:border-transparent border-b-2 border-black focus:border-black focus:outline-none mt-1 p-2 w-full"
            type="text"
            placeholder="Enter your Referral Code"
          />
          <div className="flex items-center mt-4">
            <input id="example-checkbox" type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <label htmlFor="example-checkbox" className="ml-2 text-gray-700">I certify that I m above 18 years</label>
          </div>
          <button className="bg-black mt-4 w-1/4 p-1 text-white hover:bg-gray-800">
            Get OTP
          </button>
          <div className="flex justify-center">
            <button className="mt-8">By registering, you agree to the Dosso21 Terms of Use</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center text-center mt-6">
        <p>
          Already have an account?
          <span className="text-blue-500">Login</span>
        </p>
        <p className="mt-2">
          ©2024 Dosso21, Developed by
          <span className="text-customCyan text-xs">THEBRANDZMEDIA</span>
        </p>
      </div>
    </div>
  );
};

export default Page;
