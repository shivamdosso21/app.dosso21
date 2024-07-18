import React from "react";

const Page: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center bg-white">
    
      <div className="w-1/4 p-10 rounded shadow-xl">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl">Welcome!🙏</h1>
            <p className="text-xs">Continue with Dosso21</p>
          </div>
          <div className="flex justify-end w-1/4">
            <img src="/logo.jpg" alt="" />
          </div>
        </div>
        <div className="mt-10 gap-4 text-xs">
          <div>
            <h2>Enter Mobile Number</h2>
            <input
              className="mt-4 focus:border-transparent focus:outline-none mt-1 p-2 w-full"
              type="string"
              placeholder="Enter your Number"
            />
          </div>
          <h2 className="mt-2">Password</h2>
          <input
            className="mt-4 focus:border-transparent focus:outline-none mt-1 
            p-2 w-full"
            type="password"
            placeholder="Enter your password"
          />
          <button className="bg-gray-800 mt-4 w-full p-3 rounded text-white hover:bg-gray-600">
            LOG IN NOW
          </button>

          <div className="flex justify-center">
            <button className="mt-6">🔒<span className="underline">Forget your password</span></button>
          </div>
        </div>
      </div>
      <div className="grid justify-center text-center gap-4 mt-6 text-xs">
        <p>
          Don't have an account ?
          <span className="ml-1 underline text-xs" style={{ color: '#50A5F1' }}>SIGNUP NOW</span>
        </p>
        <p className="mt-2">
          &copy; {currentYear} Dosso21, Developed by
          <span className="text-xs" style={{ color: '#0DC3C7' }}> THEBRANDZMEDIA</span>
        </p>
        <p className="mt-2 text-xs">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Page;