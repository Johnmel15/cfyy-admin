import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.error("Missing credentials");
          throw new Error("Email and password are required");
        }

        try {
          console.log(
            "Sending request to API:",
            process.env.NEXT_PUBLIC_API_ENDPOINT
          );

          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/login`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            }
          );

          console.log("API Response status:", res.status);

          if (!res.ok) {
            const errorData = await res.json();
            console.error("Login failed:", errorData);
            throw new Error(errorData.message || "Invalid credentials");
          }

          const response = await res.json();
          const user = response.user; // Extract the user object

          if (!user || !user.id) {
            throw new Error("Invalid user data received");
          }

          return {
            id: user.id.toString(),
            name: user.name,
            email: user.email,
            token: response.token, // Token is outside user object
            roles: response.roles, // Include roles & permissions
          } as User;
        } catch (error) {
          console.error("Authorization error:", error);
          throw new Error("Failed to log in. Please check your credentials.");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.accessToken = user.token;
        token.roles = user.roles; // Save roles & permissions
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id as string,
        name: token.name as string,
        email: token.email as string,
        token: token.accessToken as string,
        roles: token.roles as any, // Store roles & permissions
      };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
