"use client";
import ProtectedRoute from "@/components/ProtectedRoutes";
import { AppointmentContainer } from "@/modules/Appointment";

export default function AppointmentsPage() {
  return (
    <ProtectedRoute requiredPermission="appointments:view">
      <AppointmentContainer />
    </ProtectedRoute>
  );
}
