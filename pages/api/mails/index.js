import Email from "../../../models/email";
import db from "../../../lib/dbConnect";

export default async function handler(req, res) {
  if (req.method === "GET") {
    await db.connect();

    const emails = await Email.find({});

    await db.connect();

    res.status(200).json({ emails });
    return;
  } else if (req.method === "POST") {
    await db.connect();

    const { to, subject, message } = req.body;

    const email = await Email.create({
      to,
      subject,
      message,
    });

    await db.disconnect();

    res.status(201).json({ email });
  } else {
    res.status(404).json({ error: "Only POST and GET methods are allowed" });
  }
}
