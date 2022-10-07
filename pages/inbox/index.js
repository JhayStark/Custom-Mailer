import Sidebar from "../../components/Sidebar";
import CheckBox from "@material-ui/core/Checkbox";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import { inbox } from "../../data/EmailData";
import InboxItem from "../../components/InboxItem";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Inbox = () => {
  const { status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/auth/login");
    }
  }, [status]);
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[100%] m-2 rounded-md h-[100vh-15vh] border-gray-300 overflow-x-auto  border-2">
        <div className=" flex border-b border-gray-500 ">
          <CheckBox />
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="items-center overflow-y-auto h-[32rem] divide-y-2 divide-gray-300">
          {inbox.map(
            ({ starred, from, subject, message, recieved, read, id }) => (
              <InboxItem
                starred={starred}
                from={from}
                subject={subject}
                message={message}
                recieved={recieved}
                read={read}
                key={id}
                id={id}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
