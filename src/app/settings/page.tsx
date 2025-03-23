"use client";
import ProtectedRoute from "@/components/ProtectedRoutes";
import { SettingContainer } from "@/modules/Settings";

export default function UsersPage() {
  return (
    <ProtectedRoute requiredPermission="settings:view">
      <SettingContainer />
    </ProtectedRoute>
  );
}
