import CheckBox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
import { inbox } from "../data/EmailData";

const InboxItem = ({ starred, from, subject, message, recieved, id }) => {
  return (
    <div className="flex items-center mr-1 cursor-pointer">
      <div className="flex sm:flex-col md:flex-row lg:flex-row">
        <CheckBox />
        <IconButton>{starred ? <StarIcon /> : <StarOutlineIcon />}</IconButton>
        <IconButton>
          <DeleteForeverIcon />
        </IconButton>
      </div>
      <div className="w-full flex justify-between ">
        <p className="font-medium">{from}</p>
        <Link href={`/inbox/${id}`}>
          <p className="font-medium">
            {subject}-<span className="font-normal">{message}</span>
          </p>
        </Link>
        <p className="font-medium px-2">{recieved}</p>
      </div>
    </div>
  );
};

export default InboxItem;
