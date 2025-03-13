"use client";
import { useEffect, useState } from "react";
import api from "@/lib/api";
// import ProtectedRoute from "@/components/ProtectedRoutes";

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    api.get("/appointments").then((response) => {
      setAppointments(response.data);
    });
  }, []);

  return (
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Appointments</h1>
        <ul>
          {appointments.map((appointment: any) => (
            <li key={appointment.id} className="border-b p-2">{appointment.name}</li>
          ))}
        </ul>
      </div>
  );
}