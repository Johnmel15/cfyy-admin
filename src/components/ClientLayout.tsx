"use client"; // This must be at the top!

import { usePathname } from "next/navigation";
import DashboardLayout from "./DashboardLayout";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login";

  return isAuthPage ? children : <DashboardLayout>{children}</DashboardLayout>;
}
