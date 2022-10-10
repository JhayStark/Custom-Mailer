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

export const getInbox = async (id) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/mails`);
  const inbox = await res.data.inbox;

  if (id) {
    const email = inbox.find((email) => email._id === id);
    return email;
  }

  return inbox;
};

export const getOutbox = async (id) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/mails`);
  const outbox = await res.data.outbox;

  if (id) {
    const email = outbox.find((email) => email._id === id);
    return email;
  }

  return outbox;
};

export const getStarred = async (id) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/mails`);
  const starred = await res.data.starred;

  if (id) {
    const email = starred.find((email) => email._id === id);
    return email;
  }

  return starred;
};

export const getDeleted = async (id) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/mails`);
  const deleted = await res.data.deleted;

  if (id) {
    const email = starred.find((email) => email._id === id);
    return email;
  }

  return deleted;
};
