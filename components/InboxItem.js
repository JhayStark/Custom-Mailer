import CheckBox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";

const InboxItem = ({ starred, from, subject, message, recieved }) => {
  return (
    <div className="flex items-center mr-1 border-b border-gray-400">
      <CheckBox />
      <IconButton>{starred ? <StarIcon /> : <StarOutlineIcon />}</IconButton>
      <div className="w-full flex justify-between ">
        <p className="font-medium">{from}</p>
        <p className="font-medium">{subject}</p>-<span>{message}</span>
        <p className="font-medium">{recieved}</p>
      </div>
    </div>
  );
};

export default InboxItem;
