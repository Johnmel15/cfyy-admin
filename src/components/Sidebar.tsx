"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Briefcase, Users } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { name: "Appointments", href: "/appointments", icon: <Calendar size={20} /> },
  { name: "Careers", href: "/careers", icon: <Briefcase size={20} /> },
  { name: "Users", href: "/users", icon: <Users size={20} /> },
];

export default function Sidebar({ isOpen, closeSidebar }: { isOpen: boolean; closeSidebar: () => void }) {
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
          "bg-gray-900 text-white w-64 p-5 fixed inset-y-0 left-0 transform transition-transform lg:relative lg:translate-x-0 z-50",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <h2 className="text-xl font-bold mb-5">Admin Dashboard</h2>
        <nav>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeSidebar} // Close sidebar on link click
              className={clsx(
                "flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition",
                pathname === item.href ? "bg-gray-700" : ""
              )}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
