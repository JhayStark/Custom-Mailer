import React from "react";
import Sidebar from "../components/Sidebar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ReplyIcon from "@mui/icons-material/Reply";
import PrintIcon from "@mui/icons-material/Print";
import IconButton from "@material-ui/core/IconButton";

const message = {
  id: 1,
  starred: true,
  from: "Joel",
  subject:
    "Your MongoDB Atlas M0 cluster will be automatically paused in 7 days",
  message: "I would like to get more info",
  recieved: "07:20",
  read: true,
};

const detailed = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="w-[100%] m-2 rounded-md h-[70%] border-gray-300 border-2">
        <div className=" flex border-b border-gray-500 justify-between ">
          <div>
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
            <IconButton>
              <MarkAsUnreadIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
          <div className="flex">
            <IconButton>
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton>
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        </div>
        <div className="items-center overflow-y-auto h-[32rem] ">
          <div className="flex justify-between">
            <div className="p-3">{message.subject}</div>

            <IconButton>
              <PrintIcon />
            </IconButton>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <AccountBoxIcon className="text-5xl text-blue-500" />
              <div className="flex flex-col">
                <p className="font-semibold">{message.from}</p>
                <p className="text-xs">to me</p>
              </div>
            </div>
            <div className="flex flex-row">
              <p className="p-3">{message.recieved}</p>
              <IconButton>
                <StarOutlineIcon />
              </IconButton>
              <IconButton>
                <ReplyIcon />
              </IconButton>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          </div>
          <div className="bg-slate-100 m-3 h-[80%] rounded-xl ">
            <p className="m-3">{message.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default detailed;
