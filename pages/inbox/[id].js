import { useRouter } from "next/router";
import React from "react";
import { inbox } from "../../data/EmailData";

const InboxScreen = () => {
  const { query, isReady } = useRouter();
  const { id } = query;
  const messageData = inbox.find((x) => x.id === id);
  console.log(query);
  if (!messageData) {
    return <h1>Message not found</h1>;
  }

  return (
    <div>
      <h1>{messageData}</h1>
    </div>
  );
};

export default InboxScreen;
