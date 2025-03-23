"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

interface ProtectedPageProps {
  children: ReactNode;
  requiredPermission: string;
}

export default function ProtectedPage({
  children,
  requiredPermission,
}: ProtectedPageProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (status === "loading") return; // Wait until session is fetched

    if (status === "unauthenticated") {
      router.replace("/login"); // Redirect if not logged in
    } else if (
      session?.user?.roles?.some((role: any) =>
        role.permissions.includes(requiredPermission)
      )
    ) {
      setAuthorized(true); // Allow access
    } else {
      router.replace("/403"); // Redirect to Forbidden page
    }
  }, [status, session, router, requiredPermission]);

  if (status === "loading" || !authorized) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-gray-600">Loading...</span>
      </div>
    );
  }

  return <>{children}</>;
}
