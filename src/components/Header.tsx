"use client";

import { Menu, LogOut, Loader } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function Header({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await signOut({ redirect: false });
    router.replace("/login");
  };

  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      {/* Sidebar Toggle Button */}
      <button onClick={toggleSidebar} className="lg:hidden text-gray-700">
        <Menu size={24} />
      </button>

      <h1 className="text-lg font-semibold">Dashboard</h1>

      {/* User Avatar Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button disabled={loading}>
            <Avatar>
              <AvatarImage
                src={session?.user?.image || "/avatar.png"}
                alt="User Avatar"
              />
              <AvatarFallback>
                {session?.user?.name?.charAt(0) || "U"}
              </AvatarFallback>
            </Avatar>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <div className="px-3 py-2 text-sm text-gray-700">
            {session?.user?.name || "User"}
          </div>
          <DropdownMenuItem
            className="cursor-pointer text-red-500 flex items-center"
            onClick={handleLogout}
          >
            {loading ? (
              <Loader className="animate-spin mr-2" size={16} />
            ) : (
              <LogOut size={16} className="mr-2" />
            )}
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
