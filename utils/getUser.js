import { getSession } from "next-auth/client";

const getUserData = async (req, res) => {
  const session = await getSession({ req });
};

export default getUserData;
