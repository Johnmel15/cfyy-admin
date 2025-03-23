"use client";
import { useSession } from "next-auth/react";

export function usePermissions() {
  const { data: session } = useSession();
  const roles = session?.user?.roles || [];

  // Check if user has a specific permission
  const hasPermission = (permission: string) => {
    return roles.some((role: any) => role.permissions.includes(permission));
  };

  return { roles, hasPermission };
}
