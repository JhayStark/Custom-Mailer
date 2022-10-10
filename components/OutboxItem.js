import CheckBox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";

const OutboxItem = ({ starred, to, subject, message, time, id }) => {
  return (
    <div className="flex items-center mr-1 border-b border-gray-400 cursor-pointer">
      <CheckBox />
      <IconButton>{starred ? <StarIcon /> : <StarOutlineIcon />}</IconButton>
      <IconButton>
        <DeleteForeverIcon />
      </IconButton>
      <div className="w-full flex justify-between ">
        <p className="font-medium">{to}</p>
        <Link href={`/outbox/${id}`}>
          <p className="font-medium">
            {subject}-<span className="font-normal">{message}</span>
          </p>
        </Link>
        <p className="font-medium px-2">{time}</p>
      </div>
    </div>
  );
};

export default OutboxItem;
