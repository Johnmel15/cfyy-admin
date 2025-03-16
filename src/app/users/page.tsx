"use client";
import ProtectedRoute from "@/components/ProtectedRoutes";
import { UsersContainer } from "@/modules/Users";

export default function UsersPage() {
  return (
    <ProtectedRoute>
      <UsersContainer />
    </ProtectedRoute>
  );
}
