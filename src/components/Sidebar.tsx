"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Briefcase, Users, Settings } from "lucide-react";
import clsx from "clsx";
import { usePermissions } from "@/hooks/usePermissions";

const navItems = [
  {
    name: "Appointments",
    href: "/appointments",
    icon: <Calendar size={18} />,
    permission: "appointments:view",
  },
  {
    name: "Careers",
    href: "/careers",
    icon: <Briefcase size={18} />,
    permission: "careers:view",
  },
  {
    name: "Users",
    href: "/users",
    icon: <Users size={18} />,
    permission: "users:view",
  },
  {
    name: "Settings",
    href: "/settings",
    icon: <Settings size={18} />,
    permission: "settings:view",
  },
];

export default function Sidebar({
  isOpen,
  closeSidebar,
}: {
  isOpen: boolean;
  closeSidebar: () => void;
}) {
  const pathname = usePathname();
  const { hasPermission } = usePermissions();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#0000004f] bg-opacity-50 lg:hidden"
          onClick={closeSidebar}
        />
      )}
      <aside
        className={clsx(
          "bg-white text-black w-64 border-r shadow-md p-5 fixed inset-y-0 left-0 transform transition-transform lg:relative lg:translate-x-0 z-50",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <h2 className="text-md font-bold pl-3 mb-5">Admin Dashboard</h2>
        <div className="flex flex-col gap-1">
          {navItems.map((item) =>
            hasPermission(item.permission) ? (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeSidebar}
                className={clsx(
                  "flex text-[13.3px] font-medium items-center gap-3 px-3 py-2 rounded-md hover:bg-primary hover:text-white transition",
                  pathname === item.href ? "bg-primary text-white" : ""
                )}
              >
                {item.icon}
                {item.name}
              </Link>
            ) : null
          )}
        </div>
      </aside>
    </>
  );
}
