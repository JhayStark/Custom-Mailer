import CheckBox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";

const OutboxItem = ({ starred, to, subject, message, sent }) => {
  return (
    <div className="flex items-center ml-1 mr-1 border-b border-gray-400">
      <CheckBox />
      <IconButton>{starred ? <StarIcon /> : <StarOutlineIcon />}</IconButton>
      <div className="grid grid-cols-4 w-full justify-between ">
        <p>{to}</p>
        <p>{subject}</p>
        <span>{message}</span>
        <p>{sent}</p>
      </div>
    </div>
  );
};

export default OutboxItem;
