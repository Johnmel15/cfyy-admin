export type Role = "Super Admin" | "Admin" | "Nurse";

export type Permission =
  | "settings:view"
  | "settings:edit"
  | "settings:delete"
  | "users:view"
  | "users:add"
  | "users:edit"
  | "users:delete"
  | "appointments:view"
  | "appointments:edit"
  | "appointments:delete"
  | "appointments:confirm"
  | "careers:view"
  | "careers:edit"
  | "careers:delete";

export const rolePermissions: Record<Role, Permission[]> = {
  "Super Admin": [
    "settings:view",
    "settings:edit",
    "settings:delete",
    "users:view",
    "users:add",
    "users:edit",
    "users:delete",
    "appointments:view",
    "appointments:edit",
    "appointments:delete",
    "appointments:confirm",
    "careers:view",
    "careers:edit",
    "careers:delete",
  ],
  Admin: [
    "settings:view",
    "settings:edit",
    "settings:delete",
    "users:view",
    "users:add",
    "users:edit",
    "users:delete",
    "appointments:view",
    "appointments:edit",
    "appointments:delete",
    "appointments:confirm",
    "careers:view",
    "careers:edit",
    "careers:delete",
  ],
  Nurse: ["appointments:view", "appointments:confirm", "careers:view"],
};

export function hasPermission(role: Role, permission: Permission): boolean {
  return rolePermissions[role]?.includes(permission) || false;
}
