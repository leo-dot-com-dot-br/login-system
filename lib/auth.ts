import { db } from "@/db/drizzle";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const email = credentials.email as string;
        const password = credentials.password as string;

        const user = await db.query.users.findFirst({
          where: (users, { eq }) => eq(users.email, email),
        });

        if (!user) return null;
        if (!user.password) return null;

        const correctPass = await bcrypt.compare(password, user.password);

        if (!correctPass) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
        };
      },
    }),
  ],
});
