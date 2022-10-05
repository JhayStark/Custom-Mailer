import Sidebar from "../components/Sidebar";
import CheckBox from "@material-ui/core/Checkbox";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import { outbox } from "../data/EmailData";
import OutboxItem from "../components/OutboxItem";

const Outbox = () => {
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
          {outbox.map(({ starred, to, subject, message, sent, read, id }) => (
            <OutboxItem
              starred={starred}
              to={to}
              subject={subject}
              message={message}
              sent={sent}
              read={read}
              key={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Outbox;
