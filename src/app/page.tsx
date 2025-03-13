"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/appointments");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="flex justify-center items-center h-screen">Checking authentication...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl font-semibold">Welcome to the Admin Dashboard</h1>
    </div>
  );
}
