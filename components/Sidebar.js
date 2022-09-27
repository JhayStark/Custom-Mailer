import React from "react";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import InboxIcon from "@mui/icons-material/Inbox";
import OutboxIcon from "@mui/icons-material/Outbox";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="border-r-2 border-slate-300 w-40 static h-[36rem] ">
      <div className="py-2">
        <div className="items-center bg-teal-200 rounded-lg m-3 p-4 shadow-lg font-semibold text-gray-500 hover:bg-teal-400 flex">
          <HistoryEduIcon className="text-cyan-700 " />
          <Link href="/compose">Compose</Link>
        </div>
        <div className="flex flex-col gap-5 text-gray-600 font-medium ">
          <div className="items-center  rounded-md  p-2 shadow-sm hover:bg-slate-200 cursor-pointer">
            <InboxIcon className="text-violet-500" />
            <Link href="/inbox">Inbox</Link>
          </div>
          <div className="items-center  rounded-md  p-2 shadow-sm hover:bg-slate-200 cursor-pointer  ">
            <OutboxIcon className="text-violet-500" />
            <Link href="/outbox">Outbox</Link>
          </div>
          <div className="items-center  rounded-md  p-2 shadow-sm hover:bg-slate-200 cursor-pointer ">
            <StarIcon className="text-violet-500" />
            <Link href="/drafts">Starred</Link>
          </div>
          <div className="items-center  rounded-md  p-2 shadow-sm hover:bg-slate-200 cursor-pointer ">
            <AutoDeleteIcon className="text-violet-500" />
            <Link href="/deleted">Deleted</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
