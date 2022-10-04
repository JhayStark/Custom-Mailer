import React from "react";
import Image from "next/image";
import mail1 from "./assests/mail1.jpg";

const signup = () => {
  return (
    <div>
      <div className=" w-[60%] flex m-auto items-center justify-center mt-[10%] border-2 border-gray-500 rounded-xl p-4 ">
        <form>
          <div className="flex flex-row gap-6 ">
            <div className="flex flex-col gap-4 justify-start items-start">
              <h2 className="font-bold text-xl text-blue-300">RAVEN</h2>
              <h3 className="font-semibold text-2xl text-gray-700">
                Create your Raven Account
              </h3>
              <h3 className=" font-medium text-gray-700">
                to continue to your Mail
              </h3>
              <div className="flex sm:flex-col md:flex-row lg:flex-row gap-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="outline-none border-2 border-gray-400 rounded-lg p-1"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="outline-none border-2 border-gray-400 rounded-lg p-1"
                />
              </div>
              <input
                type="date"
                className="outline-none border-2 border-gray-400 rounded-lg p-1"
              />
              <input
                type="text"
                placeholder="username"
                className="outline-none border-2 border-gray-400 rounded-lg p-1"
              />
              <input
                type="telephone"
                placeholder="telephone"
                className="outline-none border-2 border-gray-400 rounded-lg p-1"
              />
              <div className="flex  sm:flex-col md:flex-row lg:flex-row gap-2">
                <input
                  type="text"
                  placeholder="password"
                  className="outline-none border-2 border-gray-400 rounded-lg p-1"
                />
                <input
                  type="text"
                  placeholder="confirm password"
                  className="outline-none border-2 border-gray-400 rounded-lg p-1"
                />
              </div>
              <button className="border-2 rounded-lg p-2 bg-blue-300 hover:bg-blue-500 outline-none justify-center m-auto">
                Sign Up
              </button>
            </div>
            <div className="m-auto justify-center">
              <Image src={mail1} width={600} height={600} alt="mail icon" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signup;
