import Sidebar from "../../components/Sidebar";
import CheckBox from "@material-ui/core/Checkbox";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import InboxItem from "../../components/InboxItem";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { getEmails, getInbox } from "../../utils/getEmails";
import axios from "axios";
import { handleStar, handleDelete } from "../../utils/mailAttributes";

export async function getStaticProps() {
  const emails = await getInbox();

  return {
    props: {
      emails,
    },
  };
}

const Inbox = ({ emails }) => {
  const { data, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/auth/login");
    }
  }, [status]);

  // console.log(data);
  // const handleStar = async (id, starred) => {
  //   let value;
  //   starred ? (value = "true") : (value = "false");
  //   const res = await axios.post(
  //     `${process.env.NEXT_PUBLIC_BASE_URL}/api/mails/mailAttributes`,
  //     { starred: value, id: id }
  //   );
  // };

  // const handleDelete = async (id, deleted) => {
  //   const res = await axios.post(
  //     `${process.env.NEXT_PUBLIC_BASE_URL}/api/mails/mailAttributes`,
  //     { deleted: deleted, id: id }
  //   );
  // };

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
          {emails.map((email) => (
            <InboxItem
              starred={email.starred}
              from={email.from}
              subject={email.subject}
              message={email.message}
              time={email.time}
              key={email._id}
              id={email._id}
              deleted={email.deleted}
              handleStar={handleStar}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
