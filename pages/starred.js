import Sidebar from "../components/Sidebar";
import CheckBox from "@material-ui/core/Checkbox";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import { outbox, inbox } from "../data/EmailData";
import OutboxItem from "../components/OutboxItem";
import StarredItem from "../components/StarredItem";

const Drafts = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="w-[100%] m-2 rounded-md h-[70%] border-gray-300 border-2">
        <div className=" flex border-b border-gray-500 ">
          <CheckBox />
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="items-center overflow-y-auto h-[32rem]">
          {inbox.map(
            ({ starred, from, subject, message, recieved, read, id }) => (
              <StarredItem
                starred={starred}
                from={from}
                subject={subject}
                message={message}
                recieved={recieved}
                read={read}
                key={id}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Drafts;
