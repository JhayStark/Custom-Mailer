import Email from "../../../models/email";
import db from "../../../lib/dbConnect";
import User from "../../../models/user";

export default async function handler(req, res) {
  const fromUser = "634147ced6b76f815b36eeac";
  const sender = await User.findById(fromUser);
  const now = new Date();
  const mins = now.getMinutes();
  const hours = now.getHours();
  const time = `${hours}:${mins}`;

  if (req.method === "GET") {
    await db.connect();

    const emails = await Email.find({});
    const inbox = await Email.find({ to: sender.email });
    const outbox = await Email.find({ from: sender.email });
    const starred = await Email.find({ to: sender.email, starred: true });
    const deleted = await Email.find({ to: sender.email, deleted: true });

    await db.connect();

    res.status(200).json({ emails, inbox, outbox, starred, deleted });
  } else if (req.method === "POST") {
    await db.connect();

    try {
      const { to, subject, message } = req.body;

      const recipientId = to;
      const recipients = recipientId.split(",");
      for (let i = 0; i < recipients.length; i++) {
        const recipient = await User.findOne({ email: recipients[i] });
        if (recipient) {
          const email = await Email.create({
            from: sender.email,
            to: recipient.email,
            subject,
            message,
            time: time,
          });
          await recipient.updateOne({ $push: { inbox: email._id } });
          await sender.updateOne({ $push: { outbox: email._id } });
          res.status(201).json({ email });
        } else {
          res.status(404).json({ message: "recipient not found" });
        }
      }

      // const recipient = await User.findOne({ email: recipientId });
      // if (recipient) {
      //   const email = await Email.create({
      //     from: sender.email,
      //     to,
      //     subject,
      //     message,
      //     time: time,
      //   });

      //   await recipient.updateOne({ $push: { inbox: email._id } });
      //   await sender.updateOne({ $push: { outbox: email._id } });
      //   res.status(201).json({ email });
      // } else {
      //   res.status(404).json({ message: "recipient not found" });
      // }
    } catch (error) {
      console.log(`${error}`);
    }

    await db.disconnect();
  } else {
    res.status(404).json({ error: "Only POST and GET methods are allowed" });
  }
}
