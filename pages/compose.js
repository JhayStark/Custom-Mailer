import React from "react";
import Sidebar from "../components/Sidebar";
import DeleteIcon from "@mui/icons-material/Delete";

const Compose = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="m-2 w-full rounded-xl border-2">
        <div className=" items-center font-medium bg-slate-100 rounded-t-xl px-2">
          New Message
        </div>
        <input
          type="text"
          placeholder="To"
          className="border-b border-gray-300 w-full outline-none"
        />
        <input
          type="text"
          placeholder="Subject"
          className="border-b border-gray-300 w-full outline-none"
        />
        <textarea className="w-full h-[27rem] outline-none"></textarea>
        <div className="flex justify-between">
          <div className="bg-blue-200 w-16 ml-2 rounded-lg justify-center px-4 py-2 font-semibold cursor-pointer  hover:bg-blue-400 flex">
            Send
          </div>
          <DeleteIcon className="text-gray-700 m-2 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Compose;
