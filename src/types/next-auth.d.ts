import NextAuth from "next-auth";

declare module "next-auth" {
  interface Roles {
    role: string;
    permissions: string[];
  }
  interface User {
    id: string;
    name: string;
    email: string;
    token: string;
    roles: Roles[];
  }

  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name: string;
    email: string;
    accessToken: string;
  }
}
