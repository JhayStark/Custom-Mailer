import React from "react";
import { getEmails } from "../../utils/getEmails";
import Link from "next/link";

export async function getStaticProps() {
  const emails = await getEmails();

  return {
    props: {
      emails,
    },
  };
}

const Mails = ({ emails }) => {
  return (
    <div>
      {emails.map((email) => (
        // eslint-disable-next-line react/jsx-key
        <Link href={`/inbox/${email._id}`}>
          <p>{email.subject}</p>
        </Link>
      ))}
    </div>
  );
};

export default Mails;
