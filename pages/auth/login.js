import React from "react";

const login = () => {
  return (
    <div className=" w-[30%] flex m-auto items-center justify-center mt-[10%]">
      <div className="flex flex-col min-w-fit w-full 00 gap-9 border-2 border-gray-500 rounded-xl ">
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-2xl font-bold font-serif text-blue-300 mt-2">
            RAVEN
          </h2>
          <h4 className="font-medium">Sign In</h4>
          <p className="text-gray-700">to continue to your Mail</p>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="email"
            className="border-2 border-blue-300 m-4 h-12 mb-0 rounded-md"
          />
          <p className="mt-0 ml-4 text-sm">Forgot password?</p>
        </div>
        <div className="flex justify-between">
          <button className="ml-4 font-medium text-sm text-blue-500 rounded-xl hover:bg-blue-100 h-8 cursor-pointer p-2">
            Create Account
          </button>
          <button className="bg-blue-400 text-white rounded-lg p-2 flex items-center justify-center m-4 w-[20%] hover:bg-blue-600">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default login;
