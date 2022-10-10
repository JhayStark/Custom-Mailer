import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import db from "../../../lib/dbConnect";
import User from "../../../models/user";

export default NextAuth({
  providers: [
    CredentialsProvider({
      type: "credentials",
      //   credentials: {
      //     email: {
      //       type: String,
      //       label: "Email Address",
      //       placeholder: "Please enter email",
      //       required: true,
      //     },
      //     password: {
      //       label: "Password",
      //       type: String,
      //       placeholder: "Enter password",
      //       required: true,
      //     },
      //   },
      async authorize(credentials) {
        await db.connect();

        //find user
        const user = await User.findOne({
          email: credentials.email,
        });

        //disconnect database
        await db.disconnect();

        //check for users password
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          };
        }
        throw new Error("Invalid email or password");
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
  },
  jwt: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id;
      return token;
    },
    async session({ session, token }) {
      if (token._id) session.user._id = token._id;
      return session;
    },
  },
});
