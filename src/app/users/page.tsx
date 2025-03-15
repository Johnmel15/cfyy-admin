"use client";
import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoutes";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  return (
    <ProtectedRoute>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Users</h1>
        <ul>
          {users.map((user: any) => (
            <li key={user.id} className="border-b p-2">
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    </ProtectedRoute>
  );
}
