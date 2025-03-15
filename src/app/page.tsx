"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/appointments");
    } else if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  return null; // No flickering UI
}
