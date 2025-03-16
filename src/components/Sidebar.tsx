"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Briefcase, Users, Settings } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { name: "Appointments", href: "/appointments", icon: <Calendar size={18} /> },
  { name: "Careers", href: "/careers", icon: <Briefcase size={18} /> },
  { name: "Users", href: "/users", icon: <Users size={18} /> },
  { name: "Settings", href: "/settings", icon: <Settings size={18} /> },
];

export default function Sidebar({
  isOpen,
  closeSidebar,
}: {
  isOpen: boolean;
  closeSidebar: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Background Blur (Closes sidebar when clicked) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#0000004f] bg-opacity-50 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          "text-black w-64 border-r shadow-md p-5 fixed inset-y-0 left-0 transform transition-transform lg:relative lg:translate-x-0 z-50",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <h2 className="text-md font-bold pl-3 mb-5">Admin Dashboard</h2>
        <div className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeSidebar} // Close sidebar on link click
              className={clsx(
                "flex text-[13.3px] font-medium items-center gap-3 px-3 py-2 rounded-md hover:bg-primary hover:text-white transition",
                pathname === item.href ? "bg-primary text-white" : ""
              )}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}
