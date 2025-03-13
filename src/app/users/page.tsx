"use client";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import ProtectedRoute from "@/components/ProtectedRoutes";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Users</h1>
        <ul>
          {users.map((user: any) => (
            <li key={user.id} className="border-b p-2">{user.name}</li>
          ))}
        </ul>
      </div>
  );
}