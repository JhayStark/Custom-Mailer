import React from "react";
import { getEmails } from "../../utils/getEmails";

export async function getStaticPaths() {
  const res = await getEmails();

  const paths = res.map((email) => ({
    params: { emailId: String(email._id) },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const email = await getEmails(context.params.emailId);

  return {
    props: {
      email,
    },
  };
}

const EmailDetails = ({ email }) => {
  return (
    <div>
      <h1>Email details</h1>
      <hr />
      {email.subject}
    </div>
  );
};

export default EmailDetails;
