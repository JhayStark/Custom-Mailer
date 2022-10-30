import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useSession } from "next-auth/react";

const Layout = ({ children }) => {
  const { data: session, status } = useSession();
  const user = session?.user?.email;
  return (
    <>
      <div>
        {user && <Navbar />}
        {children}
      </div>
    </>
  );
};

export default Layout;
