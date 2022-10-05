import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";
import { signOut } from "next-auth/react";

const Navbar = () => {
  return (
    <div className="border-b border-b-gray-400 shadow-md ">
      <nav className=" flex justify-between py-2 max-w-6xl mx-auto">
        <div className="flex items-center text-lg gap-2">
          <Link href="/inbox">
            <MailOutlineIcon className="text-gray-700" />
          </Link>
          <span className="text-gray-500 font-semibold">Raven</span>
        </div>
        <div className="rounded-lg w-[60%] border-gray-400 bg-violet-100  ">
          <SearchIcon className="text-violet-500" />
          <input
            type="text"
            placeholder="Search Mail"
            className="outline-0 bg-transparent w-[80%]"
          />
        </div>

        <div className="flex gap-3 cursor-pointer">
          <span className="font-serif font-semibold text-gray-700">
            Hi Joel!
          </span>
          <Link href="/profile">
            <AccountCircleIcon className="text-violet-500 " />
          </Link>
          <LogoutIcon
            className="text-violet-500 "
            onClick={() => signOut({ callbackUrl: "/auth/login" })}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
