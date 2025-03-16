"use client";
import ProtectedRoute from "@/components/ProtectedRoutes";
import { CareerContainer } from "@/modules/Career";

export default function CareersPage() {
  return (
    <ProtectedRoute>
      <CareerContainer />
    </ProtectedRoute>
  );
}
