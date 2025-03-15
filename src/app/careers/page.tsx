"use client";
import ProtectedRoute from "@/components/ProtectedRoutes";
import { useState } from "react";

export default function CareersPage() {
  const [careers, setCareers] = useState([]);

  return (
    <ProtectedRoute>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Careers</h1>
        <ul>
          {careers.map((career: any) => (
            <li key={career.id} className="border-b p-2">
              {career.title}
            </li>
          ))}
        </ul>
      </div>
    </ProtectedRoute>
  );
}
