"use client";

import { Menu, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
  const user = { name: "John Doe", avatar: "/avatar.png" }; // Replace with dynamic data

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
          <button>
            <Avatar>
              <AvatarImage src={user.avatar} alt="User Avatar" />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <div className="px-3 py-2 text-sm text-gray-700">{user.name}</div>
          <DropdownMenuItem className="cursor-pointer text-red-500" onClick={() => alert("Logging out...")}>
            <LogOut size={16} className="mr-2" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
