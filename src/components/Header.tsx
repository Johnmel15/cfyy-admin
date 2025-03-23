"use client";

import { Menu, LogOut, Loader, BadgeCheck } from "lucide-react";
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
import { Badge } from "./ui/badge";

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
    <header className="bg-white border-b-[#e5e5e5] shadow-md p-4 flex items-center justify-between lg:justify-end z-[2]">
      {/* Sidebar Toggle Button */}
      <button onClick={toggleSidebar} className="lg:hidden text-gray-700">
        <Menu size={24} />
      </button>

      {/* User Avatar Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button disabled={loading}>
            <Avatar className="cursor-pointer border-2 border-primary">
              <AvatarImage src="/avatar/male.png" alt="User Avatar" />
              <AvatarFallback>
                {session?.user?.name?.charAt(0) || "U"}
              </AvatarFallback>
            </Avatar>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-48 border-gray-200 w-auto"
        >
          <div className="flex items-center gap-2 px-2 py-2 text-sm text-gray-700">
            <Avatar className="border-2 border-primary w-[60px] h-[60px]">
              <AvatarImage src="/avatar/male.png" alt="User Avatar" />
              <AvatarFallback>
                {session?.user?.name?.charAt(0) || "U"}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-[700] text-[13.3px]">
                {session?.user?.name || "User"}
              </p>
              <p className="text-[12px] text-gray-500">
                {session?.user?.email || "User"}
              </p>
              <Badge
                variant="outline"
                className="text-[10px] bg-primary text-white font-[600]"
              >
                {session?.user?.roles[0]?.role?.toUpperCase()}
              </Badge>
            </div>
          </div>
          <hr className="border-gray-200 pb-1" />
          <DropdownMenuItem
            className="group cursor-pointer text-[13.3px] px-4 flex items-center hover:bg-primary"
            // onClick={handleLogout}
          >
            <BadgeCheck
              size={16}
              className="text-black group-hover:text-white"
            />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem
            className="group cursor-pointer text-[13.3px] px-4 flex items-center"
            onClick={handleLogout}
          >
            {loading ? (
              <Loader className="animate-spin mr-2" size={16} />
            ) : (
              <LogOut size={16} className="text-black group-hover:text-white" />
            )}
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
