"use client";
import { useEffect, useState } from "react";
import api from "@/lib/api";

export default function CareersPage() {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    api.get("/careers").then((response) => {
      setCareers(response.data);
    });
  }, []);

  return (
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Careers</h1>
        <ul>
          {careers.map((career: any) => (
            <li key={career.id} className="border-b p-2">{career.title}</li>
          ))}
        </ul>
      </div>
  );
}