import { DataTable } from "@/components/Datatable";
import { ActionDropdown } from "@/components/Datatable/components";
import { ColumnDef } from "@tanstack/react-table";
import { Archive, Eye, Trash2 } from "lucide-react";
import React, { useState } from "react";
import Modal from "./Modal";
import { useSession } from "next-auth/react";
import { getUserPermissions } from "@/app/utils/helpers";

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: React.ReactNode;
  actions: { label: string; onClick: () => void; icon?: React.ReactNode }[];
};

const hasPermission = (permissions: string[], action: string) => {
  return permissions.includes(action);
};

const Container = () => {
  const { data: session } = useSession();
  const userRoles = session?.user?.roles || []; // Get user roles
  const userPermissions = getUserPermissions(userRoles); // Extract permissions
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const columns: ColumnDef<User>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "phone", header: "Phone" },
    {
      accessorKey: "message",
      header: "Message",
      cell: ({ row }) => {
        const message = row.original.message as string;
        return (
          <div
            className="max-w-[250px] truncate overflow-hidden text-ellipsis whitespace-nowrap"
            title={message}
          >
            {message}
          </div>
        );
      },
      enableSorting: false,
    },
    {
      id: "actions",
      header: "",
      cell: ({ row }) => {
        const actions = row.original.actions || [];
        const isOpen = openDropdownId === row.id;
        return (
          <ActionDropdown
            actions={actions}
            isOpen={isOpen}
            onToggle={
              () => setOpenDropdownId(isOpen ? null : row.id) // Open only one at a time
            }
          />
        );
      },
      enableHiding: false,
    },
  ];

  const data: User[] = [
    {
      id: "1",
      email: "user1@example.com",
      name: "User One",
      phone: "+90788906",
      message:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Egestas vulputate feugiat tempus fermentum ac ultricies. Diam nam in sapien fringilla, aenean nibh tristique laoreet. Ridiculus pulvinar vestibulum felis praesent fames. Imperdiet morbi velit purus taciti dapibus. Platea convallis elit mollis integer torquent class quam quisque. Nostra vehicula iaculis conubia risus suspendisse magnis bibendum. Gravida orci torquent laoreet per aenean nunc cras, diam erat. Odio hac lacinia erat tempor taciti nibh; vivamus netus euismod. Eros leo tellus torquent; torquent libero adipiscing ridiculus varius feugiat.",
      actions: [
        hasPermission(userPermissions, "appointments:view") && {
          label: "View",
          icon: <Eye size="16" />,
          onClick: () => setIsOpen(true),
        },
        hasPermission(userPermissions, "appointments:delete") && {
          label: "Delete",
          icon: <Trash2 size="16" />,
          onClick: () => alert("Delete User One"),
        },
        hasPermission(userPermissions, "appointments:confirm") && {
          label: "Confirm",
          icon: <Archive size="16" />,
          onClick: () => alert("Confirm Appointment"),
        },
      ].filter(Boolean) as User["actions"], // Filter out undefined actions
    },
    {
      id: "2",
      email: "user2@example.com",
      name: "User Two",
      phone: "+90788906",
      message:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Egestas vulputate feugiat tempus fermentum ac ultricies. Diam nam in sapien fringilla, aenean nibh tristique laoreet. Ridiculus pulvinar vestibulum felis praesent fames. Imperdiet morbi velit purus taciti dapibus. Platea convallis elit mollis integer torquent class quam quisque. Nostra vehicula iaculis conubia risus suspendisse magnis bibendum. Gravida orci torquent laoreet per aenean nunc cras, diam erat. Odio hac lacinia erat tempor taciti nibh; vivamus netus euismod. Eros leo tellus torquent; torquent libero adipiscing ridiculus varius feugiat.",
      actions: [
        hasPermission(userPermissions, "appointments:view") && {
          label: "View",
          icon: <Eye size="16" />,
          onClick: () => setIsOpen(true),
        },
        hasPermission(userPermissions, "appointments:delete") && {
          label: "Delete",
          icon: <Trash2 size="16" />,
          onClick: () => alert("Delete User One"),
        },
        hasPermission(userPermissions, "appointments:confirm") && {
          label: "Confirm",
          icon: <Archive size="16" />,
          onClick: () => alert("Confirm Appointment"),
        },
      ].filter(Boolean) as User["actions"], // Filter out undefined actions
    },
    {
      id: "3",
      email: "user3@example.com",
      name: "User Three",
      phone: "+90788906",
      message:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Egestas vulputate feugiat tempus fermentum ac ultricies. Diam nam in sapien fringilla, aenean nibh tristique laoreet. Ridiculus pulvinar vestibulum felis praesent fames. Imperdiet morbi velit purus taciti dapibus. Platea convallis elit mollis integer torquent class quam quisque. Nostra vehicula iaculis conubia risus suspendisse magnis bibendum. Gravida orci torquent laoreet per aenean nunc cras, diam erat. Odio hac lacinia erat tempor taciti nibh; vivamus netus euismod. Eros leo tellus torquent; torquent libero adipiscing ridiculus varius feugiat.",
      actions: [
        hasPermission(userPermissions, "appointments:view") && {
          label: "View",
          icon: <Eye size="16" />,
          onClick: () => setIsOpen(true),
        },
        hasPermission(userPermissions, "appointments:delete") && {
          label: "Delete",
          icon: <Trash2 size="16" />,
          onClick: () => alert("Delete User One"),
        },
        hasPermission(userPermissions, "appointments:confirm") && {
          label: "Confirm",
          icon: <Archive size="16" />,
          onClick: () => alert("Confirm Appointment"),
        },
      ].filter(Boolean) as User["actions"], // Filter out undefined actions
    },
  ];

  return (
    <div className="p-2">
      <h1 className="text-xl font-medium mb-4">Appointments</h1>
      <DataTable columns={columns} data={data} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Container;
