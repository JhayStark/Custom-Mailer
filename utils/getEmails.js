import axios from "axios";

export const getEmails = async (id) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/mails`);
  const emails = await res.data.emails;

  if (id) {
    const email = emails.find((email) => email._id === id);
    return email;
  }

  return emails;
};
